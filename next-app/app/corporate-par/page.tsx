"use client";

import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';

export default function CorporateParPage() {
    return (
        <main className="bg-white">
            <HeroSection
                title="Corporate-Owned Life Insurance"
                subtitle="Insurance as a long-term corporate planning tool"
            />

            <div className="max-w-3xl mx-auto px-6 py-24">

                <div className="space-y-16">
                    {/* Opening — Strategic Context */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Strategic Context</h2>
                        <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                            <p className="mb-6">
                                Incorporated business owners often accumulate significant assets inside their corporations over time.<br />
                                As retained earnings grow, so do long-term tax exposure, estate liquidity risk, and structural inefficiencies that are not always visible in the early years.
                            </p>
                            <p className="mb-6">
                                Within the right planning framework, corporate-owned life insurance can serve as a long-term tool to support tax efficiency, balance-sheet planning, and future estate outcomes.<br />
                                Its value lies not in the insurance contract itself, but in how it is structured and integrated within broader corporate planning.
                            </p>
                        </div>
                    </section>

                    {/* The Planning Problem It Addresses */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">The Planning Problem It Addresses</h2>
                        <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                            <p className="mb-6">
                                Many business owners face a common structural challenge:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                                <li>Corporate assets grow efficiently during their working years</li>
                                <li>But converting that value into usable, tax-efficient personal wealth later can be difficult</li>
                                <li>At death, corporate wealth may face layers of taxation and liquidity pressure</li>
                            </ul>
                            <p>
                                Corporate-owned life insurance is often considered when business owners begin addressing these long-term structural issues — not short-term investment performance.
                            </p>
                        </div>
                    </section>

                    {/* Where This Strategy Fits (and Where It Doesn’t) */}
                    <section className="py-8 bg-slate-50 -mx-6 px-6 rounded-xl md:bg-transparent md:p-0 md:mx-0">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-8">Where This Strategy Fits (and Where It Doesn’t)</h2>

                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-brand-blue mb-4">This type of planning is generally considered when:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg marker:text-brand-gold">
                                <li>A corporation has meaningful retained earnings not required for operations</li>
                                <li>The owner has a long-term planning horizon</li>
                                <li>Tax efficiency and estate outcomes are strategic priorities</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-brand-blue mb-4">It is often not appropriate when:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg marker:text-slate-400">
                                <li>Corporate cash flow is uncertain</li>
                                <li>Assets are required for near-term business use</li>
                                <li>The objective is short-term return optimization rather than long-term structure</li>
                            </ul>
                        </div>

                        <p className="text-slate-600 italic font-medium border-l-4 border-brand-gold pl-4 py-1">
                            Determining suitability is a critical step — and one that must occur before any product discussion.
                        </p>
                    </section>

                    {/* How It Integrates With Broader Planning */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">How It Integrates With Broader Planning</h2>
                        <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                            <p className="mb-6">
                                Corporate-owned life insurance rarely stands alone.<br />
                                When used appropriately, it may interact with:
                            </p>
                            <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                                <li>Long-term corporate tax planning</li>
                                <li>Capital Dividend Account (CDA) creation</li>
                                <li>Estate and succession structures</li>
                                <li>Shareholder planning and governance</li>
                            </ul>
                            <p>
                                Its effectiveness depends on coordination across accounting, legal, and financial planning disciplines.
                            </p>
                        </div>
                    </section>

                    {/* Common Misunderstandings */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Common Misunderstandings</h2>
                        <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                            <ul className="list-disc pl-5 space-y-3 marker:text-red-400 mb-6">
                                <li>Viewing insurance primarily as an “investment”</li>
                                <li>Focusing on illustrations rather than structure</li>
                                <li>Assuming all whole life policies serve the same planning role</li>
                                <li>Believing insurance decisions can be reversed easily later</li>
                            </ul>
                            <p className="italic text-slate-600">
                                These misunderstandings often lead to misaligned expectations and suboptimal outcomes.
                            </p>
                        </div>
                    </section>

                    {/* Relationship to the Client Journey */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Relationship to the Client Journey</h2>
                        <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                            <p>
                                Corporate-owned life insurance is evaluated within our broader Client Journey — not in isolation.<br />
                                The focus is on determining whether this tool supports the overall planning framework, not on selling a specific solution.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-slate-100 p-8 rounded-lg border-l-4 border-brand-gold mt-12">
                        <p className="text-xl font-serif font-bold text-brand-blue mb-4">
                            Explore whether corporate-owned life insurance fits within your long-term planning framework.
                        </p>
                        <div className="mt-6">
                            <Link href="/contact" className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded shadow-md hover:bg-brand-goldHover transition duration-300">
                                Request a private strategy review
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
