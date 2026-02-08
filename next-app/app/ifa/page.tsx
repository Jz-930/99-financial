
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function IFAPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">Immediate Financing Arrangement (IFA)</h1>
                        <p className="text-xl text-brand-gold font-medium max-w-3xl mx-auto">
                            A Capital Efficiency Strategy Within Corporate Wealth Architecture
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Strategic Context */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Strategic Context</h2>
                        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                            <p>
                                Long-term corporate wealth planning emphasizes structure, tax efficiency, and disciplined asset growth. However, business owners operate in a dynamic environment where access to capital remains essential — for expansion, investments, opportunities, or strategic personal objectives.
                            </p>
                            <div className="bg-brand-light p-6 rounded-lg my-6">
                                <p className="font-bold text-brand-blue mb-2">The traditional trade-off is clear:</p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                    <li>Preserve long-term tax-efficient structures</li>
                                    <li className="list-none italic font-medium ml-[-20px] my-2 text-slate-500">— or —</li>
                                    <li>Access liquidity when needed</li>
                                </ul>
                            </div>
                            <p>
                                An Immediate Financing Arrangement (IFA) is an advanced planning structure designed to resolve this tension — not by replacing long-term strategy, but by layering liquidity access on top of it.
                            </p>
                            <p className="font-bold text-brand-blue">
                                IFA is not an insurance product and not a borrowing tactic. It is a capital efficiency strategy implemented within a properly designed corporate wealth structure.
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
                                In disciplined corporate planning, capital is often positioned for long-term tax efficiency and estate objectives. But capital committed to long-term structures may appear “illiquid” from an operational perspective.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6 font-bold text-brand-blue">
                                The structural challenge becomes: <br />
                                How can business owners access capital during their lifetime without dismantling long-term tax-efficient planning?
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                IFA addresses this by allowing structured liquidity access while the underlying asset base continues to grow within the corporate structure. This preserves planning integrity while improving capital flexibility.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-right relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/ifa-strategy.png"
                                alt="IFA Strategic Diagram"
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Where IFA Fits in the Corporate Wealth Flow */}
            <section className="py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-10">Where IFA Fits in the Corporate Wealth Flow</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                            IFA operates within the same corporate wealth flow that governs long-term planning:
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold text-brand-blue mb-10">
                            <span className="bg-slate-100 px-4 py-2 rounded-full border">Corporate profits</span> →
                            <span className="bg-slate-100 px-4 py-2 rounded-full border">Asset accumulation</span> →
                            <span className="bg-slate-100 px-4 py-2 rounded-full border">Structured insurance planning</span> →
                            <span className="bg-slate-100 px-4 py-2 rounded-full border">Asset growth</span> →
                            <span className="bg-brand-gold text-white px-4 py-2 rounded-full shadow-md">Strategic financing</span> →
                            <span className="bg-brand-blue text-white px-4 py-2 rounded-full shadow-md">Liquidity access without structural disruption</span>
                        </div>

                        <div className="bg-brand-blue/5 border-l-4 border-brand-gold p-6 text-left max-w-2xl mx-auto rounded-r-lg">
                            <p className="text-brand-blue italic font-medium">
                                IFA therefore sits mid-stream, not at the beginning and not at the end. It functions as a capital access layer within a broader corporate wealth architecture.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* How the Structure Works (Conceptually) */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-10" style={{ backgroundImage: `radial-gradient(#ea8d22 1px, transparent 1px)`, backgroundSize: `30px 30px` }}></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">How the Structure Works (Conceptually)</h2>
                        <p className="text-xl text-slate-300">An IFA integrates three coordinated components:</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <ScrollAnimation className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 text-center">
                            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg">1</div>
                            <h3 className="text-lg font-bold text-white mb-2">Asset Structure</h3>
                            <p className="text-slate-300 text-sm">A properly structured corporate-owned insurance asset</p>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 text-center" delay={100}>
                            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg">2</div>
                            <h3 className="text-lg font-bold text-white mb-2">Lending Facility</h3>
                            <p className="text-slate-300 text-sm">A lending facility secured against that asset</p>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 text-center" delay={200}>
                            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg">3</div>
                            <h3 className="text-lg font-bold text-white mb-2">Governance</h3>
                            <p className="text-slate-300 text-sm">Ongoing professional oversight ensuring alignment with long-term objectives</p>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="text-center fade-in-up">
                        <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
                            The underlying asset continues to grow under disciplined planning, while a portion of its value supports controlled access to capital.
                        </p>
                        <div className="inline-flex flex-col md:flex-row gap-6 md:gap-12 text-lg font-bold text-brand-gold">
                            <span><i className="fa-solid fa-check mr-2"></i>Growth and liquidity coexist</span>
                            <span><i className="fa-solid fa-check mr-2"></i>Long-term tax planning remains intact</span>
                            <span><i className="fa-solid fa-check mr-2"></i>Corporate capital efficiency improves</span>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* What IFA Is — and Is Not */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollAnimation className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-blue">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6">What IFA Is</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex items-center"><i className="fa-solid fa-check text-brand-blue mr-3"></i>A corporate capital efficiency strategy</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-brand-blue mr-3"></i>An advanced layer added to established planning</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-brand-blue mr-3"></i>A method of accessing liquidity without collapsing structure</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-brand-blue mr-3"></i>A coordinated financial, tax, and lending strategy</li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-slate-50 p-8 rounded-xl shadow-inner border-t-4 border-slate-400" delay={100}>
                            <h3 className="text-2xl font-bold text-slate-600 mb-6">What IFA Is Not</h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-center"><i className="fa-solid fa-xmark text-slate-400 mr-3"></i>A shortcut to liquidity</li>
                                <li className="flex items-center"><i className="fa-solid fa-xmark text-slate-400 mr-3"></i>A substitute for foundational planning</li>
                                <li className="flex items-center"><i className="fa-solid fa-xmark text-slate-400 mr-3"></i>A short-term financing tactic</li>
                                <li className="flex items-center"><i className="fa-solid fa-xmark text-slate-400 mr-3"></i>Appropriate for undisciplined or unstable financial situations</li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation className="mt-12 text-center text-brand-blue font-bold text-xl fade-in-up">
                        It relies on structure, discipline, and long-term alignment.
                    </ScrollAnimation>
                </div>
            </section>

            {/* Common Misconceptions */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-10 text-center">Common Misconceptions</h2>
                        <div className="text-lg text-slate-600 space-y-4 mb-10">
                            <p>Misunderstandings often weaken outcomes:</p>
                            <ul className="space-y-3 pl-6">
                                <li className="flex items-start"><i className="fa-solid fa-circle-exclamation text-brand-gold mt-1.5 mr-3"></i>Viewing IFA primarily as a loan strategy</li>
                                <li className="flex items-start"><i className="fa-solid fa-circle-exclamation text-brand-gold mt-1.5 mr-3"></i>Underestimating the need for ongoing governance</li>
                                <li className="flex items-start"><i className="fa-solid fa-circle-exclamation text-brand-gold mt-1.5 mr-3"></i>Assuming liquidity without structural trade-offs</li>
                                <li className="flex items-start"><i className="fa-solid fa-circle-exclamation text-brand-gold mt-1.5 mr-3"></i>Believing IFA can compensate for weak planning foundations</li>
                            </ul>
                        </div>
                        <div className="bg-brand-blue p-8 rounded-xl text-center text-white shadow-lg">
                            <i className="fa-solid fa-layer-group text-4xl text-brand-gold mb-4"></i>
                            <p className="text-2xl font-serif font-bold">
                                IFA does not create planning strength — <br />it amplifies planning that already exists.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Strategic Role Within Corporate Planning & CTA */}
            <section className="py-20 lg:py-24 bg-brand-blue text-white relative text-center">
                <div className="logo-pattern-bg opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Strategic Role Within Corporate Planning</h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            IFA is evaluated at the corporate balance sheet level, not at the product level. Its role within corporate wealth architecture is to:
                        </p>
                        <ul className="text-left inline-block max-w-2xl text-lg text-slate-200 space-y-3 mb-12">
                            <li className="flex items-center"><i className="fa-solid fa-arrow-trend-up text-brand-gold mr-3"></i>Improve capital efficiency</li>
                            <li className="flex items-center"><i className="fa-solid fa-arrow-trend-up text-brand-gold mr-3"></i>Maintain long-term asset positioning</li>
                            <li className="flex items-center"><i className="fa-solid fa-arrow-trend-up text-brand-gold mr-3"></i>Provide structured access to liquidity</li>
                            <li className="flex items-center"><i className="fa-solid fa-arrow-trend-up text-brand-gold mr-3"></i>Support business flexibility without dismantling tax planning</li>
                        </ul>
                        <p className="text-lg text-white font-medium italic mb-12">
                            It represents the integration of asset growth, financing strategy, and corporate structure.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation className="bg-white/10 rounded-xl p-10 backdrop-blur-sm border border-brand-gold/30 inline-block fade-in-up" delay={100}>
                        <h3 className="text-2xl font-bold text-brand-gold mb-4">Next Step</h3>
                        <p className="text-lg text-white mb-8">
                            IFA planning is relevant only when long-term planning foundations are already in place and when liquidity needs are strategic rather than reactive.
                            <br /><br />
                            Determine whether structured liquidity planning fits your corporate strategy.
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
