import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Mail, ExternalLink, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t dark:border-white/8 border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-500 to-teal-400 flex items-center justify-center">
              <Terminal size={14} className="text-white" />
            </div>
            <span className="font-display font-bold dark:text-white text-gray-900">
              {personalInfo.name}<span className="text-cyber-500">.</span>
            </span>
          </div>

          {/* Center */}
          <p className="text-sm dark:text-gray-500 text-gray-400 flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-400" /> by {personalInfo.name}
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg dark:bg-white/5 bg-gray-100 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-cyber-500 hover:bg-cyber-500/10 transition-all"
            >
              <Mail size={15} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg dark:bg-white/5 bg-gray-100 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-cyber-500 hover:bg-cyber-500/10 transition-all"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
