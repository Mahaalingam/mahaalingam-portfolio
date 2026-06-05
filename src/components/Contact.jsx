import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <ExternalLink size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mahaalingam',
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">07. Contact</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-gray-900 mt-2">
              Let's Connect
            </h2>
            <p className="dark:text-gray-400 text-gray-500 mt-3 max-w-xl">
              I'm open to internships, full-time roles, and exciting collaborations. Drop me a message!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-5">
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.label === 'LinkedIn' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 rounded-xl dark:bg-white/3 bg-white border dark:border-white/8 border-gray-100 hover:border-cyber-500/40 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyber-500/10 flex items-center justify-center text-cyber-500 group-hover:bg-cyber-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono dark:text-gray-500 text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="font-medium dark:text-white text-gray-900 text-sm mt-0.5">{item.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Availability */}
              <div className="p-5 rounded-xl dark:bg-green-500/5 bg-green-50 border dark:border-green-500/20 border-green-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">Available for Opportunities</span>
                </div>
                <p className="text-xs dark:text-gray-400 text-gray-500">Open to internships and full-time roles • Class of 2026</p>
              </div>
            </div>

            {/* Right: form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 p-8 rounded-2xl dark:bg-white/3 bg-white border dark:border-white/8 border-gray-100 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { key: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                  { key: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email' },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="block text-xs font-mono uppercase tracking-wider dark:text-gray-400 text-gray-500 mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={formData[key]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 placeholder:dark:text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-cyber-500 transition-colors text-sm font-body"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider dark:text-gray-400 text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 placeholder:dark:text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-cyber-500 transition-colors text-sm font-body resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(20,184,154,0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'bg-cyber-500 hover:bg-cyber-400 text-white'
                }`}
              >
                {sent ? (
                  <><CheckCircle2 size={18} /> Message Sent!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
