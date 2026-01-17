
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function SolutionsPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Comprehensive Strategies</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Our Solutions
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Optimizing corporate wealth and tax efficiency for Canadian business owners.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Client Journey Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Client Journey</h2>
                            <p className="text-xl text-brand-gold font-medium mb-8">A disciplined planning process, designed for complexity</p>

                            <div className="text-slate-600 space-y-6 text-lg leading-relaxed mb-10">
                                <p>
                                    Every engagement follows a structured process — from understanding corporate context to evaluating strategic fit, implementation, and ongoing review.
                                </p>
                                <p>
                                    This ensures decisions are made deliberately, with clarity around trade-offs, timing, and long-term consequences.
                                </p>
                                <p className="font-semibold text-brand-blue">
                                    Best suited for business owners who value process, coordination, and strategic clarity.
                                </p>
                            </div>

                            <Link href="/client-journey" className="inline-block px-8 py-4 bg-brand-blue text-white font-bold rounded-sm hover:bg-brand-gold transition-colors duration-300 uppercase tracking-widest text-sm shadow-lg hover:shadow-xl">
                                Understand our client journey
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">

                <div className="logo-pattern-bg"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Corporate Par */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/corporate-par-insurance.png"
                                    alt="Corporate Par"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 border-b border-slate-100 pb-4">Corporate Par</h3>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    A stable, tax-efficient asset for Canadian business owners. Combines insurance protection with steady, tax-advantaged asset growth inside the corporation.
                                </p>
                                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Tax-deferred growth</li>
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Liquidity access</li>
                                </ul>
                                <Link href="/corporate-par" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Learn More
                                </Link>
                            </div>
                            <div className="h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-500"></div>
                        </ScrollAnimation>

                        {/* CDA */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group" delay={100}>
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/cda-planning.png"
                                    alt="CDA Planning"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-gold/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 border-b border-slate-100 pb-4">CDA Planning</h3>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    Tax-free corporate wealth extraction. The Capital Dividend Account (CDA) allows business owners to extract corporate wealth completely tax-free.
                                </p>
                                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Tax-free withdrawals</li>
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Estate optimization</li>
                                </ul>
                                <Link href="/cda" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Learn More
                                </Link>
                            </div>
                            <div className="h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-500"></div>
                        </ScrollAnimation>

                        {/* IFA */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group" delay={200}>
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/ifa-strategy.png"
                                    alt="IFA Strategy"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 border-b border-slate-100 pb-4">IFA Strategy</h3>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    Immediate Financing Arrangement. A liquidity strategy designed for those who value both cash flow and the compounding advantages of permanent insurance.
                                </p>
                                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Keep corporate funds</li>
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Interest deduction</li>
                                </ul>
                                <Link href="/ifa" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Learn More
                                </Link>
                            </div>
                            <div className="h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-500"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </main>
    );
}
