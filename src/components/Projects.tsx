"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Genihunt",
    category: "SaaS / AI Services",
    description: "An AI-powered intelligence platform for discovering high-potential B2B leads and analyzing market trends across Denmark's business landscape.",
    tech: ["React.js", "Tailwind CSS", "AI Integration"],
    links: { demo: "http://genihunt.com/", code: null },
    image: null, 
  },
  {
    title: "FME Extensions",
    category: "E-Commerce Marketplace",
    description: "A comprehensive e-commerce marketplace for Magento solutions, featuring hundreds of custom extensions and serving thousands of global merchants.",
    tech: ["Next.js", "Magento", "SCSS", "GraphQL API"],
    links: { demo: "https://www.fmeextensions.com/", code: null },
    image: null,
  },
  {
    title: "BlackOaks Executive",
    category: "Luxury Transportation",
    description: "A premium chauffeur and airport car service platform offering seamless fleet selection, instant reservations, and VIP travel packages.",
    tech: ["Next.js", "SCSS", "Strapi"],
    links: { demo: "https://blackoaks.usol360.com/", code: null },
    image: null,
  },
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
               A showcase of complex problems solved with elegant code.
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
              className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300"
            >
              {/* Minimal Image Placeholder */}
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 w-full relative group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors flex items-center justify-center overflow-hidden">
                 <span className="text-slate-400 font-mono text-sm px-4 text-center">{project.title} Preview</span>
                 
                 {/* Live Site Overlay */}
                 <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
