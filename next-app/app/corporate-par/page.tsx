
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CorporateParPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">Corporate-Owned Life Insurance</h1>
                        <p className="text-xl text-brand-gold font-medium max-w-3xl mx-auto">
                            Insurance as a long-term corporate planning tool
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Opening — Strategic Context */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Strategic Context</h2>
                        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                            <p>
                                Incorporated business owners often accumulate significant assets inside their corporations over time.
                            </p>
                            <p>
                                As retained earnings grow, so do long-term tax exposure, estate liquidity risk, and structural inefficiencies that are not always visible in the early years.
                            </p>
                            <p>
                                Within the right planning framework, corporate-owned life insurance can serve as a long-term tool to support tax efficiency, balance-sheet planning, and future estate outcomes.
                            </p>
                            <p className="font-medium text-brand-blue border-l-4 border-brand-gold pl-4">
                                Its value lies not in the insurance contract itself, but in how it is structured and integrated within broader corporate planning.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* The Planning Problem It Addresses */}
            <section className="py-20 bg-brand-light border-y border-slate-200 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">The Planning Problem It Addresses</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Many business owners face a common structural challenge:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <i className="fa-solid fa-circle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                    <span className="text-slate-700">Corporate assets grow efficiently during their working years</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa-solid fa-circle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                    <span className="text-slate-700">But converting that value into usable, tax-efficient personal wealth later can be difficult</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa-solid fa-circle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                    <span className="text-slate-700">At death, corporate wealth may face layers of taxation and liquidity pressure</span>
                                </li>
                            </ul>
                            <p className="text-slate-600 font-medium">
                                Corporate-owned life insurance is often considered when business owners begin addressing these long-term structural issues — not short-term investment performance.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-right relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/corporate-par-insurance.png"
                                alt="Planning Problem Visualization"
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Where This Strategy Fits (and Where It Doesn’t) */}
            <section className="py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-12 text-center">Where This Strategy Fits (and Where It Doesn’t)</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Fits */}
                        <ScrollAnimation className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:-translate-y-1 transition duration-300">
                            <h3 className="text-xl font-bold text-brand-blue mb-6 flex items-center">
                                <i className="fa-solid fa-check-circle text-green-500 mr-3 text-2xl"></i>
                                This type of planning is generally considered when:
                            </h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex items-start">
                                    <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                    A corporation has meaningful retained earnings not required for operations
                                </li>
                                <li className="flex items-start">
                                    <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                    The owner has a long-term planning horizon
                                </li>
                                <li className="flex items-start">
                                    <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                    Tax efficiency and estate outcomes are strategic priorities
                                </li>
                            </ul>
                        </ScrollAnimation>

                        {/* Doesn't Fit */}
                        <ScrollAnimation className="bg-slate-50 p-8 rounded-xl shadow-inner border-t-4 border-slate-400 hover:-translate-y-1 transition duration-300" delay={100}>
                            <h3 className="text-xl font-bold text-slate-600 mb-6 flex items-center">
                                <i className="fa-solid fa-ban text-slate-400 mr-3 text-2xl"></i>
                                It is often not appropriate when:
                            </h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start">
                                    <i className="fa-solid fa-xmark text-slate-400 mt-1.5 mr-3"></i>
                                    Corporate cash flow is uncertain
                                </li>
                                <li className="flex items-start">
                                    <i className="fa-solid fa-xmark text-slate-400 mt-1.5 mr-3"></i>
                                    Assets are required for near-term business use
                                </li>
                                <li className="flex items-start">
                                    <i className="fa-solid fa-xmark text-slate-400 mt-1.5 mr-3"></i>
                                    The objective is short-term return optimization rather than long-term structure
                                </li>
                            </ul>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="mt-12 text-center fade-in-up">
                        <p className="text-lg font-medium text-brand-gold italic">
                            Determining suitability is a critical step — and one that must occur before any product discussion.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* How It Integrates With Broader Planning */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/logo_origin.webp')] bg-no-repeat bg-center opacity-5 pointer-events-none mix-blend-soft-light transform scale-150"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-white mb-8">How It Integrates With Broader Planning</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Corporate-owned life insurance rarely stands alone. When used appropriately, it may interact with:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">
                        <ScrollAnimation className="bg-white/10 p-6 rounded-lg border border-white/10 flex items-center">
                            <i className="fa-solid fa-calculator text-brand-gold text-2xl mr-4"></i>
                            <span className="text-lg font-bold">Long-term corporate tax planning</span>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-white/10 p-6 rounded-lg border border-white/10 flex items-center" delay={100}>
                            <i className="fa-solid fa-coins text-brand-gold text-2xl mr-4"></i>
                            <span className="text-lg font-bold">Capital Dividend Account (CDA) creation</span>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-white/10 p-6 rounded-lg border border-white/10 flex items-center" delay={200}>
                            <i className="fa-solid fa-users text-brand-gold text-2xl mr-4"></i>
                            <span className="text-lg font-bold">Estate and succession structures</span>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-white/10 p-6 rounded-lg border border-white/10 flex items-center" delay={300}>
                            <i className="fa-solid fa-handshake text-brand-gold text-2xl mr-4"></i>
                            <span className="text-lg font-bold">Shareholder planning and governance</span>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="fade-in-up">
                        <p className="text-lg text-slate-400">
                            Its effectiveness depends on coordination across accounting, legal, and financial planning disciplines.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Common Misunderstandings */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 fade-in-up">
                        <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-200 pb-4">Common Misunderstandings</h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Viewing insurance primarily as an “investment”",
                                "Focusing on illustrations rather than structure",
                                "Assuming all whole life policies serve the same planning role",
                                "Believing insurance decisions can be reversed easily later"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-slate-700">
                                    <i className="fa-solid fa-circle-xmark text-red-400 mt-1.5 mr-4"></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-slate-600 font-medium italic">
                            These misunderstandings often lead to misaligned expectations and suboptimal outcomes.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* How This Fits Within Corporate Planning & CTA */}
            <section className="py-20 lg:py-24 bg-brand-blue text-white relative overflow-hidden text-center">
                <div className="logo-pattern-bg opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">How This Fits Within Corporate Planning</h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Corporate-owned life insurance is assessed as part of a broader corporate planning framework — never as an isolated decision.
                        </p>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                            The priority is determining whether this structure supports long-term objectives, rather than focusing on any single product.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation className="bg-white/10 rounded-xl p-10 backdrop-blur-sm border border-brand-gold/30 inline-block fade-in-up" delay={100}>
                        <h3 className="text-2xl font-bold text-brand-gold mb-4">Next Step</h3>
                        <p className="text-lg text-white mb-8">
                            Explore whether corporate-owned life insurance fits within your long-term planning framework.
                        </p>
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-bold text-xl py-4 px-10 rounded-sm hover:bg-white hover:text-brand-blue transition transform hover:-translate-y-1 shadow-lg">
                            Book a Private Strategy Review
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
