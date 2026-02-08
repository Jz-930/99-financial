import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate Wealth & Tax-Efficient Planning | 99 Financial Inc.',
    description: 'Tax-efficient corporate planning for Canadian entrepreneurs. Strategies for corporate-owned insurance, CDA, IFA, estate planning, and retirement liquidity.',
};

import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../components/ScrollAnimation';
import PlanningApproach from '../components/PlanningApproach';
import CTASection from '../components/CTASection';

/* ── Data ─────────────────────────────────────────────────────── */

const solutionCards = [
    {
        href: '/corporate-par',
        icon: 'fa-solid fa-building-columns',
        title: 'Corporate-Owned Insurance Planning',
        description: 'A long-term planning tool used within corporate structures to support tax efficiency, balance-sheet planning, and future estate outcomes.',
        linkText: 'Explore Strategy',
    },
    {
        href: '/cda',
        icon: 'fa-solid fa-coins',
        title: 'Capital Dividend Account (CDA) Planning',
        description: 'A tax mechanism that enables the tax-free transfer of corporate wealth when planning is structured intentionally and over time. \n\nConvert corporate estate taxes into tax-free capital dividends (where applicable).',
        linkText: 'Learn About CDA',
    },
    {
        href: '/ifa',
        icon: 'fa-solid fa-arrows-rotate',
        title: 'Immediate Financing Arrangements (IFA)',
        description: 'An advanced planning strategy that may provide access to liquidity without dismantling long-term corporate planning structures. \n\nAccess liquidity while preserving long-term corporate planning structures.',
        linkText: 'How IFA Works',
    },
];

const caseStudyCards = [
    {
        href: '/case-studies/construction-company-owner',
        image: '/images/illustrations/construction_icon.png',
        imageAlt: 'Construction Safety',
        number: '01',
        title: 'Corporate Restructuring',
        description: 'Retained corporate earnings restructured to support future income needs while preserving long-term estate flexibility.',
    },
    {
        href: '/case-studies/ifa-case-study',
        image: '/images/illustrations/liquidity_icon.png',
        imageAlt: 'Liquidity Strategy',
        number: '02',
        title: 'Liquidity & Growth',
        description: 'Liquidity needs addressed without breaking long-term corporate planning or triggering unnecessary tax exposure.',
    },
    {
        href: '/case-studies/medical-professional',
        image: '/images/illustrations/medical_icon.png',
        imageAlt: 'Medical Professional',
        number: '03',
        title: 'Professional Planning',
        description: 'A high-income professional planning early to align growing corporate wealth with future family outcomes.',
    },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function Home() {
    return (
        <>
            {/* ── Hero Section ─────────────────────────────────── */}
            <section className="relative h-auto min-h-[60vh] md:min-h-[85vh] flex items-center text-white py-12 md:py-20 lg:py-0 overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/images/Hero-video.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to right, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.75))' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-block py-1.5 px-4 mb-8 border border-brand-gold/50 bg-brand-gold/10 rounded-full backdrop-blur-sm">
                            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">For Canadian Business Owners</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif font-bold leading-relaxed md:leading-[1.45] mb-6 md:mb-8 drop-shadow-xl">
                            Corporate wealth requires <br />
                            <span className="text-brand-gold">planning</span> — not just investing.
                        </h1>
                        <ul className="text-base md:text-lg text-slate-200 mb-8 leading-relaxed font-light max-w-2xl mx-auto space-y-4 text-left">
                            {[
                                'Retained earnings quietly create long-term tax drag.',
                                'Corporate wealth is often misaligned with future estate outcomes.',
                                'Doing nothing is also a decision — just not an intentional one.',
                            ].map((text, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-4 flex-shrink-0 mt-2.5"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-brand-gold font-medium text-lg mb-4 italic">
                            Thoughtful planning starts long before a tax or estate issue becomes urgent.
                        </p>
                        <p className="text-slate-300 text-lg mb-10 font-light">
                            We work alongside your accountant and legal counsel to build an integrated plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-white px-8 py-3 md:px-10 md:py-4 rounded-sm font-bold text-base md:text-lg hover:bg-brand-goldHover transition shadow-lg text-center transform hover:-translate-y-1 duration-200">
                                Book a Private Strategy Review
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Who We Work With ─────────────────────────────── */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-6">
                                Who We Work With
                            </h2>
                            <div className="logo-pattern-bg"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-1 bg-brand-gold mb-8 animated-divider animate"></div>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Our work is focused on incorporated business owners and professionals who are beginning to think beyond annual tax filings and short-term returns. This typically includes individuals who:
                                </p>
                                <ul className="space-y-4 mb-4">
                                    {[
                                        'Operate through a corporation with retained earnings',
                                        'Have growing income and increasing tax exposure',
                                        'Are thinking about long-term income, liquidity, and estate outcomes',
                                        'Already work with accountants and other advisors, but want a more integrated planning perspective',
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start">
                                            <i className="fa-solid fa-circle-check text-brand-gold mt-1.5 mr-3 text-sm"></i>
                                            <span className="text-slate-700 text-lg">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="relative fade-in-right">
                            <div className="absolute -inset-4 bg-brand-gold/20 rounded-lg transform rotate-2"></div>
                            <div className="bg-brand-light p-6 md:p-10 rounded-lg border border-slate-100 shadow-xl relative z-10 expertise-card">
                                <h3 className="text-xl font-serif font-bold text-brand-blue mb-6 border-b border-slate-200 pb-4">Our Core Expertise</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Corporate-Owned Life Insurance Strategy',
                                        'CDA (Capital Dividend Account) Planning',
                                        'Immediate Financing Arrangements (IFA)',
                                        'Retained Earnings Optimization',
                                        'Family Business Succession',
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start list-item-stagger animate" style={{ transitionDelay: `${i * 0.1}s` }}>
                                            <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-4"></i>
                                            <span className="text-slate-700 font-medium">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div >
            </section >

            {/* ── Planning Approach ────────────────────────────── */}
            <PlanningApproach />

            {/* ── Our Solutions ─────────────────────────────────── */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                {/* Video Background (Flipped) */}
                <div className="absolute inset-0 z-0">
                    <video
                        className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/images/Hero-video.mp4"
                    >
                        <source src="/images/CTA.mp4" type="video/mp4" />
                    </video>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <ScrollAnimation className="fade-in-up">
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Our Solutions</span>
                            <h2 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Solutions</h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Designed to address situations where corporate assets, taxation, liquidity planning, and long-term outcomes intersect.
                            </p>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutionCards.map((card, i) => (
                            <ScrollAnimation key={i} className="fade-in-up group h-full" delay={i * 100}>
                                <Link href={card.href} className="block h-full bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-brand-gold/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,141,34,0.1)] relative overflow-hidden flex flex-col">
                                    <div className="mb-6 relative z-10">
                                        <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500 border border-white/10">
                                            <i className={`${card.icon} text-2xl text-brand-gold group-hover:text-white transition-colors duration-500`}></i>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-300">{card.title}</h3>
                                        <p className="text-slate-300 mb-6 leading-relaxed flex-grow text-sm">
                                            {card.description.split('\n\n').map((part, j) => (
                                                <span key={j}>{j > 0 && <><br /><br /></>}{part}</span>
                                            ))}
                                        </p>
                                    </div>
                                    <div className="mt-auto flex items-center text-brand-gold font-bold text-sm group-hover:text-white transition-colors duration-300 z-10">
                                        {card.linkText} <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                                    </div>
                                    {/* Glow Effect */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-all duration-500"></div>
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <Link href="/solutions" className="inline-flex items-center text-brand-gold border border-brand-gold font-bold py-4 px-10 rounded-sm hover:bg-brand-gold hover:text-white transition shadow-lg hover:shadow-brand-gold/20 transform hover:-translate-y-1 backdrop-blur-sm">
                            View All Solutions
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Case Snapshots ───────────────────────────────── */}
            <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <ScrollAnimation className="fade-in-up">
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Case Snapshots</span>
                            <h2 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Typical Business Owner Scenarios</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Every situation is different. The following examples illustrate how thoughtful planning can be applied in practice.
                            </p>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudyCards.map((card, i) => (
                            <ScrollAnimation key={i} className="fade-in-up h-full" delay={i * 100}>
                                <Link href={card.href} className="group block h-full bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 p-8 relative overflow-hidden flex flex-col">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 text-8xl font-serif font-bold text-slate-400 group-hover:text-brand-gold transition-colors duration-500 select-none">{card.number}</div>
                                    <div className="mb-6 relative z-10">
                                        <div className="w-24 h-24 relative mb-6 group-hover:scale-110 transition-transform duration-500">
                                            <Image
                                                src={card.image}
                                                alt={card.imageAlt}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <h4 className="text-xl font-serif font-bold text-brand-blue mb-3 group-hover:text-brand-gold transition-colors duration-300">{card.title}</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {card.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto flex items-center text-brand-blue font-bold text-sm group-hover:text-brand-gold transition-colors duration-300 z-10 pt-4">
                                        View Case Study <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                                    </div>
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ───────────────────────────────────── */}
            <CTASection
                variant="video"
                heading="Start With a Conversation"
                description="For business owners thinking about long-term corporate planning, a brief conversation can often help clarify whether these strategies are relevant — and when they should be considered."
            />
        </>
    );
}
