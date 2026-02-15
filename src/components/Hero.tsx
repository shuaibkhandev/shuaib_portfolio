"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
      
      {/* Subtle Gradient Spotlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Available for work
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
        >
          Engineering <br className="hidden md:block" />
          <span className="text-slate-500 dark:text-slate-500">Exceptional</span> Digital Experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am Shuaib Khan, a frontend architect focused on building accessible, pixel-perfect, and performant web applications using modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-slate-900 dark:bg-white px-8 font-medium text-white dark:text-slate-900 transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-[1.02]"
          >
            <span className="mr-2">View Work</span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </Link>
          <a
            href="/Shuaibkhan_Resume.pdf"
            className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-transparent px-8 font-medium text-slate-900 dark:text-white transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <Download className="mr-2" size={18} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
