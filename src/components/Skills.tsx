"use client";

import MotionWrapper from "./MotionWrapper";

export default function Skills() {
    const skills = [
        {
            category: "Frontend",
            items: ["HTML5", "CSS3", "ReactJS", "NextJS", "Bootstrap", "TailwindCSS", "Shadcn/ui", "SCSS"]
        },
        {
            category: "Backend",
            items: ["NodeJS", "ExpressJS", "REST API", "GraphQL API", "Webhook Integration"]
        },
        {
            category: "Database & Web3",
            items: ["MongoDB", "MySQL", "Redis", "Ethereum", "Web3.js", "Solidity (Basics)"]
        },
        {
            category: "Tools & Languages",
            items: ["Git/GitHub", "TypeScript", "Python (Basics)", "WordPress", "Magento", "Strapi", "GoHighLevel"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper className="lg:text-center mb-16">
                    <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-black dark:text-white sm:text-4xl">
                        Technical Skills
                    </p>
                </MotionWrapper>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <MotionWrapper key={index} delay={index * 0.1} className="h-full">
                            <div className="h-full bg-zinc-50/50 dark:bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-brand-blue/50 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-lg font-bold text-brand-black dark:text-white mb-4 border-b border-brand-yellow/30 pb-2 inline-block">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-600 dark:text-zinc-300 rounded-md shadow-sm border border-zinc-200 dark:border-zinc-800 hover:text-brand-blue hover:border-brand-blue/30 transition-colors cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
