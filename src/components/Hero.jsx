import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, ChevronDown, Shield, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const taglines = personalInfo.taglines;

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const text = taglines[currentTagline];
    let i = 0;
    setDisplayed('');
    setTyping(true);

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTyping(false);
        setTimeout(() => {
          setCurrentTagline((prev) => (prev + 1) % taglines.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentTagline]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { icon: <Shield size={20} />, label: 'Security', delay: 0, x: '-left-8', y: 'top-12' },
    { icon: <Code2 size={20} />, label: 'Dev', delay: 0.5, x: '-right-8', y: 'top-20' },
    { icon: <Cpu size={20} />, label: 'AI', delay: 1, x: '-left-4', y: 'bottom-16' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-[#050a0e]/50 dark:to-[#050a0e] bg-gradient-to-b from-transparent via-white/20 to-white/80" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-cyber-500/10 bg-cyber-500/10 border dark:border-cyber-500/30 border-cyber-500/40 text-cyber-600 dark:text-cyber-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-500 animate-pulse" />
          Available for Opportunities · Class of 2026
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="relative inline-block mb-8"
        >
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyber-500 via-teal-400 to-cyber-700 flex items-center justify-center mx-auto shadow-2xl shadow-cyber-500/30 neon-border">
            <span className="font-display font-bold text-4xl text-white tracking-tight">MM</span>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 dark:border-[#050a0e] border-white flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display font-bold text-5xl md:text-7xl dark:text-white text-gray-900 mb-4 tracking-tight"
        >
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i} className={i === 0 ? 'gradient-text' : ''}>{word} </span>
          ))}
        </motion.h1>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-xl md:text-2xl text-cyber-500 dark:text-cyber-400 mb-6 h-8 flex items-center justify-center gap-1"
        >
          <span className="text-gray-400 dark:text-gray-500">{'> '}</span>
          <span>{displayed}</span>
          <span className={`w-0.5 h-6 bg-cyber-500 ml-0.5 ${typing ? 'animate-pulse' : 'opacity-0'}`} />
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm mb-10"
        >
          <MapPin size={14} className="text-cyber-500" />
          {personalInfo.location}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,157,0.3)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex items-center gap-2 px-7 py-3.5 bg-cyber-500 text-white font-medium rounded-xl hover:bg-cyber-400 transition-all duration-300 shadow-lg shadow-cyber-500/25"
          >
            <Mail size={18} />
            Get In Touch
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Mahaalingam_M_Resume.pdf"
            className="flex items-center gap-2 px-7 py-3.5 dark:bg-white/5 bg-gray-100 dark:text-white text-gray-700 font-medium rounded-xl dark:hover:bg-white/10 hover:bg-gray-200 transition-all duration-300 border dark:border-white/10 border-gray-200"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-8 mt-14"
        >
          {[
            { value: '8.18', label: 'CGPA', suffix: '' },
            { value: '3', label: 'Projects', suffix: '+' },
            { value: '3', label: 'Certifications', suffix: '' },
            { value: '98.4', label: 'SSLC %', suffix: '%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-bold text-2xl gradient-text">{stat.value}{stat.suffix}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-cyber-500 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
