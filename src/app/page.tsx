"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden selection:bg-brand-red selection:text-white px-4">
      {/* Soft Background Gradients */}
      <div className="absolute top-[-15%] right-[-5%] w-[60%] h-[60%] bg-blue-50/50 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[60%] h-[60%] bg-rose-50/50 blur-[120px] rounded-full" />
      <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-amber-50/30 blur-[100px] rounded-full" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-brand-red uppercase bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full shadow-sm"
          >
            Evolution in Progress
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-slate-900">
            Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Soon</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-12 max-w-xl mx-auto">
            We are refining our digital presence to better showcase our vision. A new experience is unfolding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/923451399912"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-slate-900 text-white font-medium rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-slate-200 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Chat on WhatsApp
            </span>
            <div className="absolute inset-0 bg-brand-red translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/shuaibdev/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <div className="w-1 h-1 rounded-full bg-slate-200" />
            <a
              href="https://github.com/shuaibkhandev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[20%] w-4 h-4 bg-brand-yellow/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] right-[15%] w-6 h-6 bg-brand-blue/20 rounded-full blur-sm"
      />
    </main>
  );
}
