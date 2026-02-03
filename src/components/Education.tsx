"use client";

import MotionWrapper from "./MotionWrapper";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-zinc-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper className="lg:text-center mb-16">
                    <h2 className="text-base text-brand-yellow font-semibold tracking-wide uppercase">Academic</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-black dark:text-white sm:text-4xl">
                        Education
                    </p>
                </MotionWrapper>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <MotionWrapper delay={0.1} className="h-full">
                        <div className="h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-8 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-brand-black dark:text-white">BS, Computer Science</h3>
                            <p className="text-brand-blue font-medium mt-1">UET Peshawar</p>
                            <p className="text-zinc-500 text-sm mt-2">Peshawar, Pakistan | Nov 2019 – Aug 2023</p>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper delay={0.2} className="h-full">
                        <div className="h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-8 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-xl hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-brand-black dark:text-white">FSC, Engineering</h3>
                            <p className="text-brand-blue font-medium mt-1">Higher Secondary School</p>
                            <p className="text-zinc-500 text-sm mt-2">Swat, Pakistan | Jan 2017 – Feb 2019</p>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
