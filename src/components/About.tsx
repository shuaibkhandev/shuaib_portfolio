"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Download } from "lucide-react";

const experience = [
  {
    company: "United Sol",
    role: "Frontend Developer",
    period: "Dec 2024 – Present",
    location: "Islamabad, Pakistan",
    description: "A leading web solutions provider specializing in high-quality eCommerce platforms.",
    responsibilities: [
      "Develop custom, responsive frontends for Magento, WordPress, PrestaShop, and Shopify.",
      "Translate business logic and client requirements into intuitive, high-performance user interfaces.",
      "Collaborate with backend teams to integrate and optimize APIs for seamless functionality and performance."
    ]
  },
  {
    company: "K2X Tech",
    role: "Frontend Developer",
    period: "Mar 2024 – Nov 2024",
    location: "Peshawar, Pakistan",
    description: "A technology firm specializing in end-to-end frontend development solutions.",
    responsibilities: [
      "Designed and developed responsive, dynamic user interfaces using React.js.",
      "Integrated RESTful APIs and collaborated closely with backend developers to ensure seamless data flow.",
      "Participated in code reviews, debugging, and performance optimization."
    ]
  },
  {
    company: "Rozi Academy",
    role: "Web Developer",
    period: "Aug 2023 – Mar 2024",
    location: "Rawalpindi, Pakistan",
    description: "An educational and digital solutions platform supporting lead generation and online engagement.",
    responsibilities: [
      "Developed and maintained responsive websites and web applications.",
      "Customized client portals using GoHighLevel (GHL CRM) to enhance automation and lead management.",
      "Improved UI/UX using modern JavaScript frameworks and CSS libraries."
    ]
  }
];

const education = [
  {
    institution: "UET Peshawar",
    degree: "BS, Computer Science",
    period: "Nov 2019 – Aug 2023",
    location: "Peshawar, Pakistan"
  },
  {
    institution: "Higher Secondary School",
    degree: "FSC, Engineering",
    period: "Jan 2017 – Feb 2019",
    location: "Swat, Pakistan"
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
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Shuaib Khan</h2>
              <h3 className="text-xl text-brand-blue font-medium mb-6">Frontend | Web | MERN Developer</h3>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Results-driven Frontend & MERN Stack Developer with 2+ years of experience building user-focused and responsive web applications. Skilled in React.js, Next.js, Node.js, and API integration. Strong focus on clean UI/UX, performance optimization, and scalable architecture.
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
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
                     <MapPin size={14} /> {job.location}
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
                     <MapPin size={14} /> {edu.location}
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
