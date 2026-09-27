"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Download } from "lucide-react";

const experience = [
  {
    company: "United Sol",
    role: "Full Stack Developer",
    period: "Dec 2024 – July 2026",
    location: "Islamabad, Pakistan",
    description: "A leading web solutions provider specializing in high-quality eCommerce platforms.",
    responsibilities: [
      "Developed and maintained production web applications using React.js, Next.js, TypeScript, and Node.js.",
      "Built reusable UI components and responsive interfaces for scalable applications.",
      "Integrated REST APIs and implemented reliable frontend-backend data flows.",
      "Developed and customized CMS solutions using Strapi, Magento, and WordPress.",
      "Improved application performance, maintainability, and user experience.",
      "Collaborated with cross-functional teams to deliver production-ready features."
    ]
  },
  {
    company: "K2X Tech",
    role: "Frontend Developer",
    period: "Mar 2024 – Nov 2024",
    location: "Peshawar, Pakistan",
    description: "A technology firm specializing in end-to-end frontend development solutions.",
    responsibilities: [
      "Developed responsive and reusable interfaces using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.",
      "Integrated REST APIs for dynamic data rendering.",
      "Refactored frontend components to improve code reusability and maintainability.",
      "Debugged UI issues and ensured responsive, cross-browser experiences."
    ]
  },
  {
    company: "Rozi Academy",
    role: "Web Developer",
    period: "Aug 2023 – Mar 2024",
    location: "Rawalpindi, Pakistan",
    description: "An educational and digital solutions platform supporting lead generation and online engagement.",
    responsibilities: [
      "Developed internal dashboards and web applications for business operations.",
      "Customized GoHighLevel CRM workflows and interfaces.",
      "Improved UI/UX based on user feedback and business requirements.",
      "Debugged frontend issues and optimized application performance."
    ]
  }
];

const education = [
  {
    institution: "UET Peshawar",
    degree: "BS, Computer Science",
    period: "Sep 2019 – Jul 2023",
    location: "Peshawar, Khyber Pakhtunkhwa, Pakistan"
  },
  {
    institution: "Higher Secondary School",
    degree: "FSC, Engineering",
    period: "Jan 2017 – Feb 2019",
    location: "Swat, Khyber Pakhtunkhwa, Pakistan"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          {/* Professional Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 shrink-0"
          >
             <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800">
                  <img src="/shuaib.jpeg" alt="Shuaib Khan" className="absolute inset-0 w-full h-full object-cover" />
             </div>
          </motion.div>

          {/* Profile Details */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 mb-4">
                Profile
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Shuaib Khan</h2>
              <h3 className="text-xl text-brand-blue font-medium mb-6">Full Stack Developer | AI Engineer | AI Automation</h3>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Full Stack Developer and AI Engineer with 3+ years of professional experience building modern, scalable web applications. Strong expertise in React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, MySQL, REST APIs, and WebSockets. Experienced in front-end architecture, API integration, responsive UI development, performance optimization, and CMS platforms. Hands-on experience in AI Engineering, LLM applications, RAG, AI agents, and n8n automation, with additional experience in AWS, Docker, CI/CD, Web3, and cloud-based solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin size={18} className="text-brand-red" />
                  <span>Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">Languages:</span> 
                    English, Urdu, Pushto
                </div>
              </div>

               <a
                  href="/Shuaibkhan_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  <Download size={18} /> Download Verified Resume
                </a>
            </motion.div>
          </div>
        </div>

        {/* Experience & Education Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-slate-900 dark:text-white">
              <div className="p-2 bg-brand-blue/10 rounded-lg">
                <Briefcase className="text-brand-blue" size={24} />
              </div>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div 
                    key={index} 
                    className="group relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all hover:border-brand-blue/30"
                >
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-brand-blue rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">{job.role}</h4>
                        <div className="text-slate-600 dark:text-slate-400 font-medium">{job.company}</div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-semibold text-slate-500 whitespace-nowrap">
                        {job.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                     <MapPin size={14} className="text-brand-blue" /> {job.location}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    {job.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 opacity-70" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-slate-900 dark:text-white">
              <div className="p-2 bg-brand-red/10 rounded-lg">
                 <GraduationCap className="text-brand-red" size={24} />
              </div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                    key={index} 
                    className="group relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all hover:border-brand-red/30"
                >
                   <div className="absolute left-0 top-6 bottom-6 w-1 bg-brand-red rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-red transition-colors">{edu.degree}</h4>
                        <div className="text-slate-600 dark:text-slate-400 font-medium">{edu.institution}</div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-semibold text-slate-500 whitespace-nowrap">
                        {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-4">
                     <MapPin size={14} className="text-brand-red" /> {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
