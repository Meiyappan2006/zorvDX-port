import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    // FIX 1: Reduced top/bottom padding on mobile (py-16) vs desktop (md:py-32)
    <section id="portfolio-alt" className="py-16 md:py-32 bg-teal-50/20 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* FIX 2: Alignment. 
            items-start (Mobile: Left align) -> md:items-end (Desktop: Bottom align) 
            Reduced margin bottom on mobile (mb-12) */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Masterpieces</h2>
            <p className="text-slate-500 text-lg">
              A curated selection of our most impactful deployments across AI, SaaS, and Digital Identity.
            </p>
          </div>
          
          {/* FIX 3: Button is full width on mobile (w-full), auto width on desktop (md:w-auto) */}
          <button className="w-full md:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
            View Case Studies <Plus size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // FIX 4: Reduced Border Radius on mobile. rounded-3xl (Mobile) -> rounded-[3rem] (Desktop)
              className="group relative rounded-3xl md:rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 shadow-xl border border-teal-50 dark:border-slate-800"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* FIX 5: Reduced padding inside the overlay. p-6 (Mobile) -> p-12 (Desktop) */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 md:p-12 flex flex-col justify-between text-white translate-y-full group-hover:translate-y-0">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] mb-4 block">Project Detail</span>
                    {/* Added text-sm for mobile readability in overlay */}
                    <p className="text-sm md:text-xl font-medium leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-0">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 md:px-4 md:py-2 bg-white/20 rounded-full text-xs md:text-sm font-bold backdrop-blur-md">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FIX 6: Reduced padding in the footer card. p-6 (Mobile) -> p-10 (Desktop) */}
              <div className="p-6 md:p-10 flex items-center justify-between">
                <div>
                  <span className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-2 block">{project.category}</span>
                  {/* Reduced font size slightly on mobile */}
                  <h3 className="text-2xl md:text-3xl font-black">{project.title}</h3>
                </div>
                {/* Reduced button size slightly on mobile */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-teal-500 group-hover:text-white transition-all shadow-inner flex-shrink-0 ml-4">
                  <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
