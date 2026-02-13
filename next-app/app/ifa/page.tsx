"use client";

import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';

export default function IFAPage() {
    return (
        <main className="bg-white">
            <HeroSection
                title="Immediate Financing Arrangement (IFA)"
                subtitle="Balancing long-term structure with lifetime liquidity"
            />

            <div className="max-w-3xl mx-auto px-6 py-24 space-y-16">

                {/* Opening — Strategic Context */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Strategic Context</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            Long-term planning often emphasizes structure, discipline, and tax efficiency.<br />
                            At the same time, business owners may require access to capital during their lifetime — for opportunities, investments, or personal planning — without dismantling carefully designed strategies.
                        </p>
                        <p className="mb-6">
                            An Immediate Financing Arrangement (IFA) is an advanced planning strategy designed to address this tension.<br />
                            It is not an insurance product, and it is not suitable for most situations.
                        </p>
                    </div>
                </section>

                {/* The Planning Problem It Addresses */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">The Planning Problem It Addresses</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            Business owners often face a structural trade-off:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                            <li>Preserve long-term tax-efficient planning</li>
                            <li>Or access liquidity when opportunities arise</li>
                        </ul>
                        <p>
                            IFA is considered when liquidity is needed without compromising long-term planning objectives — and when discipline and structure can be maintained.
                        </p>
                    </div>
                </section>

                {/* Where This Strategy Fits (and Where It Doesn’t) */}
                <section className="py-8 bg-slate-50 -mx-6 px-6 rounded-xl md:bg-transparent md:p-0 md:mx-0">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-8">Where This Strategy Fits (and Where It Doesn’t)</h2>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-brand-blue mb-4">IFA may be appropriate when:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg marker:text-brand-gold">
                            <li>Long-term corporate insurance planning is already suitable</li>
                            <li>Liquidity needs are strategic rather than consumption-driven</li>
                            <li>The owner has sufficient income stability and planning horizon</li>
                            <li>Professional coordination is in place</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-brand-blue mb-4">It is generally not appropriate when:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg marker:text-slate-400">
                            <li>Liquidity needs are short-term or uncertain</li>
                            <li>Planning structures are not yet established</li>
                            <li>Risk tolerance is low</li>
                            <li>Flexibility is prioritized over long-term discipline</li>
                        </ul>
                    </div>

                    <p className="text-slate-600 italic font-medium border-l-4 border-brand-gold pl-4 py-1">
                        This strategy requires careful evaluation and conservative assumptions.
                    </p>
                </section>

                {/* How It Integrates With Broader Planning */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">How It Integrates With Broader Planning</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            An IFA depends on coordination among:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                            <li>Corporate-owned insurance structures</li>
                            <li>Lending institutions</li>
                            <li>Accountants and legal advisors</li>
                            <li>Long-term corporate and estate planning goals</li>
                        </ul>
                        <p>
                            Its success relies on disciplined execution and ongoing oversight.
                        </p>
                    </div>
                </section>

                {/* Common Misunderstandings */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Common Misunderstandings</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <ul className="list-disc pl-5 space-y-3 marker:text-red-400 mb-6">
                            <li>Viewing IFA primarily as a borrowing strategy</li>
                            <li>Underestimating the importance of long-term governance</li>
                            <li>Assuming accessibility without trade-offs</li>
                            <li>Believing IFA can “fix” weak underlying planning</li>
                        </ul>
                        <p className="italic text-slate-600">
                            IFA does not replace planning — it builds upon it.
                        </p>
                    </div>
                </section>

                {/* Relationship to the Client Journey */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Relationship to the Client Journey</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p>
                            IFA is assessed only after foundational planning is in place.<br />
                            It is evaluated within the Client Journey as an advanced strategy, not as an entry point.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-100 p-8 rounded-lg border-l-4 border-brand-gold mt-12">
                    <p className="text-xl font-serif font-bold text-brand-blue mb-4">
                        Determine whether advanced liquidity planning is appropriate for your situation.
                    </p>
                    <div className="mt-6">
                        <Link href="/contact" className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded shadow-md hover:bg-brand-goldHover transition duration-300">
                            Request a private strategy review
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}
