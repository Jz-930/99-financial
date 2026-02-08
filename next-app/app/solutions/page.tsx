
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';
import SectionContainer from '../../components/SectionContainer';

export const metadata = {
    title: 'Solutions | 99 Financial Inc.',
    description: 'Explore our corporate planning solutions: Corporate-Owned Life Insurance, Capital Dividend Account (CDA), Immediate Financing Arrangement (IFA), and estate planning.',
};

/* ── Data ─────────────────────────────────────────────────────── */

const strategyCards = [
    {
        href: '/corporate-par',
        title: 'Corporate-Owned Life Insurance',
        subtitle: 'Insurance as a long-term planning tool',
        stripGradient: 'from-brand-blue to-brand-blue/80',
        bullets: ['Corporate retained earnings strategy', 'Long-term tax efficiency', 'Structured liquidity access'],
    },
    {
        href: '/cda',
        title: 'Capital Dividend Account (CDA)',
        subtitle: 'Understanding the mechanics behind tax-free corporate wealth transfer',
        stripGradient: 'from-brand-gold to-brand-gold/80',
        bullets: ['Tax-efficient corporate extraction', 'Estate & succession planning', 'CDA optimization'],
    },
    {
        href: '/ifa',
        title: 'Immediate Financing Arrangement (IFA)',
        subtitle: 'Balancing long-term structure with lifetime liquidity',
        stripGradient: 'from-slate-400 to-slate-500',
        bullets: ['Corporate capital efficiency', 'Shareholder planning strategy', 'Interest deductibility'],
    },
];

const timelineSteps = [
    { text: <>The <strong>Client Journey</strong> provides the planning discipline and decision framework.</> },
    { text: <><strong>Corporate-owned life insurance</strong> establishes a long-term structural foundation.</> },
    { text: <>The <strong>Capital Dividend Account</strong> reflects the tax outcomes created by that structure over time.</> },
    { text: <>Where appropriate, an <strong>Immediate Financing Arrangement</strong> may be used to enhance liquidity.</> },
];

const suitableItems = [
    'Incorporated business owners with retained earnings',
    'Long-term planning and tax efficiency focused',
    'Estate, succession, or shareholder planning considerations',
    'Comfortable with structured, coordinated decision-making',
];

const notAppropriateItems = [
    'Corporate cash flow is needed for near-term operations',
    'Objectives are short-term or return-driven',
    'Flexibility is prioritized over structure',
    'Decisions are evaluated in isolation',
];

const caseStudyCards = [
    { href: '/case-studies/construction-company-owner', label: 'Case Study 1', title: 'Corporate Capital Repositioning' },
    { href: '/case-studies/ifa-case-study', label: 'Case Study 2', title: 'Leveraged Capital Efficiency' },
    { href: '/case-studies/veterinary-practice-succession', label: 'Case Study 3', title: 'Family Estate Structuring' },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function SolutionsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section — custom (extra paragraphs + line breaks) */}
            <section className="hero-gradient relative h-auto min-h-[40vh] md:min-h-[400px] flex items-center text-white overflow-hidden py-16 md:py-0">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <h1 className="text-3xl md:text-6xl font-serif font-bold mb-4 md:mb-6 text-white text-shadow-lg">
                            Solutions
                        </h1>
                        <p className="text-2xl text-brand-gold font-medium mb-6">
                            How we structure long-term corporate planning for business owners
                        </p>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            At 99 Financial, insurance, tax, and liquidity decisions are evaluated within a broader long-term corporate planning framework.
                            <br /><br />
                            Our work is most relevant for business owners who prioritize structured decision-making and long-term alignment over short-term tactics.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Client Journey Section */}
            <SectionContainer className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                <ScrollAnimation className="fade-in-up">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Client Journey</h2>
                        <p className="text-xl text-brand-gold font-medium mb-8">A disciplined planning process, designed for complexity</p>

                        <ul className="text-slate-600 space-y-4 text-lg leading-relaxed mb-10 text-left max-w-2xl mx-auto">
                            {[
                                'Every engagement follows a structured process — from understanding corporate context to evaluating strategic fit, implementation, and ongoing review.',
                                'This ensures decisions are made deliberately, with clarity around trade-offs, timing, and long-term consequences.',
                            ].map((text, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-4 flex-shrink-0 mt-2.5"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-brand-gold rounded-full mr-4 flex-shrink-0 mt-2.5"></span>
                                <span className="font-semibold text-brand-blue">Best suited for business owners who value process, coordination, and strategic clarity.</span>
                            </li>
                        </ul>

                        <Link href="/client-journey" className="inline-block px-8 py-4 bg-brand-blue text-white font-bold rounded-sm hover:bg-brand-gold transition-colors duration-300 uppercase tracking-widest text-sm shadow-lg hover:shadow-xl">
                            Understand our client journey
                        </Link>
                    </div>
                </ScrollAnimation>
            </SectionContainer>

            {/* Strategy Cards Section */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="logo-pattern-bg"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {strategyCards.map((card, i) => (
                            <ScrollAnimation key={i} className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group" delay={i * 100}>
                                <div className={`h-4 bg-gradient-to-r ${card.stripGradient}`}></div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">{card.title}</h3>
                                    <p className="text-sm font-serif italic text-brand-gold mb-6">{card.subtitle}</p>

                                    <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-grow">
                                        {card.bullets.map((bullet, j) => (
                                            <li key={j} className="flex items-start">
                                                <i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={card.href} className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                        Explore the Strategy
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Combined Section: How It Works & Who It's For */}
            <SectionContainer className="py-16 md:py-24 bg-slate-50 relative">
                <ScrollAnimation className="fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Left Column: How the Solutions Work Together */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">How the Solutions Work Together</h2>

                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-3.5 before:w-0.5 before:bg-brand-gold/30">
                                {timelineSteps.map((step, i) => (
                                    <div key={i} className="relative flex items-center group">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-50 shadow shrink-0 z-10">
                                            <div className="w-2.5 h-2.5 bg-brand-gold rounded-full"></div>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <p className="text-lg text-slate-700 font-medium">{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-brand-blue/5 rounded-lg border-l-4 border-brand-gold">
                                <p className="text-brand-blue italic font-medium leading-relaxed">
                                    &quot;Together, these components form an integrated approach — one that prioritizes structure, coordination, and clarity over individual tactics or short-term outcomes.&quot;
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
                                        {suitableItems.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <i className="fa-solid fa-check text-green-500 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Not Appropriate */}
                                <div className="bg-slate-50 rounded-lg shadow-inner p-6 border-t-4 border-slate-300">
                                    <h3 className="text-lg font-bold text-slate-500 mb-4 flex items-center">
                                        <i className="fa-solid fa-ban mr-2"></i> Often not appropriate when
                                    </h3>
                                    <ul className="space-y-4">
                                        {notAppropriateItems.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <i className="fa-solid fa-minus text-slate-400 text-xs mt-1.5 mr-3"></i>
                                                <span className="text-slate-500">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollAnimation>
            </SectionContainer>

            {/* Planning Structures in Practice */}
            <SectionContainer className="py-16 md:py-24 bg-white relative">
                <ScrollAnimation className="fade-in-up">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Planning Structures in Practice</h2>
                        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Illustrative case structures showing how corporate and family capital can be strategically positioned for long-term tax efficiency, liquidity access, and estate outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudyCards.map((card, i) => (
                            <Link key={i} href={card.href} className="group block h-full">
                                <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-6">
                                        <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{card.label}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">
                                        {card.title}
                                    </h3>
                                    <div className="mt-auto pt-6 flex items-center text-brand-gold font-bold uppercase text-sm tracking-wider">
                                        View Case Study <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </ScrollAnimation>
            </SectionContainer>

            {/* CTA Section */}
            <section className="py-20 md:py-32 relative overflow-hidden text-white">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/images/CTA.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 md:mb-8 leading-tight tracking-tight text-white drop-shadow-md">
                            Ready to explore whether your corporate structure is working efficiently?
                        </h2>

                        <div className="h-1 w-24 bg-brand-gold mx-auto mb-10 rounded-full"></div>

                        <a
                            href="https://tidycal.com/greatec/30-minute-meeting"
                            target="_blank"
                            className="inline-flex items-center justify-center bg-brand-gold text-white text-base md:text-lg font-bold py-3 px-8 md:py-4 md:px-12 rounded-full hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-xl uppercase tracking-widest hover:scale-105"
                        >
                            Book a Private Strategy Review
                        </a>
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    );
}
