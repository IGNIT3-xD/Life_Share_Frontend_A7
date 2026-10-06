"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "How it works", href: "#" },
        { name: "What we test", href: "#" },
        { name: "Imaging", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "About", href: "#" },
    ];

    return (
        <header className="fixed top-4 inset-x-4 md:inset-x-8 lg:inset-x-12 max-w-7xl mx-auto px-4 sm:px-6 z-50 font-graphik">
            {/* Main Navbar Container with Glassmorphism */}
            <nav className="relative flex items-center justify-between px-6 py-3.5 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl text-white shadow-2xl transition-all duration-300">

                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    {/* Logo Mark Placeholder */}
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20">
                        {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                        <svg
                            width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="text-xl font-medium tracking-wide">Life Share</span>
                </Link>

                {/* Middle: Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 text-[15px] font-normal text-white/80">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    {/* Log in - Hidden on mobile, shown on tablet and up */}
                    <Link
                        href="/login"
                        className="hidden md:block text-[15px] font-medium text-white/90 hover:text-white transition-colors"
                    >
                        Log in
                    </Link>

                    <Button className="btn-main bg-[#B15A36]">Donate Now</Button>

                    <button
                        type="button"
                        className="lg:hidden p-1 text-white/90 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 right-0 mt-3 p-6 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col gap-2 lg:hidden shadow-2xl origin-top"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/80 hover:text-white py-3 text-lg border-b border-white/5 last:border-0 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <button
                                type="button"
                                className="text-white/80 hover:text-white py-3 text-lg border-b border-white/5 md:hidden transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Log in
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}