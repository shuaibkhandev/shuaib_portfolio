"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo.png"
                                alt="Brand Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-baseline space-x-6">
                            {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-zinc-600 dark:text-zinc-300 hover:text-brand-red dark:hover:text-brand-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all focus:outline-none"
                            aria-label="Toggle Dark Mode"
                        >
                            {mounted ? (
                                theme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                )
                            ) : (
                                <div className="w-5 h-5" /> // Placeholder to prevent layout shift
                            )}
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                        >
                            {mounted && (theme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            ))}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-brand-red dark:hover:text-brand-yellow hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
