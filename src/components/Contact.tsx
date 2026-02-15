"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden relative">
      {/* Abstract Background - Adjusted for light mode visibility */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Ready to start a project?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to full-time opportunities. Let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:skhan.csit@gmail.com"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} /> skhan.csit@gmail.com
            </a>
             <a
              href="https://linkedin.com/in/shuaibdev"
              target="_blank"
              className="px-8 py-4 bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              Connect on LinkedIn <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
