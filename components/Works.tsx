import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';
import { PROJECTS } from '../constants'; // Using the file you provided

const Works: React.FC = () => {
  return (
    <section id="works" className="py-20 lg:py-32 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            {/* --- DEBUGGED RESPONSIVE LINE BELOW --- */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight text-zinc-900 dark:text-white">
              Masterpieces
            </h2>
            <p className="text-zinc-500 text-lg">
              A curated selection of our most impactful deployments across AI, SaaS, and Digital Identity.
            </p>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
            View Case Studies <Plus size={20} />
          </button>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-white dark:bg-zinc-950 shadow-xl border border-zinc-200 dark:border-zinc-800"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-zinc-900/90 opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-center items-center text-center">
                   <p className="text-white text-lg font-medium leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     {project.description}
                   </p>
                   <div className="flex flex-wrap justify-center gap-2 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold border border-yellow-400/20">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-8 flex items-center justify-between">
                <div>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:bg-yellow-400 group-hover:text-black transition-all">
                  <ExternalLink size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
