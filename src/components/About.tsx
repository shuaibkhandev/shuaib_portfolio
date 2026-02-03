export default function About() {
    return (
        <section id="about" className="py-20 bg-zinc-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Profile</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-black dark:text-white sm:text-4xl">
                        About Me
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-zinc-500 lg:mx-auto">
                        A results-driven developer passionate about creating intuitive, high-performance user interfaces.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="prose prose-lg mx-auto text-zinc-500 dark:text-zinc-400">
                        <p className="mb-6">
                            I am a <strong>Frontend & MERN Stack Developer</strong> with over 2 years of experience building user-focused and responsive web applications. My expertise lies in translating business logic into seamless, high-performance interfaces using modern technologies like <strong>React.js, Next.js, and Node.js</strong>.
                        </p>
                        <p className="mb-6">
                            Currently working at <strong>United Sol</strong>, I specialize in developing custom frontends for eCommerce platforms and collaborating with backend teams to optimize API integrations.
                        </p>
                        <p>
                            I have a strong focus on clean UI/UX, performance optimization, and scalable architecture. I'm also actively expanding my skills in Python development to strengthen my problem-solving abilities and backend fundamentals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
