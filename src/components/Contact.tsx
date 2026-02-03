export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-blue"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">
                        Let's work together
                    </h2>
                    <p className="text-lg text-zinc-300 mb-12">
                        I'm currently available for freelance work and full-time positions.
                        If you're looking for a developer to help bring your idea to life, let's talk.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-zinc-800 rounded-lg">
                            <h3 className="text-lg font-medium text-brand-red mb-2">Email</h3>
                            <a href="mailto:skhan.csit@gmail.com" className="text-zinc-300 hover:text-white transition-colors">
                                skhan.csit@gmail.com
                            </a>
                        </div>

                        <div className="p-6 bg-zinc-800 rounded-lg">
                            <h3 className="text-lg font-medium text-brand-yellow mb-2">Phone</h3>
                            <a href="tel:+923481921015" className="text-zinc-300 hover:text-white transition-colors">
                                +92 348 192 1015
                            </a>
                        </div>

                        <div className="p-6 bg-zinc-800 rounded-lg">
                            <h3 className="text-lg font-medium text-brand-blue mb-2">Location</h3>
                            <p className="text-zinc-300">
                                Islamabad, Pakistan
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-center space-x-8">
                        <a href="https://github.com" className="text-zinc-400 hover:text-white">Github</a>
                        <a href="https://linkedin.com" className="text-zinc-400 hover:text-white">LinkedIn</a>
                    </div>

                    <p className="mt-8 text-sm text-zinc-500">
                        © 2026 Shuaib Khan. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
