import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';
import { Shield, Code2, Cpu, Users, BookOpen, Zap } from 'lucide-react';

const traits = [
  { icon: <Code2 size={20} />, label: 'Full-Stack Dev', desc: 'Python, Flask, React, JS' },
  { icon: <Shield size={20} />, label: 'Cybersecurity', desc: 'SOC, SIEM, Wazuh, Kali' },
  { icon: <Cpu size={20} />, label: 'AI / ML', desc: 'Random Forest, Prediction Models' },
  { icon: <Zap size={20} />, label: 'Fast Learner', desc: 'Self-motivated & adaptable' },
  { icon: <Users size={20} />, label: 'Team Player', desc: 'Collaborative & communicative' },
  { icon: <BookOpen size={20} />, label: 'Certified', desc: 'Cisco, GUVI, Great Learning' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          {/* Heading */}
          <div className="mb-16">
            <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">01. About</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-gray-900 mt-2">
              Who Am I<span className="text-cyber-500">?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="dark:text-gray-300 text-gray-600 text-lg leading-relaxed mb-6">
                {personalInfo.objective}
              </p>

              <div className="flex flex-wrap gap-3">
                {['Python', 'Java', 'JavaScript', 'Cybersecurity', 'Flask', 'SIEM', 'Machine Learning', 'SQL'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg font-mono text-xs dark:bg-cyber-500/10 bg-cyber-50 text-cyber-600 dark:text-cyber-400 border dark:border-cyber-500/20 border-cyber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl dark:bg-white/3 bg-gray-50 border dark:border-white/8 border-gray-100 transition-all duration-300 hover:border-cyber-500/30 dark:hover:bg-white/5 card-glow"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyber-500/10 flex items-center justify-center text-cyber-500 mb-3">
                    {trait.icon}
                  </div>
                  <p className="font-display font-semibold text-sm dark:text-white text-gray-900 mb-0.5">{trait.label}</p>
                  <p className="text-xs dark:text-gray-400 text-gray-500">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
