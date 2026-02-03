"use client";

import MotionWrapper from "./MotionWrapper";

export default function Experience() {
    const experiences = [
        {
            company: "United Sol",
            role: "Frontend Developer",
            period: "Dec 2024 – Present",
            location: "Islamabad, Pakistan",
            description: "A leading web solutions provider specializing in high-quality eCommerce platforms.",
            responsibilities: [
                "Develop custom, responsive frontends for Magento, WordPress, PrestaShop, and Shopify.",
                "Translate business logic and client requirements into intuitive, high-performance user interfaces.",
                "Collaborate with backend teams to integrate and optimize APIs for seamless functionality."
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
                "Integrated RESTful APIs and collaborated closely with backend developers.",
                "Participated in code reviews, debugging, and performance optimization."
            ]
        },
        {
            company: "Rozi Academy",
            role: "Web Developer",
            period: "Aug 2023 – Mar 2024",
            location: "Rawalpindi, Pakistan",
            description: "An educational and digital solutions platform supporting lead generation.",
            responsibilities: [
                "Developed and maintained responsive websites and web applications.",
                "Customized client portals using GoHighLevel (GHL CRM).",
                "Improved UI/UX using modern JavaScript frameworks and CSS libraries."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper className="lg:text-center mb-16">
                    <h2 className="text-base text-brand-blue font-semibold tracking-wide uppercase">History</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-black dark:text-white sm:text-4xl">
                        Work Experience
                    </p>
                </MotionWrapper>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-red border-4 border-white dark:border-zinc-900 z-10"></div>

                                    {/* Content */}
                                    <div className="hidden md:block w-5/12"></div>
                                    <MotionWrapper
                                        className="w-full md:w-5/12"
                                        direction={index % 2 === 0 ? 'left' : 'right'}
                                        delay={index * 0.1}
                                    >
                                        <div className="p-6 bg-zinc-50/50 dark:bg-black/50 backdrop-blur-sm rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1 group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-brand-black dark:text-white group-hover:text-brand-blue transition-colors">{exp.role}</h3>
                                                <span className="text-xs font-medium px-2 py-1 bg-brand-blue/10 text-brand-blue rounded-full">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-brand-red mb-1">{exp.company}</h4>
                                            <p className="text-sm text-zinc-500 mb-4">{exp.location}</p>

                                            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 italic">
                                                {exp.description}
                                            </p>

                                            <ul className="space-y-2">
                                                {exp.responsibilities.map((resp, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"></span>
                                                        <span className="text-sm text-zinc-600 dark:text-zinc-400">{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </MotionWrapper>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
