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

    const solutionsPages = ['/solution', '/corporate-par', '/cda', '/ifa', '/estate-planning'];
    const resourcesPages = ['/resources', '/case-studies', '/events', '/faq'];

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
                            <Link href="/about" className={`nav-link font-medium hover:text-brand-gold transition ${pathname === '/about' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}>
                                About
                            </Link>

                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown('solutions')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={`nav-btn flex items-center font-medium hover:text-brand-gold transition py-2 gap-1 focus:outline-none ${isGroupActive(solutionsPages) || activeDropdown === 'solutions' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}
                                    onClick={(e) => { e.stopPropagation(); toggleDropdown('solutions'); }}
                                >
                                    Solutions <i className="fa-solid fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                                </button>
                                <div className={`absolute top-full left-0 pt-2 w-64 ${activeDropdown === 'solutions' ? 'block' : 'hidden'}`}>
                                    <div className="bg-white border-t-4 border-brand-gold shadow-xl rounded-b-md pt-2 animate-fadeIn">
                                        <Link href="/solution" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold border-b border-slate-50 font-bold">Overview</Link>
                                        <Link href="/corporate-par" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Corporate Par</Link>
                                        <Link href="/cda" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">CDA Planning</Link>
                                        <Link href="/ifa" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">IFA Strategy</Link>
                                        <Link href="/estate-planning" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Estate Planning</Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown('resources')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={`nav-btn flex items-center font-medium hover:text-brand-gold transition py-2 gap-1 focus:outline-none ${isGroupActive(resourcesPages) || activeDropdown === 'resources' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}
                                    onClick={(e) => { e.stopPropagation(); toggleDropdown('resources'); }}
                                >
                                    Resources <i className="fa-solid fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                                </button>
                                <div className={`absolute top-full left-0 pt-2 w-56 ${activeDropdown === 'resources' ? 'block' : 'hidden'}`}>
                                    <div className="bg-white border-t-4 border-brand-gold shadow-xl rounded-b-md pt-2 animate-fadeIn">
                                        <Link href="/resources" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold border-b border-slate-50 font-bold">Download</Link>
                                        <Link href="/case-studies" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Case Studies</Link>
                                        <Link href="/events" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Events</Link>
                                        <Link href="/faq" className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">FAQ</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/contact" className={`nav-link font-medium hover:text-brand-gold transition ${pathname === '/contact' ? 'text-brand-gold font-bold' : 'text-slate-600'}`}>
                                Contact
                            </Link>
                        </nav>

                        <div className="hidden lg:flex items-center">
                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="bg-brand-gold text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-brand-goldHover transition shadow-md hover:-translate-y-0.5 duration-200">
                                Book a Consultation
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
                    <div className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 overflow-y-auto">
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-brand-gold">
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>
                        </div>
                        <div className="space-y-6">
                            <Link href="/" className="block text-lg font-bold text-slate-800 hover:text-brand-gold">Home</Link>
                            <Link href="/about" className="block text-lg font-medium text-slate-600 hover:text-brand-gold">About</Link>

                            <div className="space-y-3">
                                <p className="text-xs text-gray-400 uppercase font-bold">Solutions</p>
                                <Link href="/corporate-par" className="block pl-4 text-slate-600 hover:text-brand-gold">Corporate Par</Link>
                                <Link href="/cda" className="block pl-4 text-slate-600 hover:text-brand-gold">CDA Planning</Link>
                                <Link href="/ifa" className="block pl-4 text-slate-600 hover:text-brand-gold">IFA Strategy</Link>
                                <Link href="/estate-planning" className="block pl-4 text-slate-600 hover:text-brand-gold">Estate Planning</Link>
                            </div>

                            <div className="space-y-3">
                                <p className="text-xs text-gray-400 uppercase font-bold">Resources</p>
                                <Link href="/resources" className="block pl-4 text-slate-600 hover:text-brand-gold font-bold">Download</Link>
                                <Link href="/case-studies" className="block pl-4 text-slate-600 hover:text-brand-gold">Case Studies</Link>
                                <Link href="/events" className="block pl-4 text-slate-600 hover:text-brand-gold">Events</Link>
                                <Link href="/faq" className="block pl-4 text-slate-600 hover:text-brand-gold">FAQ</Link>
                            </div>

                            <Link href="/contact" className="block text-lg font-medium text-slate-600 hover:text-brand-gold">Contact</Link>

                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="block w-full text-center bg-brand-gold text-white py-3 rounded-sm font-bold shadow-md">
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
