import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/portfolio';

const colorMap = {
  cyber: 'text-teal-400 dark:text-teal-400 bg-teal-500/10 border-teal-500/20',
  teal: 'text-cyan-400 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  green: 'text-green-400 dark:text-green-400 bg-green-500/10 border-green-500/20',
  blue: 'text-blue-400 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-400 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
  pink: 'text-pink-400 dark:text-pink-400 bg-pink-500/10 border-pink-500/20',
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">03. Skills</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-gray-900 mt-2">
              Technical Arsenal
            </h2>
            <p className="dark:text-gray-400 text-gray-500 mt-3 max-w-xl">
              Technologies and tools I use to build, secure, and optimize systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl dark:bg-white/3 bg-white border dark:border-white/8 border-gray-100 transition-all duration-300 hover:border-cyber-500/30 card-glow"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl border ${colorMap[category.color]}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold dark:text-white text-gray-900">{category.category}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="px-3 py-1.5 rounded-lg text-sm font-mono dark:bg-white/5 bg-gray-50 dark:text-gray-300 text-gray-600 dark:border-white/8 border border-gray-200 hover:border-cyber-500/40 dark:hover:text-cyber-400 hover:text-cyber-500 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
