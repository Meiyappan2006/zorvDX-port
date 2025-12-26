import React from 'react';
import {
  ArrowUpRight,
  Github,
  Facebook,
  Linkedin,
  Instagram
} from 'lucide-react';
import Logo from './Logo';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/zorvdx/',
  facebook: 'https://www.facebook.com/profile.php?id=61585711797455',
  linkedin: 'https://www.linkedin.com/company/zorvdx',
  github: 'https://github.com/zorvDX'
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-32 pb-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-20 mb-24">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-12 h-12" />
              <span className="font-black text-3xl tracking-tighter text-white">
                zorv<span className="text-yellow-400 italic">DX</span>
              </span>
            </div>

            <p className="text-zinc-500 text-lg max-w-sm mb-10 font-light leading-relaxed">
              We define the cutting edge of SaaS and AI evolution. Built for the
              bold, engineered for the efficient.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              >
                <Facebook size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-10">
              Navigation
            </h4>
            <ul className="space-y-4 font-bold">
              <li>
                <a href="#about" className="text-white hover:text-yellow-400 transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-yellow-400 transition-all">
                  Services
                </a>
              </li>
              <li>
                <a href="#works" className="text-white hover:text-yellow-400 transition-all">
                  Our Works
                </a>
              </li>
              <li>
                <a href="#team" className="text-white hover:text-yellow-400 transition-all">
                  The Team
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-10">
              Legal Protocol
            </h4>
            <div className="space-y-6">
              <p className="text-xs text-zinc-600 leading-relaxed italic">
                Terms: All creative outputs and technical architectures remain
                the intellectual property of zorvDX until contract finalization.
                No unauthorized reproduction of AI models permitted.
              </p>
              <ul className="space-y-4 font-bold text-zinc-400">
                <li>
                  <button className="hover:text-yellow-400">
                    Terms of Evolution
                  </button>
                </li>
                <li>
                  <button className="hover:text-yellow-400">
                    Privacy Shield
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-700 text-xs font-black uppercase tracking-widest">
            © {new Date().getFullYear()} zorvDX Systems. All Rights Reserved.
          </p>

          <div className="text-zinc-500 text-xs flex items-center gap-2">
            STAY CONNECTED
            <ArrowUpRight size={14} className="text-yellow-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
