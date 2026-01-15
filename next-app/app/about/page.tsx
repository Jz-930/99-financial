
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function AboutPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[60vh] min-h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Firm</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            About 99 Financial Inc.
                        </h1>
                        <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto font-light leading-relaxed">
                            Specializing in tax-efficient wealth strategies for Canadian entrepreneurs, incorporated professionals, and high-net-worth families.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-8">
                                Transforming Retained Earnings into <span className="text-brand-gold">Long-Term Wealth</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                99 Financial Inc. is a Toronto-based advisory firm dedicated to one field: corporate tax-efficient wealth strategies.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We focus on advanced corporate planning solutions that transform retained earnings into long-term, tax-free capital—helping business owners protect their wealth, reduce tax, and build a multi-generational legacy.
                            </p>

                            <div className="bg-brand-light p-8 rounded-lg border-l-4 border-brand-gold shadow-md">
                                <h3 className="text-xl font-bold text-brand-blue mb-4">Our Mission</h3>
                                <p className="text-slate-700 italic">
                                    To help Canadian business owners and high-income professionals build tax-free wealth inside their corporations, preserve capital, and create long-term financial security for their families.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-right relative">
                            <div className="absolute -inset-4 bg-brand-gold/10 rounded-xl transform rotate-3"></div>
                            <div className="bg-white p-10 rounded-xl shadow-2xl border border-slate-100 relative z-10 expertise-card">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-100 pb-4">Our Core Expertise</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Corporate-Owned Participating Life Insurance",
                                        "CDA (Capital Dividend Account) Planning",
                                        "Immediate Financing Arrangements (IFA)",
                                        "Retained Earnings Optimization",
                                        "Estate Freeze & Family Business Succession",
                                        "Tax-Free Retirement Income Strategies for CCPCs"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1 mr-4 text-brand-gold text-xs">
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <span className="text-slate-700 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
                <div className="logo-pattern-bg opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">What We Offer</h2>
                        <p className="text-xl text-slate-300">A dedicated, integrated approach to corporate planning.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <ScrollAnimation className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition duration-300 backdrop-blur-sm" delay={0}>
                            <div className="text-brand-gold text-4xl mb-6"><i className="fa-solid fa-gem"></i></div>
                            <h3 className="text-xl font-bold mb-4">Deep Specialization</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Unlike generalist advisors, we specialize purely in corporate tax-efficient strategies. We understand the nuances of CCPCs, retained earnings, CDA, and financing structures.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition duration-300 backdrop-blur-sm" delay={100}>
                            <div className="text-brand-gold text-4xl mb-6"><i className="fa-solid fa-handshake"></i></div>
                            <h3 className="text-xl font-bold mb-4">Integrated Advisory</h3>
                            <p className="text-slate-300 leading-relaxed">
                                We work closely with your accountants, tax advisors, and lawyers to deliver a coordinated solution. Every strategy aligns with your corporate, legal, and tax requirements.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition duration-300 backdrop-blur-sm" delay={200}>
                            <div className="text-brand-gold text-4xl mb-6"><i className="fa-solid fa-chart-pie"></i></div>
                            <h3 className="text-xl font-bold mb-4">Evidence-Based Planning</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Our recommendations are built on actuarial illustrations, tax law analysis, and long-term risk modeling. You get clear explanations, step-by-step structures, and real numbers.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-light rounded-2xl p-10 md:p-16 border border-slate-200 shadow-xl text-center">
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Establish a Legacy That Lasts</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                                "We believe that every successful business owner deserves access to the same advanced planning strategies traditionally reserved for ultra-high-net-worth families."
                            </p>
                            <Link href="/contact" className="inline-block bg-brand-gold text-white font-bold text-lg py-4 px-10 rounded shadow-lg hover:bg-brand-goldHover hover:-translate-y-1 transition transform duration-300">
                                Work With Us
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </main>
    );
}
