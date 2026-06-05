import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { education } from '../data/portfolio';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 relative dark:bg-white/[0.01] bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">02. Education</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-gray-900 mt-2">
              Academic Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px dark:bg-gradient-to-b bg-gradient-to-b dark:from-cyber-500/50 from-cyber-300 dark:via-cyber-500/20 via-cyber-200 dark:to-transparent to-transparent" />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[26px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    edu.current
                      ? 'border-cyber-500 bg-cyber-500 shadow-lg shadow-cyber-500/50'
                      : 'dark:border-gray-600 border-gray-300 dark:bg-[#050a0e] bg-white'
                  }`}>
                    {edu.current && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  </div>

                  {/* Card */}
                  <div className={`p-6 rounded-2xl border transition-all duration-300 card-glow ${
                    edu.current
                      ? 'dark:bg-cyber-500/5 bg-cyber-50 dark:border-cyber-500/30 border-cyber-200'
                      : 'dark:bg-white/3 bg-white dark:border-white/8 border-gray-100'
                  }`}>
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {edu.current && (
                            <span className="px-2 py-0.5 rounded text-xs font-mono bg-cyber-500/20 text-cyber-500 border border-cyber-500/30">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-0.5">
                          {edu.degree}
                        </h3>
                        <p className="dark:text-gray-300 text-gray-600 font-medium">{edu.institution}</p>

                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm dark:text-gray-400 text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-cyber-500" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="text-cyber-500" />
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1.5 dark:bg-white/5 bg-gray-100 px-3 py-2 rounded-xl">
                          <Star size={14} className="text-amber-400" />
                          <span className="font-mono font-bold text-cyber-500 dark:text-cyber-400">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
