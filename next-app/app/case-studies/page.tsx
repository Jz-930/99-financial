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
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">PLANNING STRUCTURES</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Planning Structures in Practice
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Illustrative case structures demonstrating how corporate and family capital can be strategically positioned for long-term tax efficiency, liquidity access, and estate outcomes.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

                    {/* Case 1: Construction Design Firm Owner */}
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-gold/50 flex flex-col lg:flex-row group">
                            {/* Abstract Visual Section */}
                            <div className="lg:w-1/3 bg-slate-800 min-h-[300px] relative overflow-hidden flex items-center justify-center p-8">
                                <Image
                                    src="/images/Construction-Design-Firm.webp"
                                    alt="Construction Design Firm Background"
                                    fill
                                    className="object-cover opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50"></div>

                                <div className="relative z-10 text-center">
                                    <span className="block text-brand-gold font-bold text-6xl mb-2 opacity-20">01</span>
                                    <h3 className="text-white font-serif text-2xl font-bold leading-tight">Construction<br />Design Firm</h3>
                                    <div className="w-12 h-1 bg-brand-gold mx-auto mt-4"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-10 lg:w-2/3 flex flex-col">
                                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-100 pb-4">
                                    Construction Design Firm Owner
                                </h2>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10 flex-grow">
                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Profile</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            Toronto construction design firm owner (Female, 46) with ~$500K annual profit and ~$2.5M retained earnings under a HoldCo + OpCo structure.
                                        </p>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Challenge</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Corporate surplus accumulating with tax-inefficient personal extraction options</li>
                                            <li>Estate tax exposure on accumulated corporate wealth</li>
                                            <li>Need to maintain corporate liquidity while advancing long-term planning objectives</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Strategy</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold mb-6">
                                            <li>Corporate capital repositioning for estate efficiency</li>
                                            <li>CDA-integrated corporate estate structure</li>
                                            <li>Liquidity structuring flexibility within corporate planning</li>
                                        </ul>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Outcome</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Multi-million projected CDA capacity</li>
                                            <li>Estate liquidity without forced asset sales</li>
                                            <li>Corporate retained earnings repositioned into long-term tax-advantaged corporate estate structure</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                                    <Link href="/case-studies/construction-company-owner" className="sm:ml-auto px-6 py-2 bg-brand-gold text-white text-sm font-bold rounded-sm hover:bg-brand-blue transition-colors duration-300 shadow-md flex items-center group/link">
                                        Read Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Case 2: Corporate IFA Strategy */}
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-gold/50 flex flex-col lg:flex-row-reverse group">
                            {/* Abstract Visual Section */}
                            <div className="lg:w-1/3 bg-slate-900 min-h-[300px] relative overflow-hidden flex items-center justify-center p-8">
                                <Image
                                    src="/images/Corporate-IFA-Strategy.webp"
                                    alt="Corporate IFA Strategy Background"
                                    fill
                                    className="object-cover opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/50 to-slate-800/50"></div>

                                <div className="relative z-10 text-center">
                                    <span className="block text-brand-gold font-bold text-6xl mb-2 opacity-20">02</span>
                                    <h3 className="text-white font-serif text-2xl font-bold leading-tight">Corporate<br />IFA Strategy</h3>
                                    <div className="w-12 h-1 bg-brand-gold mx-auto mt-4"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-10 lg:w-2/3 flex flex-col">
                                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-100 pb-4">
                                    Corporate IFA Strategy for a Capital-Intensive Business Owner
                                </h2>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10 flex-grow">
                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Profile</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            45-year-old incorporated business owner in Markham operating a specialized building materials company with approximately $2.1M in annual revenue, ~$600K after-tax corporate profit, and ~$3.8M in retained earnings.<br />
                                            The business operates with ~$12M in fixed-asset financing tied to commercial property and operational infrastructure typical for asset-intensive enterprises.
                                        </p>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Challenge</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Large retained earnings accumulating beyond operating requirements</li>
                                            <li>Dividend extraction highly tax-inefficient</li>
                                            <li>Capital largely committed to fixed assets and commercial debt</li>
                                            <li>Desire to improve long-term estate efficiency without reducing business liquidity</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Strategy</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold mb-6">
                                            <li>Corporate-owned participating life insurance</li>
                                            <li>Immediate Financing Arrangement (IFA) with bank lending</li>
                                            <li>Integrated insurance, lending, and tax structure</li>
                                        </ul>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Outcome</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>$21.84M projected corporate death benefit</li>
                                            <li>$21.84M CDA credit created</li>
                                            <li>~$15.16M net CDA after loan repayment</li>
                                            <li>Estate liquidity achieved without disrupting operations</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                                    <Link href="/case-studies/ifa-case-study" className="sm:ml-auto px-6 py-2 bg-brand-gold text-white text-sm font-bold rounded-sm hover:bg-brand-blue transition-colors duration-300 shadow-md flex items-center group/link">
                                        Read Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Case 3: Veterinary Practice Succession */}
                    <ScrollAnimation className="fade-in-up">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-gold/50 flex flex-col lg:flex-row group">
                            {/* Abstract Visual Section */}
                            <div className="lg:w-1/3 bg-slate-800 min-h-[300px] relative overflow-hidden flex items-center justify-center p-8">
                                <Image
                                    src="/images/Veterinary-Succession.webp"
                                    alt="Veterinary Succession Background"
                                    fill
                                    className="object-cover opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 to-slate-800/50"></div>

                                <div className="relative z-10 text-center">
                                    <span className="block text-brand-gold font-bold text-6xl mb-2 opacity-20">03</span>
                                    <h3 className="text-white font-serif text-2xl font-bold leading-tight">Veterinary<br />Succession</h3>
                                    <div className="w-12 h-1 bg-brand-gold mx-auto mt-4"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-10 lg:w-2/3 flex flex-col">
                                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-100 pb-4">
                                    Veterinary Practice Succession & Estate Structuring
                                </h2>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-10 flex-grow">
                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Profile</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            Ottawa husband-and-wife veterinary clinic owners (age 50) operating for 25 years. Clinic revenue ~$3.1M, after-tax corporate profit ~$500K, $4.2M retained earnings, plus two corporate investment properties (FMV ~$2.5M). Their son is prepared to take over.
                                        </p>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Challenge</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Direct transfer of shares may trigger tax consequences</li>
                                            <li>Future growth increases parents’ estate tax exposure</li>
                                            <li>Retirement lifestyle requires liquidity beyond business assets</li>
                                            <li>Wealth concentrated in business and real estate</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Strategy</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold mb-6">
                                            <li>Estate Freeze with Family HoldCo structure</li>
                                            <li>Surplus profit movement via intercorporate dividends</li>
                                            <li>Structured corporate estate liquidity planning</li>
                                            <li>Liquidity structuring flexibility to support retirement objectives</li>
                                        </ul>

                                        <h3 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Outcome</h3>
                                        <ul className="text-slate-600 text-sm space-y-1.5 list-disc pl-4 marker:text-brand-gold">
                                            <li>Parents’ current company value locked in</li>
                                            <li>Future growth shifted to next generation</li>
                                            <li>Retirement liquidity supported without requiring asset liquidation</li>
                                            <li>Significant projected CDA capacity created</li>
                                            <li>Succession, retirement planning, and estate tax strategy integrated</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                                    <Link href="/case-studies/veterinary-practice-succession" className="sm:ml-auto px-6 py-2 bg-brand-gold text-white text-sm font-bold rounded-sm hover:bg-brand-blue transition-colors duration-300 shadow-md flex items-center group/link">
                                        Read Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                </div>

                {/* Final CTA Section */}
                <div className="mt-24 max-w-4xl mx-auto text-center px-4">
                    <ScrollAnimation className="fade-in-up">
                        <div className="rounded-xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/images/CTA.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-black/20"></div>
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
                                    Book a Private Strategy Review
                                </a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
