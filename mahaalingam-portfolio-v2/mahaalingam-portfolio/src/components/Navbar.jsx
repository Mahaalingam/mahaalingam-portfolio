import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#050a0e]/90 backdrop-blur-xl border-b border-cyber-500/20'
              : 'bg-white/90 backdrop-blur-xl border-b border-cyber-500/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNav(e, '#hero')}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyber-500 to-teal-400 flex items-center justify-center">
              <Terminal size={18} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg dark:text-white text-gray-900">
              MM<span className="text-cyber-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-3 py-2 text-sm font-body font-medium dark:text-gray-400 text-gray-500 hover:text-cyber-500 dark:hover:text-cyber-400 transition-colors duration-200 rounded-lg hover:bg-cyber-500/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-lg dark:bg-white/5 bg-gray-100 flex items-center justify-center dark:text-gray-300 text-gray-600 hover:text-cyber-500 transition-colors"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-500 text-white text-sm font-medium hover:bg-cyber-400 transition-colors"
              onClick={(e) => handleNav(e, '#contact')}
            >
              Hire Me
            </motion.button>

            {/* Mobile menu */}
            <button
              className="md:hidden w-9 h-9 rounded-lg dark:bg-white/5 bg-gray-100 flex items-center justify-center dark:text-gray-300 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-[73px] left-0 right-0 z-40 dark:bg-[#050a0e]/95 bg-white/95 backdrop-blur-xl border-b dark:border-white/10 border-gray-200 p-4`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block px-4 py-3 dark:text-gray-300 text-gray-700 hover:text-cyber-500 font-medium rounded-lg hover:bg-cyber-500/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
