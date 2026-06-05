import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { certifications } from '../data/portfolio';
import { Award, BadgeCheck } from 'lucide-react';

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="py-24 relative dark:bg-white/[0.01] bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">06. Certifications</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-gray-900 mt-2">
              Credentials
            </h2>
            <p className="dark:text-gray-400 text-gray-500 mt-3">
              Verified certifications from industry-recognized organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative p-6 rounded-2xl dark:bg-white/3 bg-white border dark:border-white/8 border-gray-100 overflow-hidden card-glow transition-all duration-300"
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px]" style={{ background: `${cert.accent}15` }} />
                <Award size={28} className="absolute top-4 right-4 opacity-20" style={{ color: cert.accent }} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} border dark:border-white/10 border-gray-200 flex items-center justify-center text-3xl mb-5`}>
                    {cert.icon}
                  </div>

                  {/* Field badge */}
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono mb-3 border"
                    style={{
                      backgroundColor: `${cert.accent}15`,
                      color: cert.accent,
                      borderColor: `${cert.accent}30`,
                    }}
                  >
                    {cert.field}
                  </span>

                  <h3 className="font-display font-bold dark:text-white text-gray-900 text-lg mb-1 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-3">
                    <BadgeCheck size={15} style={{ color: cert.accent }} />
                    <span className="text-sm font-medium" style={{ color: cert.accent }}>{cert.issuer}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
