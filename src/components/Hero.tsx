"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, X } from "lucide-react";

export default function Hero() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

        {/* Subtle ambient glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-brand-blue/4 dark:bg-brand-blue/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-8 right-10 w-64 h-64 rounded-full bg-brand-red/4 dark:bg-brand-red/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-slate-900 dark:text-white mb-6 leading-[0.95]"
            >
              I build <span className="text-slate-500 dark:text-slate-400">thoughtful</span>
              <br className="hidden md:block" />
              digital products.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I am Shuaib Khan, a Full Stack Developer with 3+ years of experience building scalable web applications. Currently expanding into AI Engineering, building LLM-powered applications and AI agents, alongside hands-on experience in Web3 development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
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
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white/80 px-8 font-medium text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
              >
                <Download className="mr-2" size={18} /> Resume
              </a>

              <button
                type="button"
                onClick={() => setShowCard(true)}
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white/80 px-8 font-medium text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
              >
                Portfolio Card
              </button>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
                <span className="font-semibold text-slate-900 dark:text-white">3+</span> years experience
              </div>
              <div className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
                <span className="font-semibold text-slate-900 dark:text-white">AI</span> + Web Products
              </div>
              <div className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
                <span className="font-semibold text-slate-900 dark:text-white">Full Stack</span> focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {showCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <div className="relative max-w-lg w-full rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setShowCard(false)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Close portfolio card"
            >
              <X size={18} />
            </button>

            <img
              src="/portfolio_card.png"
              alt="Portfolio card preview"
              className="w-full rounded-xl border border-slate-200 object-cover dark:border-slate-700"
            />
          </div>
        </div>
      )}
    </>
  );
}
