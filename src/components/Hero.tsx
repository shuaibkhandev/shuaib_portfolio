import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center md:text-left">
                    <p className="text-brand-red font-semibold tracking-wide uppercase text-sm mb-4">
                        Hello, I am
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-brand-black dark:text-white tracking-tight mb-6">
                        SHUAIB <span className="text-brand-blue">KHAN</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-300 font-light mb-8">
                        Frontend <span className="text-zinc-400">|</span> Web <span className="text-zinc-400">|</span> MERN Developer
                    </h2>

                    <p className="max-w-xl mx-auto md:mx-0 text-zinc-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
                        Building responsive, high-performance web applications with a focus on clean UI/UX and scalable architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-brand-red hover:bg-red-700 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-brand-red/30 transform hover:-translate-y-0.5"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-brand-black dark:hover:border-white text-brand-black dark:text-white font-medium rounded-full transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        >
                            View GitHub
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start space-x-6 text-zinc-500">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm">Available for work</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
