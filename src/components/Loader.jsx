import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center dark:bg-[#050a0e] bg-white"
    >
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyber-500 via-teal-400 to-cyber-700 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyber-500/40"
        >
          <span className="font-display font-bold text-3xl text-white">MM</span>
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-1 dark:bg-white/10 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-cyber-500 to-teal-400 rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-xs dark:text-gray-500 text-gray-400 mt-4 tracking-widest"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}
