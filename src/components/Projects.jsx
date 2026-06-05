import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const ref = useScrollReveal();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="py-24 relative dark:bg-white/[0.01] bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">04. Projects</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-gray-900 mt-2">
              What I've Built
            </h2>
            <p className="dark:text-gray-400 text-gray-500 mt-3">
              Real-world systems spanning AI, cybersecurity, and full-stack development.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  expanded === i
                    ? 'dark:border-cyber-500/40 border-cyber-300 dark:bg-cyber-500/5 bg-cyber-50/30'
                    : 'dark:border-white/8 border-gray-100 dark:bg-white/3 bg-white'
                } card-glow`}
              >
                {/* Card header */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl flex-shrink-0 border dark:border-white/10 border-gray-200`}>
                        {project.icon}
                      </div>

                      <div className="flex-1">
                        {/* Category badge */}
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono dark:bg-cyber-500/10 bg-cyber-50 text-cyber-600 dark:text-cyber-400 border dark:border-cyber-500/20 border-cyber-200 mb-2">
                          {project.category}
                        </span>

                        <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-2 leading-tight">
                          {project.title}
                        </h3>

                        <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tech.slice(0, 5).map((tech, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono dark:bg-white/5 bg-gray-100 dark:text-gray-300 text-gray-600 dark:border-white/10 border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="px-2.5 py-1 rounded-lg text-xs font-mono dark:bg-white/5 bg-gray-100 dark:text-gray-400 text-gray-500">
                              +{project.tech.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Toggle btn */}
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="flex-shrink-0 w-9 h-9 rounded-lg dark:bg-white/5 bg-gray-100 flex items-center justify-center dark:text-gray-400 text-gray-500 hover:text-cyber-500 transition-colors mt-1"
                    >
                      {expanded === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Expanded features */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t dark:border-white/8 border-gray-100 pt-6">
                        <h4 className="font-display font-semibold dark:text-white text-gray-900 mb-4 text-sm uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.05 }}
                              className="flex items-start gap-2.5"
                            >
                              <CheckCircle2 size={16} className="text-cyber-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm dark:text-gray-300 text-gray-600">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* All tech */}
                        <div className="mt-5">
                          <h4 className="font-display font-semibold dark:text-white text-gray-900 mb-3 text-sm uppercase tracking-wider">
                            Full Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, j) => (
                              <span
                                key={j}
                                className="px-2.5 py-1 rounded-lg text-xs font-mono dark:bg-cyber-500/10 bg-cyber-50 text-cyber-600 dark:text-cyber-400 border dark:border-cyber-500/20 border-cyber-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
