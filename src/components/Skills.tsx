"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Layers, GitBranch, Cpu, Terminal, Blocks, Globe, BarChart } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Solidity"],
      icon: <Terminal className="w-6 h-6" />,
      color: "text-brand-blue",
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Context API"],
      icon: <Code2 className="w-6 h-6" />,
      color: "text-brand-red",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets"],
      icon: <Server className="w-6 h-6" />,
      color: "text-brand-yellow",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Redis", "Prisma ORM"],
      icon: <Database className="w-6 h-6" />,
      color: "text-brand-black dark:text-slate-400",
    },
    {
      title: "AI Engineering",
      skills: ["LLM Application Development", "Prompt Engineering", "AI Agents", "Agentic Workflows", "RAG", "OpenAI API", "Anthropic API", "LangChain", "LangSmith", "Pinecone", "Python"],
      icon: <Cpu className="w-6 h-6" />,
      color: "text-brand-blue",
    },
    {
      title: "Web3 Development",
      skills: ["Solidity", "Ethereum", "Ethers.js", "Web3.js", "Hardhat"],
      icon: <Blocks className="w-6 h-6" />,
      color: "text-brand-blue",
    },
    {
      title: "SEO & Performance",
      skills: ["Core Web Vitals", "SSR", "SSG", "ISR", "Technical SEO", "JSON-LD", "Sitemap & Robots.txt"],
      icon: <BarChart className="w-6 h-6" />,
      color: "text-brand-yellow",
    },
    {
      title: "DevOps & Tools",
      skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub", "GitLab", "Bitbucket", "Postman", "WordPress", "Magento", "Strapi", "GoHighLevel"],
      icon: <GitBranch className="w-6 h-6" />,
      color: "text-brand-red",
    },
  ];

  return (
    <section id="skills" className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 mb-4">
              Core stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Skills & <span className="text-brand-blue">Tools</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A focused stack for building modern products, integrations, and AI-powered experiences.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <div className={`flex items-center gap-3 mb-6 ${category.color}`}>
                  {category.icon}
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                        key={skill} 
                        className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interests Mini Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
             <div className="inline-flex items-center gap-4 px-6 py-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-400 shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white">Currently Learning:</span> 
                <span>Generative AI</span>
             </div>
          </motion.div>
      </div>
    </section>
  );
}
