"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Baseer.ca",
    category: "Omnichannel Commerce Platform",
    description: "Developed responsive web interfaces and integrated APIs for POS, e-commerce, inventory, and dashboards.",
    tech: ["React.js", "Next.js", "REST APIs", "Strapi", "Magento", "Node.js"],
    links: { demo: "https://www.baseer.ca/", code: null },
    image: "https://app.baseer.ca/uploads/Ai_reports_f58c52f1d4.png?w=640&q=100",
  },
  {
    title: "AI RAG Chatbot",
    category: "AI / RAG / Automation",
    description: "Built an AI chatbot using Next.js, LangChain, RAG, vector databases, and LLM APIs for intelligent conversational workflows.",
    tech: ["Next.js", "LangChain", "RAG", "Pinecone", "OpenAI API", "Python"],
    links: { demo: "#", code: null },
    image: "",
  },
  {
    title: "Web3 DApps",
    category: "Blockchain / Web3 Apps",
    description: "Built Web3 applications using React/Next.js, Solidity, Ethers.js/Web3.js, MetaMask, and smart contracts for Ethereum-based blockchain interactions.",
    tech: ["React/Next.js", "Solidity", "Ethers.js", "Web3.js", "Ethereum", "Hardhat"],
    links: { demo: "#", code: null },
    image: "",
  },
  {
    title: "n8n AI Automation",
    category: "AI Workflow Automation",
    description: "Created AI-powered workflows using n8n, LLM APIs, webhooks, and third-party integrations to automate business operations.",
    tech: ["n8n", "LLM APIs", "Webhooks", "AI Automation", "OpenAI API"],
    links: { demo: "#", code: null },
    image: "",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Selected Works</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
               A few product and platform builds I’ve shipped across commerce, automation, and AI.
            </p>
          </div>
          <a href="https://github.com/shuaibkhandev" target="_blank" className="text-sm font-medium text-brand-blue flex items-center gap-1 hover:underline">
            View Github <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_18px_40px_rgba(2,6,23,0.26)] transition-all duration-300"
            >
              {/* Minimal Image Placeholder */}
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 w-full relative group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors flex items-center justify-center overflow-hidden">
                 <span className="text-slate-400 font-mono text-sm px-4 text-center">{project.title} Preview</span>

                 <div className="absolute inset-0 bg-slate-900/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                        Visit Site
                    </a>
                 </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold text-slate-900 dark:text-white transition-colors ${
                        index === 0 ? "group-hover:text-brand-blue" : 
                        index === 1 ? "group-hover:text-brand-red" : 
                        "group-hover:text-brand-yellow"
                    }`}>
                    {project.title}
                    </h3>
                    <div className="flex gap-3">
                         <a href={project.links.demo} target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="Live Demo">
                            <ExternalLink size={18} />
                         </a>
                         {project.links.code && (
                             <a href={project.links.code} target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="View Code">
                                <Github size={18} />
                             </a>
                         )}
                    </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
