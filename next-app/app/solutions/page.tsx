
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
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Our Solutions
                        </h1>
                        <p className="text-2xl text-brand-gold font-medium mb-6">
                            Strategy-led planning for incorporated business owners
                        </p>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            At 99 Financial, we evaluate insurance, tax, and liquidity decisions within a broader long-term corporate planning framework. Our solutions are designed for business owners who value clarity, discipline, and thoughtful planning over time.
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

            {/* Strategy Cards Section (3.3 & 3.6) */}
            <section className="py-24 relative overflow-hidden">
                <div className="logo-pattern-bg"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Corporate Par */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group">
                            {/* 3.6: Color strip replacement */}
                            <div className="h-4 bg-gradient-to-r from-brand-blue to-brand-blue/80"></div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">Corporate-Owned Life Insurance</h3>
                                <p className="text-sm font-serif italic text-brand-gold mb-6">Insurance as a long-term planning tool</p>

                                {/* 3.3 Bullet updates */}
                                <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-grow">
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Corporate retained earnings strategy</span></li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Long-term tax efficiency</span></li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Structured liquidity access</span></li>
                                </ul>

                                {/* 3.4 Button text update */}
                                <Link href="/corporate-par" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Explore the Strategy
                                </Link>
                            </div>
                        </ScrollAnimation>

                        {/* CDA */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group" delay={100}>
                            {/* 3.6: Color strip replacement */}
                            <div className="h-4 bg-gradient-to-r from-brand-gold to-brand-gold/80"></div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">Capital Dividend Account (CDA)</h3>
                                <p className="text-sm font-serif italic text-brand-gold mb-6">Understanding the mechanics behind tax-free corporate wealth transfer</p>

                                {/* 3.3 Bullet updates */}
                                <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-grow">
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Tax-efficient corporate extraction</span></li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Estate & succession planning</span></li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>CDA optimization</span></li>
                                </ul>

                                {/* 3.4 Button text update */}
                                <Link href="/cda" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Explore the Strategy
                                </Link>
                            </div>
                        </ScrollAnimation>

                        {/* IFA */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group" delay={200}>
                            {/* 3.6: Color strip replacement */}
                            <div className="h-4 bg-gradient-to-r from-slate-400 to-slate-500"></div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">Immediate Financing Arrangement (IFA)</h3>
                                <p className="text-sm font-serif italic text-brand-gold mb-6">Balancing long-term structure with lifetime liquidity</p>

                                {/* 3.3 Bullet updates */}
                                <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-grow">
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Corporate capital efficiency</span></li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Shareholder planning strategy</span></li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i><span>Interest deductibility</span></li>
                                </ul>

                                {/* 3.4 Button text update */}
                                <Link href="/ifa" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Explore the Strategy
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Combined Section: How It Works & Who It's For (3.5) */}
            <section className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                            {/* Left Column: How the Solutions Work Together */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">How the Solutions Work Together</h2>

                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-3.5 before:w-0.5 before:bg-brand-gold/30">
                                    <div className="relative flex items-center group">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-50 shadow shrink-0 z-10">
                                            <div className="w-2.5 h-2.5 bg-brand-gold rounded-full"></div>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <p className="text-lg text-slate-700 font-medium">The <strong>Client Journey</strong> provides the planning discipline and decision framework.</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center group">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-50 shadow shrink-0 z-10">
                                            <div className="w-2.5 h-2.5 bg-brand-gold rounded-full"></div>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <p className="text-lg text-slate-700 font-medium"><strong>Corporate-owned life insurance</strong> establishes a long-term structural foundation.</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center group">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-50 shadow shrink-0 z-10">
                                            <div className="w-2.5 h-2.5 bg-brand-gold rounded-full"></div>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <p className="text-lg text-slate-700 font-medium">The <strong>Capital Dividend Account</strong> reflects the tax outcomes created by that structure over time.</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center group">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-50 shadow shrink-0 z-10">
                                            <div className="w-2.5 h-2.5 bg-brand-gold rounded-full"></div>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <p className="text-lg text-slate-700 font-medium">Where appropriate, an <strong>Immediate Financing Arrangement</strong> may be used to enhance liquidity.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 p-6 bg-brand-blue/5 rounded-lg border-l-4 border-brand-gold">
                                    <p className="text-brand-blue italic font-medium leading-relaxed">
                                        "Together, these components form an integrated approach — one that prioritizes structure, coordination, and clarity over individual tactics or short-term outcomes."
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Who These Solutions Are For */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Who These Solutions Are For</h2>

                                <div className="space-y-8">
                                    {/* Typically Suitable */}
                                    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
                                        <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center">
                                            <i className="fa-solid fa-check-circle mr-2"></i> Typically suitable for
                                        </h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-700">Incorporated business owners with retained earnings</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-700">Long-term planning and tax efficiency focused</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-700">Estate, succession, or shareholder planning considerations</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-700">Comfortable with structured, coordinated decision-making</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Not Appropriate */}
                                    <div className="bg-slate-50 rounded-lg shadow-inner p-6 border-t-4 border-slate-300">
                                        <h3 className="text-lg font-bold text-slate-500 mb-4 flex items-center">
                                            <i className="fa-solid fa-ban mr-2"></i> Often not appropriate when
                                        </h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-minus text-slate-400 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-500">Corporate cash flow is needed for near-term operations</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-minus text-slate-400 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-500">Objectives are short-term or return-driven</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-minus text-slate-400 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-500">Flexibility is prioritized over structure</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-minus text-slate-400 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-500">Decisions are evaluated in isolation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* NEW: Planning Structures in Practice (3.8) */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Planning Structures in Practice</h2>
                            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                                Illustrative case structures showing how corporate and family capital can be strategically positioned for long-term tax efficiency, liquidity access, and estate outcomes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Case 1 */}
                            <Link href="/case-studies/corporate-capital-repositioning" className="group block h-full">
                                <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-6">
                                        <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Case Study 1</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">
                                        Corporate Capital Repositioning
                                    </h3>
                                    <div className="mt-auto pt-6 flex items-center text-brand-gold font-bold uppercase text-sm tracking-wider">
                                        View Case Study <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </Link>

                            {/* Case 2 */}
                            <Link href="/case-studies/leveraged-capital-efficiency" className="group block h-full">
                                <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-6">
                                        <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Case Study 2</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">
                                        Leveraged Capital Efficiency
                                    </h3>
                                    <div className="mt-auto pt-6 flex items-center text-brand-gold font-bold uppercase text-sm tracking-wider">
                                        View Case Study <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </Link>

                            {/* Case 3 */}
                            <Link href="/case-studies/family-estate-structuring" className="group block h-full">
                                <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-6">
                                        <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Case Study 3</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">
                                        Family Estate Structuring
                                    </h3>
                                    <div className="mt-auto pt-6 flex items-center text-brand-gold font-bold uppercase text-sm tracking-wider">
                                        View Case Study <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* CTA Section (3.7) */}
            <section className="py-24 bg-brand-blue relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                            Ready to explore whether your corporate structure is working efficiently?
                        </h2>
                        <a
                            href="https://tidycal.com/greatec/30-minute-meeting"
                            target="_blank"
                            className="inline-block bg-brand-gold text-white text-lg font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-xl uppercase tracking-widest"
                        >
                            Book a Private Strategy Review
                        </a>
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    );
}
