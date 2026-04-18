"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Send, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset status after a few seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errorData = await response.json();
        setStatus("error");
        setErrorMessage(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/5 dark:bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to full-time opportunities. Send me a message and let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700/50">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Feel free to reach out via email or connect with me on LinkedIn. I'll get back to you as soon as possible.
              </p>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:skhan.csit@gmail.com"
                  className="flex items-center gap-4 text-lg font-medium hover:text-brand-blue transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                    <Mail size={24} />
                  </div>
                  skhan.csit@gmail.com
                </a>

                <a
                  href="tel:+923481921015"
                  className="flex items-center gap-4 text-lg font-medium hover:text-brand-blue transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                    <span className="text-xl">📞</span>
                  </div>
                  +92 348 1921015
                </a>
                
                <a
                  href="https://linkedin.com/in/shuaibdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg font-medium hover:text-brand-blue transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                    <ArrowRight size={24} className="-rotate-45" />
                  </div>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 pt-10 rounded-3xl shadow-xl dark:shadow-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && <Send size={20} />}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-3 border border-green-200 dark:border-green-500/20">
                  <CheckCircle size={20} className="shrink-0" />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 rounded-xl flex items-center gap-3 border border-red-200 dark:border-red-500/20">
                  <XCircle size={20} className="shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
