"use client";

import React from 'react';
import Link from 'next/link';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CaseStudiesPage() {
    /* ── Data ─────────────────────────────────────────────────────── */
    const caseStudies = [
        {
            href: '/case-studies/construction-company-owner',
            number: '01',
            visualTitle: <>Construction<br />Design Firm</>,
            heading: 'Construction Design Firm Owner',
            flexDir: 'lg:flex-row',
            profile: 'Toronto construction design firm owner (Female, 46) with ~$500K annual profit and ~$2.5M retained earnings under a HoldCo + OpCo structure.',
            challenges: [
                'Corporate surplus accumulating with tax-inefficient personal extraction options',
                'Estate tax exposure on accumulated corporate wealth',
                'Need to maintain corporate liquidity while advancing long-term planning objectives',
            ],
            strategy: [
                'Corporate capital repositioning for estate efficiency',
                'CDA-integrated corporate estate structure',
                'Liquidity structuring flexibility within corporate planning',
            ],
            outcomes: [
                'Multi-million projected CDA capacity',
                'Estate liquidity without forced asset sales',
                'Corporate retained earnings repositioned into long-term tax-advantaged corporate estate structure',
            ],
        },
        {
            href: '/case-studies/ifa-case-study',
            number: '02',
            visualTitle: <>Corporate<br />IFA Strategy</>,
            heading: 'Corporate IFA Strategy for a Capital-Intensive Business Owner',
            flexDir: 'lg:flex-row-reverse',
            profile: <>45-year-old incorporated business owner in Markham operating a specialized building materials company with approximately $2.1M in annual revenue, ~$600K after-tax corporate profit, and ~$3.8M in retained earnings.<br />The business operates with ~$12M in fixed-asset financing tied to commercial property and operational infrastructure typical for asset-intensive enterprises.</>,
            challenges: [
                'Large retained earnings accumulating beyond operating requirements',
                'Dividend extraction highly tax-inefficient',
                'Capital largely committed to fixed assets and commercial debt',
                'Desire to improve long-term estate efficiency without reducing business liquidity',
            ],
            strategy: [
                'Corporate-owned participating life insurance',
                'Immediate Financing Arrangement (IFA) with bank lending',
                'Integrated insurance, lending, and tax structure',
            ],
            outcomes: [
                '$21.84M projected corporate death benefit',
                '$21.84M CDA credit created',
                '~$15.16M net CDA after loan repayment',
                'Estate liquidity achieved without disrupting operations',
            ],
        },
        {
            href: '/case-studies/veterinary-practice-succession',
            number: '03',
            visualTitle: <>Veterinary<br />Succession</>,
            heading: 'Veterinary Practice Succession & Estate Structuring',
            flexDir: 'lg:flex-row',
            profile: 'Ottawa husband-and-wife veterinary clinic owners (age 50) operating for 25 years. Clinic revenue ~$3.1M, after-tax corporate profit ~$500K, $4.2M retained earnings, plus two corporate investment properties (FMV ~$2.5M). Their son is prepared to take over.',
            challenges: [
                'Direct transfer of shares may trigger tax consequences',
                'Future growth increases parents\' estate tax exposure',
                'Retirement lifestyle requires liquidity beyond business assets',
                'Wealth concentrated in business and real estate',
            ],
            strategy: [
                'Estate Freeze with Family HoldCo structure',
                'Surplus profit movement via intercorporate dividends',
                'Structured corporate estate liquidity planning',
                'Liquidity structuring flexibility to support retirement objectives',
            ],
            outcomes: [
                'Parents\' current company value locked in',
                'Future growth shifted to next generation',
                'Retirement liquidity supported without requiring asset liquidation',
                'Significant projected CDA capacity created',
                'Succession, retirement planning, and estate tax strategy integrated',
            ],
        },
    ];

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-auto min-h-[40vh] md:min-h-[400px] flex items-center text-white overflow-hidden py-16 md:py-0">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">PLANNING STRUCTURES</span>
                        <h1 className="text-3xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Planning Structures in Practice
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Illustrative case structures demonstrating how corporate and family capital can be strategically positioned for long-term tax efficiency, liquidity access, and estate outcomes.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-16 md:py-24 relative bg-brand-light/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

                    {caseStudies.map((cs, i) => (
                        <ScrollAnimation key={i} className="fade-in-up">
                            <div className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition duration-500 hover:border-brand-gold/30 flex flex-col ${cs.flexDir} group`}>
                                {/* Abstract Visual Section - Enhanced with Decoration */}
                                <div className="lg:w-1/3 bg-gradient-to-br from-slate-50 to-slate-200 min-h-[200px] lg:min-h-[300px] relative overflow-hidden flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
                                    {/* Decorative Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                                    {/* Large Watermark Number */}
                                    <div className="absolute -bottom-12 -right-6 text-[12rem] font-bold text-brand-blue opacity-[0.03] leading-none select-none pointer-events-none font-serif">
                                        {cs.number}
                                    </div>

                                    {/* Inner Frame */}
                                    <div className="absolute inset-4 border border-brand-gold/20 opacity-50 pointer-events-none"></div>

                                    <div className="relative z-10 text-center">
                                        <span className="block text-brand-gold font-bold text-sm tracking-[0.2em] mb-4 uppercase">Case Study {cs.number}</span>
                                        <h3 className="text-brand-blue font-serif text-3xl font-bold leading-tight drop-shadow-sm">{cs.visualTitle}</h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-brand-gold/60 to-brand-gold mx-auto mt-6 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 md:p-8 lg:p-10 lg:w-2/3 flex flex-col">
                                    <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-blue mb-6 md:mb-8 border-b border-slate-100 pb-4">
                                        {cs.heading}
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10 flex-grow">
                                        <div>
                                            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Profile</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-6">{cs.profile}</p>

                                            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Challenge</h3>
                                            <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                                {cs.challenges.map((item, j) => <li key={j}>{item}</li>)}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Strategy</h3>
                                            <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold mb-6">
                                                {cs.strategy.map((item, j) => <li key={j}>{item}</li>)}
                                            </ul>

                                            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Outcome</h3>
                                            <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                                {cs.outcomes.map((item, j) => <li key={j}>{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                                        <Link href={cs.href} className="sm:ml-auto px-6 py-2 bg-brand-gold text-white text-sm font-bold rounded-sm hover:bg-brand-blue transition-colors duration-300 shadow-md flex items-center group/link">
                                            Read Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}

                </div>

                {/* Final CTA Section - Reformatted Light */}
                <div className="mt-16 md:mt-24 max-w-4xl mx-auto text-center px-4">
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-white rounded-xl p-8 md:p-14 shadow-xl border-l-4 border-brand-gold">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">
                                Find out if these strategies align with your goals
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                These case studies are examples of planning structures — not recommendations. A brief conversation helps determine whether a similar approach is appropriate for your situation.
                            </p>
                            <a
                                href="https://tidycal.com/greatec/30-minute-meeting"
                                target="_blank"
                                className="inline-block bg-brand-gold text-white text-base md:text-lg font-bold py-3 px-8 md:py-4 md:px-10 rounded-sm hover:bg-brand-blue transition-all duration-300 shadow-lg uppercase tracking-widest"
                            >
                                Book a Private Strategy Review
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
