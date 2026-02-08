
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';
import HeroSection from '../../components/HeroSection';
import CTASection from '../../components/CTASection';
import SectionContainer from '../../components/SectionContainer';

export const metadata = {
    title: 'Corporate-Owned Life Insurance | 99 Financial Inc.',
    description: 'Learn how corporate-owned participating whole life insurance repositions retained earnings into a long-term, tax-efficient estate planning asset.',
};
import IconListItem from '../../components/IconListItem';
import ComparisonGrid from '../../components/ComparisonGrid';

export default function CorporateParPage() {
    return (
        <main className="bg-white">
            <HeroSection
                title="Corporate-Owned Life Insurance"
                subtitle="Insurance as a long-term corporate planning tool"
            />

            {/* Opening — Strategic Context */}
            <SectionContainer className="py-20 lg:py-24" maxWidth="max-w-4xl">
                <ScrollAnimation className="fade-in-up">
                    <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Strategic Context</h2>
                    <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                        <p>
                            Incorporated business owners often accumulate significant assets inside their corporations over time.
                        </p>
                        <p>
                            As retained earnings grow, so do long-term tax exposure, estate liquidity risk, and structural inefficiencies that are not always visible in the early years.
                        </p>
                        <p>
                            Within the right planning framework, corporate-owned life insurance can serve as a long-term tool to support tax efficiency, balance-sheet planning, and future estate outcomes.
                        </p>
                        <p className="font-medium text-brand-blue border-l-4 border-brand-gold pl-4">
                            Its value lies not in the insurance contract itself, but in how it is structured and integrated within broader corporate planning.
                        </p>
                    </div>
                </ScrollAnimation>
            </SectionContainer>

            {/* The Planning Problem It Addresses */}
            <section className="py-20 bg-brand-light border-y border-slate-200 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">The Planning Problem It Addresses</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Many business owners face a common structural challenge:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <IconListItem icon="fa-solid fa-circle-exclamation">Corporate assets grow efficiently during their working years</IconListItem>
                                <IconListItem icon="fa-solid fa-circle-exclamation">But converting that value into usable, tax-efficient personal wealth later can be difficult</IconListItem>
                                <IconListItem icon="fa-solid fa-circle-exclamation">At death, corporate wealth may face layers of taxation and liquidity pressure</IconListItem>
                            </ul>
                            <p className="text-slate-600 font-medium">
                                Corporate-owned life insurance is often considered when business owners begin addressing these long-term structural issues — not short-term investment performance.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-right relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/corporate-par-insurance.png"
                                alt="Planning Problem Visualization"
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Where This Strategy Fits (and Where It Doesn't) */}
            <SectionContainer className="py-20 lg:py-24">
                <ScrollAnimation className="fade-in-up">
                    <h2 className="text-3xl font-serif font-bold text-brand-blue mb-12 text-center">Where This Strategy Fits (and Where It Doesn't)</h2>
                </ScrollAnimation>

                <ComparisonGrid
                    positiveTitle="This type of planning is generally considered when:"
                    positiveItems={[
                        "A corporation has meaningful retained earnings not required for operations",
                        "The owner has a long-term planning horizon",
                        "Tax efficiency and estate outcomes are strategic priorities",
                    ]}
                    negativeTitle="It is often not appropriate when:"
                    negativeItems={[
                        "Corporate cash flow is uncertain",
                        "Assets are required for near-term business use",
                        "The objective is short-term return optimization rather than long-term structure",
                    ]}
                    footnote="Determining suitability is a critical step — and one that must occur before any product discussion."
                />
            </SectionContainer>

            {/* How It Integrates With Broader Planning */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/logo_origin.webp')] bg-no-repeat bg-center opacity-5 pointer-events-none mix-blend-soft-light transform scale-150"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-white mb-8">How It Integrates With Broader Planning</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Corporate-owned life insurance rarely stands alone. When used appropriately, it may interact with:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">
                        {[
                            { icon: "fa-calculator", label: "Long-term corporate tax planning" },
                            { icon: "fa-coins", label: "Capital Dividend Account (CDA) creation" },
                            { icon: "fa-users", label: "Estate and succession structures" },
                            { icon: "fa-handshake", label: "Shareholder planning and governance" },
                        ].map((item, i) => (
                            <ScrollAnimation key={i} className="bg-white/10 p-6 rounded-lg border border-white/10 flex items-center" delay={i * 100}>
                                <i className={`fa-solid ${item.icon} text-brand-gold text-2xl mr-4`}></i>
                                <span className="text-lg font-bold">{item.label}</span>
                            </ScrollAnimation>
                        ))}
                    </div>

                    <ScrollAnimation className="fade-in-up">
                        <p className="text-lg text-slate-400">
                            Its effectiveness depends on coordination across accounting, legal, and financial planning disciplines.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Common Misunderstandings */}
            <SectionContainer className="py-20 bg-brand-light" maxWidth="max-w-4xl">
                <ScrollAnimation className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 fade-in-up">
                    <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8 border-b border-slate-200 pb-4">Common Misunderstandings</h2>
                    <ul className="space-y-4 mb-8">
                        {[
                            'Viewing insurance primarily as an \u201Cinvestment\u201D',
                            "Focusing on illustrations rather than structure",
                            "Assuming all whole life policies serve the same planning role",
                            "Believing insurance decisions can be reversed easily later"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start text-slate-700">
                                <i className="fa-solid fa-circle-xmark text-red-400 mt-1.5 mr-4"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-slate-600 font-medium italic">
                        These misunderstandings often lead to misaligned expectations and suboptimal outcomes.
                    </p>
                </ScrollAnimation>
            </SectionContainer>

            {/* CTA */}
            <CTASection
                heading="How This Fits Within Corporate Planning"
                description="Explore whether corporate-owned life insurance fits within your long-term planning framework."
                extraContent={
                    <>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Corporate-owned life insurance is assessed as part of a broader corporate planning framework — never as an isolated decision.
                        </p>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                            The priority is determining whether this structure supports long-term objectives, rather than focusing on any single product.
                        </p>
                    </>
                }
            />
        </main>
    );
}
