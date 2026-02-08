"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
    const [showWeChat, setShowWeChat] = useState(false);
    const [showWhatsApp, setShowWhatsApp] = useState(false);

    return (
        <footer className="bg-brand-dark text-slate-400 pt-16 pb-8 border-t border-slate-800 text-sm font-light mt-auto relative z-50">
            {/* Popups */}
            {(showWeChat || showWhatsApp) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => { setShowWeChat(false); setShowWhatsApp(false); }}>
                    <div className="bg-white p-6 rounded-lg max-w-sm w-full relative animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => { setShowWeChat(false); setShowWhatsApp(false); }}
                            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
                        >
                            <i className="fa-solid fa-xmark text-lg"></i>
                        </button>
                        <h3 className="text-brand-dark font-bold text-lg mb-4 text-center">
                            Scan to Connect on {showWeChat ? 'WeChat' : 'WhatsApp'}
                        </h3>
                        <div className="relative aspect-square w-full mb-2">
                            <Image
                                src={showWeChat ? "/images/wechat-qr-code.webp" : "/images/WhatsApp-qr-code.webp"}
                                alt={showWeChat ? "WeChat QR Code" : "WhatsApp QR Code"}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-center text-slate-500 text-xs">
                            Scan with your {showWeChat ? 'WeChat' : 'WhatsApp'} camera
                        </p>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Image
                            src="/images/logo_origin.webp"
                            alt="99 Financial"
                            width={200}
                            height={50}
                            className="h-8 w-auto brightness-0 invert opacity-90 mb-6"
                        />
                        <p className="mb-2 text-slate-400 text-sm"><i className="fa-solid fa-phone text-brand-gold mr-3"></i> 416 637 5302</p>
                        <p className="mb-4 text-slate-400 text-sm"><i className="fa-solid fa-location-dot text-brand-gold mr-3 mt-1"></i> 85 Enterprise Blvd. Unit 306, Markham ON L6G 0b5</p>
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="https://www.linkedin.com/in/tom-ren/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition"
                                aria-label="LinkedIn"
                            >
                                <i className="fa-brands fa-linkedin-in text-sm"></i>
                            </a>
                            <button
                                onClick={() => setShowWeChat(true)}
                                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#07C160] hover:text-white transition"
                                aria-label="WeChat"
                            >
                                <i className="fa-brands fa-weixin text-sm"></i>
                            </button>
                            <button
                                onClick={() => setShowWhatsApp(true)}
                                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition"
                                aria-label="WhatsApp"
                            >
                                <i className="fa-brands fa-whatsapp text-sm"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase text-xs border-l-2 border-brand-gold pl-3 mb-4">Solutions</h4>
                        <ul className="space-y-2">
                            <li><Link href="/client-journey" className="hover:text-brand-gold transition">Client Journey</Link></li>
                            <li><Link href="/corporate-par" className="hover:text-brand-gold transition">Corporate-Owned Life Insurance</Link></li>
                            <li><Link href="/cda" className="hover:text-brand-gold transition">CDA</Link></li>
                            <li><Link href="/ifa" className="hover:text-brand-gold transition">IFA</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase text-xs border-l-2 border-brand-gold pl-3 mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><Link href="/case-studies" className="hover:text-brand-gold transition">Case Studies</Link></li>
                            <li><Link href="/resources#foundational-articles" className="hover:text-brand-gold transition">Foundational Articles</Link></li>
                            <li><Link href="/resources#planning-concepts" className="hover:text-brand-gold transition">Planning Concepts</Link></li>
                            <li><Link href="/resources#guides" className="hover:text-brand-gold transition">In-Depth Guides (PDF)</Link></li>
                            <li><Link href="/resources#upcoming-sessions" className="hover:text-brand-gold transition">Events & Sessions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase text-xs border-l-2 border-brand-gold pl-3 mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-brand-gold transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-gold transition">Contact</Link></li>
                            <li><a href="#" className="hover:text-brand-gold transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition">Terms & Conditions</a></li>
                        </ul>
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block mt-6 border border-slate-700 px-4 py-2 rounded text-xs hover:bg-brand-gold hover:text-white transition group">
                            Book a Private Strategy Review <i className="fa-solid fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-xs text-slate-500 text-justify">
                    <p className="mb-2"><strong>Disclaimer:</strong> The information on this website is for general informational purposes only and does not constitute legal, tax, or accounting advice.</p>
                    <p>© 2025 99 Financial Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
