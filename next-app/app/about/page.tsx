
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';
import SectionContainer from '../../components/SectionContainer';

/* ── Data ─────────────────────────────────────────────────────── */

const practicePoints = [
    '99 Financial works with Canadian business owners and incorporated professionals on long-term, tax-efficient wealth planning.',
    'Our work focuses on situations where corporate assets, tax considerations, liquidity planning, and long-term outcomes intersect. We provide strategy-led advice, often involving corporate-owned insurance structures, and work alongside clients\' existing accounting and legal advisors.',
];

const commitmentValues = [
    { icon: 'fa-magnifying-glass', title: 'Clarity', subtitle: 'Over Complexity' },
    { icon: 'fa-cubes-stacked', title: 'Structure', subtitle: 'Over Tactics' },
    { icon: 'fa-timeline', title: 'Long-Term Outcomes', subtitle: 'Over Short-Term Optimization' },
];

const whoWeWorkWith = [
    'Incorporated business owners with retained earnings',
    'Professionals operating through corporations',
    'Clients exploring long-term tax efficiency, liquidity, or estate considerations',
    'Individuals who already work with accounting and legal advisors',
];

/* ── Page Component ───────────────────────────────────────────── */

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Hero Section — custom (has extra subtitle span, divider, and larger description text) */}
            <section className="hero-gradient relative h-[45vh] min-h-[400px] flex items-center text-white overflow-hidden">
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

            {/* Our Practice */}
            <SectionContainer className="py-24 relative bg-white" maxWidth="max-w-4xl">
                <div className="text-center">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-3 block">Our Practice</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-8">
                            Independent. Advisory. Strategy-Led.
                        </h2>
                        <ul className="text-lg text-slate-600 leading-relaxed text-left max-w-2xl mx-auto space-y-4">
                            {practicePoints.map((text, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-4 flex-shrink-0 mt-2.5"></span>
                                    <span>{text}</span>
                                </li>
                            ))}
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-brand-gold rounded-full mr-4 flex-shrink-0 mt-2.5"></span>
                                <span className="font-medium">We do not provide product-driven recommendations. Our role is to help clients make informed decisions within a broader, integrated planning framework.</span>
                            </li>
                        </ul>
                    </ScrollAnimation>
                </div>
            </SectionContainer>

            {/* Our Approach */}
            <SectionContainer className="py-24 bg-slate-50 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <ScrollAnimation className="fade-in-left order-2 md:order-1">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-brand-blue/5 flex items-center justify-center">
                                <Image
                                    src="/images/structure_illustration.png"
                                    alt="Strategic Planning Approach"
                                    width={500}
                                    height={400}
                                    className="object-contain p-8"
                                />
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation className="fade-in-right order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-6">Our Approach</h2>
                        <div className="w-16 h-1 bg-brand-gold mb-8"></div>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed font-bold text-brand-dark">
                            Our approach is strategy-led and planning-focused.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We begin by understanding each client&apos;s corporate structure, objectives, and existing advisory relationships. From there, we evaluate how tax efficiency, liquidity, and long-term outcomes can be integrated into a coherent, sustainable planning strategy.
                        </p>
                        <p className="text-slate-600 leading-relaxed italic border-l-4 border-brand-gold pl-4 bg-white p-4 rounded-r shadow-sm">
                            &quot;Where appropriate, insurance is used as a planning tool, not as a standalone solution.&quot;
                        </p>
                    </ScrollAnimation>
                </div>
            </SectionContainer>

            {/* Our Commitment */}
            <section className="py-24 relative overflow-hidden text-white">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/images/Hero-video.mp4"
                    >
                        <source src="/images/CTA.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Commitment</h2>
                        <p className="text-xl text-brand-light/80 max-w-3xl mx-auto leading-relaxed">
                            We are committed to providing clear, disciplined, and practical advice that supports long-term decision-making.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {commitmentValues.map((value, i) => (
                            <ScrollAnimation key={i} className="bg-white/10 p-8 rounded-xl border border-white/10 backdrop-blur-sm text-center hover:-translate-y-2 transition duration-300" delay={i * 100}>
                                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                                    <i className={`fa-solid ${value.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                                <p className="text-brand-light/60 uppercase text-xs tracking-widest mb-4">{value.subtitle}</p>
                            </ScrollAnimation>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xl text-slate-200 font-light">
                            We prioritize thoughtful analysis, transparent communication, and professional collaboration.
                        </p>
                    </div>
                </div>
            </section>

            {/* About the Founder */}
            <SectionContainer className="py-24 bg-white relative" maxWidth="max-w-6xl">
                <ScrollAnimation className="fade-in-up">
                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 shadow-xl flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-4 border-white group">
                                <Image
                                    src="/images/talking.jpeg"
                                    alt="Tom Ren - Founder"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">About the Founder</h2>
                            <h3 className="text-xl font-bold text-brand-gold mb-6">Tom Ren</h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    99 Financial Inc. was founded by Tom Ren, who has over 10 years of experience advising Canadian business owners and incorporated professionals on corporate insurance and tax-efficient wealth planning strategies.
                                </p>
                                <p>
                                    Fluent in English and Mandarin, Tom works closely with Canadian business owners and immigrant business families, helping them navigate complex planning decisions with clarity, precision, and integrity.
                                </p>
                                <p>
                                    His work frequently involves collaboration with accountants, lawyers, and other professional advisors to ensure strategies are well-integrated and appropriately implemented.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </SectionContainer>

            {/* Who We Typically Work With */}
            <SectionContainer className="py-24 bg-brand-light/30 border-t border-slate-200" maxWidth="max-w-4xl">
                <div className="text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-10">Who We Typically Work With</h2>
                        <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 mb-10 text-left">
                            <ul className="space-y-6">
                                {whoWeWorkWith.map((item, i) => (
                                    <li key={i} className="flex items-center text-lg text-slate-700">
                                        <span className="w-2 h-2 bg-brand-gold rounded-full mr-4 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
                            We do not provide legal or tax advice. All strategies are discussed and implemented in coordination with the client&apos;s professional advisors.
                        </p>
                    </ScrollAnimation>
                </div>
            </SectionContainer>
        </main>
    );
}
