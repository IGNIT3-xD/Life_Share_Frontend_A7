"use client"

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        Product: ["Features", "Pricing", "Integrations", "Changelog"],
        Resources: ["Documentation", "Tutorials", "Blog", "Support"],
        Company: ["About", "Careers", "Contact", "Partners"],
    };

    return (
        <footer className="relative w-full bg-[#FAFAFA] overflow-hidden font-graphik py-10">

            {/* Background Watermark */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] md:text-[20rem] font-bold text-gray-200/40 leading-none select-none pointer-events-none whitespace-nowrap">
                Life Share
            </div>

            <div className="relative z-10 container-main">

                {/* Main Footer Card */}
                <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                        {/* Brand Column */}
                        <div className="flex flex-col gap-6 lg:col-span-1">
                            <Link href="/" className="flex items-center gap-2">
                                {/* Logo Mark */}
                                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                    {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                                    <svg
                                        width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="white" strokeWidth="2.5"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-900 tracking-tight">Life Share</span>
                            </Link>

                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                                Life Share empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.
                            </p>

                            <div className="flex items-center gap-4 text-gray-400">
                                <Link href="#" className="hover:text-gray-900 transition-colors" aria-label="Twitter">
                                    <FaXTwitter className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:text-gray-900 transition-colors" aria-label="Instagram">
                                    <FaInstagram className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                                    <FaLinkedin className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:text-gray-900 transition-colors" aria-label="GitHub">
                                    <FaGithub className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Link Columns */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3 lg:pl-12">
                            {Object.entries(links).map(([category, items]) => (
                                <div key={category} className="flex flex-col gap-4">
                                    <h4 className="text-sm font-bold text-gray-900 tracking-wide uppercase">
                                        {category}
                                    </h4>
                                    <ul className="flex flex-col gap-3">
                                        {items.map((item) => (
                                            <li key={item}>
                                                <Link
                                                    href="#"
                                                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-gray-400 font-medium">
                            © {currentYear} Life Share. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4">
                                Cookies Settings
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}