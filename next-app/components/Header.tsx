"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const solutionsPages = ['/solutions', '/client-journey', '/corporate-par', '/cda', '/ifa'];
    const resourcesPages = ['/foundational-articles', '/planning-concepts', '/guides', '/events', '/upcoming-sessions', '/past-sessions', '/session-usage'];

    const toggleDropdown = (group: string) => {
        setActiveDropdown(activeDropdown === group ? null : group);
    };

    const isLinkActive = (path: string) => pathname === path;
    const isGroupActive = (paths: string[]) => paths.some(p => pathname === p);

    return (
        <>
            <header
                className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 border-b border-gray-100 ${scrolled ? 'shadow-md' : ''}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">

                        <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.location.href = '/'}>
                            <Image
                                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                                src="/images/logo_origin.webp"
                                alt="99 Financial Inc."
                                width={200}
                                height={64}
                            />
                        </div>

                        <nav className="hidden lg:flex space-x-8 items-center" ref={navRef}>
                            <Link href="/" className={`nav-link font-medium hover:text-brand-gold transition ${pathname === '/' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}>
                                Home
                            </Link>

                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown('solutions')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href="/solutions"
                                    className={`nav-btn flex items-center font-medium hover:text-brand-gold transition py-2 gap-1 focus:outline-none ${isGroupActive(solutionsPages) || activeDropdown === 'solutions' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}
                                >
                                    Solutions <i className="fa-solid fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                                </Link>
                                <div className={`absolute top-full left-0 pt-2 w-72 ${activeDropdown === 'solutions' ? 'block' : 'hidden'}`}>
                                    <div className="bg-white border-t-4 border-brand-gold shadow-xl rounded-b-md pt-2 animate-fadeIn">

                                        <Link href="/client-journey" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Client Journey</Link>
                                        <Link href="/corporate-par" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Corporate-Owned Life Insurance</Link>
                                        <Link href="/cda" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">CDA</Link>
                                        <Link href="/ifa" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">IFA</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/case-studies" className={`nav-link font-medium hover:text-brand-gold transition ${pathname === '/case-studies' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}>
                                Case Studies
                            </Link>

                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown('resources')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href="/resources"
                                    className={`nav-btn flex items-center font-medium hover:text-brand-gold transition py-2 gap-1 focus:outline-none ${isGroupActive(resourcesPages) || activeDropdown === 'resources' || isLinkActive('/resources') ? 'text-brand-gold font-bold' : 'text-slate-600'}`}
                                >
                                    Resources <i className="fa-solid fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                                </Link>
                                <div className={`absolute top-full left-0 pt-2 w-64 ${activeDropdown === 'resources' ? 'block' : 'hidden'}`}>
                                    <div className="bg-white border-t-4 border-brand-gold shadow-xl rounded-b-md pt-2 animate-fadeIn">
                                        <Link href="/resources#foundational-articles" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Foundational Articles</Link>
                                        <Link href="/resources#planning-concepts" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Planning Concepts & Frameworks</Link>
                                        <Link href="/resources#guides" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">In-Depth Guides (PDF)</Link>

                                        <div className="px-5 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 mt-1">Events</div>
                                        <Link href="/resources#upcoming-sessions" className="block px-5 py-2 pl-8 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Upcoming Sessions</Link>
                                        <Link href="/resources#past-sessions" className="block px-5 py-2 pl-8 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Past Sessions</Link>
                                        <Link href="/resources#session-usage" className="block px-5 py-2 pl-8 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">How These Sessions Are Used</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/about" className={`nav-link font-medium hover:text-brand-gold transition ${pathname === '/about' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}>
                                About
                            </Link>

                            <Link href="/contact" className={`nav-link font-medium hover:text-brand-gold transition ${pathname === '/contact' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}>
                                Contact
                            </Link>

                        </nav>

                        <div className="hidden lg:flex items-center">
                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="bg-brand-gold text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-brand-goldHover transition shadow-md hover:-translate-y-0.5 duration-200">
                                Book a Private Strategy Review
                            </a>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button
                                className="text-brand-blue hover:text-brand-gold p-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-5 overflow-y-auto">
                        <div className="flex justify-end mb-6">
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-brand-gold">
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>
                        </div>
                        <div className="space-y-6">
                            <Link href="/" className="block text-lg font-bold text-slate-800 hover:text-brand-gold">Home</Link>

                            <div className="space-y-3">
                                <p className="text-xs text-gray-400 uppercase font-bold">Solutions</p>
                                <Link href="/client-journey" className="block pl-4 text-slate-600 hover:text-brand-gold">Client Journey</Link>
                                <Link href="/corporate-par" className="block pl-4 text-slate-600 hover:text-brand-gold">Corporate-Owned Life Insurance</Link>
                                <Link href="/cda" className="block pl-4 text-slate-600 hover:text-brand-gold">CDA</Link>
                                <Link href="/ifa" className="block pl-4 text-slate-600 hover:text-brand-gold">IFA</Link>
                            </div>

                            <Link href="/case-studies" className="block text-lg font-medium text-slate-600 hover:text-brand-gold">Case Studies</Link>

                            <div className="space-y-3">
                                <p className="text-xs text-gray-400 uppercase font-bold">Resources</p>
                                <Link href="/resources#foundational-articles" className="block pl-4 text-slate-600 hover:text-brand-gold">Foundational Articles</Link>
                                <Link href="/resources#planning-concepts" className="block pl-4 text-slate-600 hover:text-brand-gold">Planning Concepts & Frameworks</Link>
                                <Link href="/resources#guides" className="block pl-4 text-slate-600 hover:text-brand-gold">In-Depth Guides (PDF)</Link>
                                <div className="pl-4 pt-2">
                                    <p className="text-xs text-gray-400 uppercase font-bold mb-2">Events</p>
                                    <Link href="/resources#upcoming-sessions" className="block pl-4 text-slate-600 hover:text-brand-gold text-sm">Upcoming Sessions</Link>
                                    <Link href="/resources#past-sessions" className="block pl-4 text-slate-600 hover:text-brand-gold text-sm">Past Sessions</Link>
                                    <Link href="/resources#session-usage" className="block pl-4 text-slate-600 hover:text-brand-gold text-sm">How These Sessions Are Used</Link>
                                </div>
                            </div>

                            <Link href="/about" className="block text-lg font-medium text-slate-600 hover:text-brand-gold">About</Link>

                            <Link href="/contact" className="block text-lg font-medium text-slate-600 hover:text-brand-gold">Contact</Link>

                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="block w-full text-center bg-brand-gold text-white py-3 rounded-sm font-bold shadow-md">
                                Book a Private Strategy Review
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
