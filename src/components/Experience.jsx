import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { workshops } from '../data/portfolio';
import { MapPin, CheckCircle2, Shield } from 'lucide-react';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">05. Experience</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-gray-900 mt-2">
              Workshops & Training
            </h2>
          </div>

          {workshops.map((ws, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl dark:bg-white/3 bg-white border dark:border-white/8 border-gray-100 overflow-hidden card-glow"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-500/20 to-teal-500/10 border dark:border-cyber-500/20 border-cyber-200 flex items-center justify-center text-2xl flex-shrink-0">
                    {ws.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-1">
                      {ws.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm dark:text-gray-400 text-gray-500">
                      <span className="font-medium text-cyber-500 dark:text-cyber-400">{ws.org}</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {ws.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 gap-4">
                  {ws.highlights.map((hl, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.08 }}
                      className="flex items-start gap-3 p-4 rounded-xl dark:bg-white/3 bg-gray-50 dark:border-white/5 border border-gray-100"
                    >
                      <CheckCircle2 size={16} className="text-cyber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed">{hl}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Skills gained */}
                <div className="mt-6 pt-6 border-t dark:border-white/8 border-gray-100">
                  <p className="text-xs font-mono uppercase tracking-widest dark:text-gray-500 text-gray-400 mb-3">Skills Gained</p>
                  <div className="flex flex-wrap gap-2">
                    {['SIEM Operations', 'Threat Detection', 'Log Analysis', 'Wazuh', 'SOC Workflows', 'Incident Response'].map((sk) => (
                      <span
                        key={sk}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono dark:bg-cyber-500/10 bg-cyber-50 text-cyber-600 dark:text-cyber-400 border dark:border-cyber-500/20 border-cyber-200"
                      >
                        <Shield size={10} />
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
