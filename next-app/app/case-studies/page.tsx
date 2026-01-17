
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CaseStudiesPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Proven Results</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Case Studies
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Real-world examples of how we help Canadian business owners and professionals build tax-efficient wealth.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

                    {/* Case 1: Construction Company Owner */}
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-gold/50 flex flex-col lg:flex-row group">
                            {/* Image Section */}
                            <div className="lg:w-1/3 bg-slate-800 min-h-[300px] relative overflow-hidden">
                                <Image
                                    src="/images/construction-company-owner.jpg"
                                    alt="Construction Company Owner"
                                    fill
                                    className="object-cover transition transform group-hover:scale-105 duration-700 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply"></div>
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Construction</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-10 lg:w-2/3 flex flex-col">
                                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-100 pb-4">
                                    Construction Company Owner — ~$500,000 Annual Profit
                                </h2>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10 flex-grow">
                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Profile</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            Incorporated construction business with significant retained earnings.
                                        </p>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Challenge</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Corporate cash trapped inside the company</li>
                                            <li>High personal tax on withdrawals</li>
                                            <li>Estate tax risk on business assets</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Strategy</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold mb-6">
                                            <li>Corporate-owned participating whole life insurance</li>
                                            <li>CDA-focused estate structure</li>
                                            <li>Optional IFA to preserve operating liquidity</li>
                                        </ul>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Outcome</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Predictable tax-free CDA credits</li>
                                            <li>Estate liquidity without forced asset sales</li>
                                            <li>Long-term conversion of taxable retained earnings into tax-free family wealth</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                                    <Link href="/case-studies/construction-company-owner" className="text-brand-blue font-bold text-sm hover:text-brand-gold transition-colors duration-300 flex items-center group/link">
                                        Read Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                    </Link>
                                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="sm:ml-auto px-6 py-2 bg-brand-gold text-white text-sm font-bold rounded-sm hover:bg-brand-blue transition-colors duration-300 shadow-md">
                                        Book a Conversation
                                    </a>
                                </div>
                                <p className="text-[10px] text-slate-400 italic mt-4 text-center sm:text-right">
                                    These case studies illustrate planning structures, not recommendations. <br className="hidden sm:block" />Each strategy must be reviewed based on individual circumstances and professional advice.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Case 2: IFA */}
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-gold/50 flex flex-col lg:flex-row-reverse group">
                            {/* Image Section */}
                            <div className="lg:w-1/3 bg-slate-800 min-h-[300px] relative overflow-hidden">
                                <Image
                                    src="/images/ifa-case-study.jpg"
                                    alt="IFA Case Study"
                                    fill
                                    className="object-cover transition transform group-hover:scale-105 duration-700 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply"></div>
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Liquidity Strategy</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-10 lg:w-2/3 flex flex-col">
                                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-100 pb-4">
                                    Corporate-Owned Insurance + IFA — Age 45
                                </h2>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10 flex-grow">
                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Profile</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            Mid-career business owner prioritizing liquidity and long-term planning.
                                        </p>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Challenge</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Desire to build substantial estate value</li>
                                            <li>Reluctance to permanently deploy large corporate cash flows</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Strategy</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold mb-6">
                                            <li>Corporate-owned participating life insurance</li>
                                            <li>Immediate Financing Arrangement (IFA) at Prime</li>
                                            <li>Policy used as collateral to borrow back premiums</li>
                                        </ul>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Outcome</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Corporate liquidity preserved</li>
                                            <li>Long-term tax-deferred growth inside the corporation</li>
                                            <li>Significant tax-free CDA credits at death</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                                    <Link href="/case-studies/ifa-case-study" className="text-brand-blue font-bold text-sm hover:text-brand-gold transition-colors duration-300 flex items-center group/link">
                                        Read Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                    </Link>
                                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="sm:ml-auto px-6 py-2 bg-brand-gold text-white text-sm font-bold rounded-sm hover:bg-brand-blue transition-colors duration-300 shadow-md">
                                        Book a Conversation
                                    </a>
                                </div>
                                <p className="text-[10px] text-slate-400 italic mt-4 text-center sm:text-right">
                                    These case studies illustrate planning structures, not recommendations. <br className="hidden sm:block" />Each strategy must be reviewed based on individual circumstances and professional advice.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Case 3: Medical Professional */}
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-gold/50 flex flex-col lg:flex-row group">
                            {/* Image Section */}
                            <div className="lg:w-1/3 bg-slate-800 min-h-[300px] relative overflow-hidden">
                                <Image
                                    src="/images/medical-professional.jpg"
                                    alt="Medical Professional"
                                    fill
                                    className="object-cover transition transform group-hover:scale-105 duration-700 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply"></div>
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Medical Professional</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-10 lg:w-2/3 flex flex-col">
                                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-100 pb-4">
                                    Medical Professional — ~$600,000 Annual Income
                                </h2>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10 flex-grow">
                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Profile</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            Incorporated physician earning high professional income.
                                        </p>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Challenge</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>RRSP limits inadequate</li>
                                            <li>Fully taxable retirement withdrawals</li>
                                            <li>High lifetime tax exposure</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Strategy</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold mb-6">
                                            <li>Retain earnings inside the professional corporation</li>
                                            <li>Corporate-owned participating whole life insurance</li>
                                            <li>Retirement access via policy loans</li>
                                            <li>CDA-based estate transfer</li>
                                        </ul>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Outcome</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Stable, tax-efficient retirement planning</li>
                                            <li>Lower lifetime tax burden</li>
                                            <li>Tax-free intergenerational wealth transfer</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                                    <Link href="/case-studies/medical-professional" className="text-brand-blue font-bold text-sm hover:text-brand-gold transition-colors duration-300 flex items-center group/link">
                                        Read Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                    </Link>
                                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="sm:ml-auto px-6 py-2 bg-brand-gold text-white text-sm font-bold rounded-sm hover:bg-brand-blue transition-colors duration-300 shadow-md">
                                        Book a Conversation
                                    </a>
                                </div>
                                <p className="text-[10px] text-slate-400 italic mt-4 text-center sm:text-right">
                                    These case studies illustrate planning structures, not recommendations. <br className="hidden sm:block" />Each strategy must be reviewed based on individual circumstances and professional advice.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                </div>

                {/* Final CTA Section */}
                <div className="mt-24 max-w-4xl mx-auto text-center px-4">
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-brand-blue rounded-xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
                                    Find out if these strategies align with your goals
                                </h2>
                                <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                    These case studies are examples of planning structures — not recommendations. A brief conversation helps determine whether a similar approach is appropriate for your situation.
                                </p>
                                <a
                                    href="https://tidycal.com/greatec/30-minute-meeting"
                                    target="_blank"
                                    className="inline-block bg-brand-gold text-white text-lg font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-xl uppercase tracking-widest"
                                >
                                    Schedule a Conversation
                                </a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
