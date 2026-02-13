"use client";

import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';

export default function CDAPage() {
    return (
        <main className="bg-white">
            <HeroSection
                title="Capital Dividend Account (CDA)"
                subtitle="Understanding the mechanics behind tax-free corporate wealth transfer"
            />

            <div className="max-w-3xl mx-auto px-6 py-24 space-y-16">

                {/* Opening — Strategic Context */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Strategic Context</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            The Capital Dividend Account (CDA) is one of the most powerful — and misunderstood — elements of corporate tax planning in Canada.<br />
                            It is not a financial product, but a tax mechanism defined by legislation and administered through corporate tax reporting.
                        </p>
                        <p>
                            For many business owners, CDA becomes relevant only late in the planning process, often during an exit or at death.<br />
                            By then, structural opportunities may already be limited.
                        </p>
                    </div>
                </section>

                {/* The Planning Problem It Addresses */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">The Planning Problem It Addresses</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            A significant portion of private wealth in Canada is held inside corporations.<br />
                            While this structure supports tax-efficient growth, it also creates a long-term challenge:
                        </p>
                        <p className="font-bold text-brand-blue mb-6">
                            How can corporate wealth be transferred to shareholders in a tax-efficient manner?
                        </p>
                        <p>
                            CDA provides a pathway for tax-free capital dividends — but only when planning is done correctly and early enough.
                        </p>
                    </div>
                </section>

                {/* Where This Strategy Fits (and Where It Doesn’t) */}
                <section className="py-8 bg-slate-50 -mx-6 px-6 rounded-xl md:bg-transparent md:p-0 md:mx-0">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-8">Where This Strategy Fits (and Where It Doesn’t)</h2>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-brand-blue mb-4">CDA planning is typically relevant for:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg marker:text-brand-gold">
                            <li>Corporations accumulating retained earnings over time</li>
                            <li>Owners with long-term estate or succession considerations</li>
                            <li>Situations where insurance or capital transactions may create CDA credits</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-brand-blue mb-4">It is less relevant when:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-lg marker:text-slate-400">
                            <li>Corporate value is minimal</li>
                            <li>Planning horizons are very short</li>
                            <li>There is no intention to extract corporate value beyond regular income</li>
                        </ul>
                    </div>

                    <p className="text-slate-600 italic font-medium border-l-4 border-brand-gold pl-4 py-1">
                        Understanding relevance early allows business owners to plan intentionally rather than reactively.
                    </p>
                </section>

                {/* How It Integrates With Broader Planning */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">How It Integrates With Broader Planning</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            CDA does not exist on its own.<br />
                            It is created, tracked, and accessed through coordinated planning involving:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                            <li>Corporate-owned life insurance</li>
                            <li>Capital transactions</li>
                            <li>Estate and shareholder planning</li>
                            <li>Accurate tax reporting and compliance</li>
                        </ul>
                        <p className="font-medium text-slate-800">
                            Importantly, CDA is tracked, not funded — making structure and timing essential.
                        </p>
                    </div>
                </section>

                {/* Common Misunderstandings */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Common Misunderstandings</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <ul className="list-disc pl-5 space-y-3 marker:text-red-400 mb-6">
                            <li>Assuming CDA is a “separate account” with deposits</li>
                            <li>Believing CDA planning begins only at death</li>
                            <li>Overlooking the erosion of insurance ACB over time</li>
                            <li>Treating CDA as an afterthought rather than a planning objective</li>
                        </ul>
                        <p className="italic text-slate-600">
                            These misconceptions often result in missed opportunities or planning done too late.
                        </p>
                    </div>
                </section>

                {/* Relationship to the Client Journey */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Relationship to the Client Journey</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p>
                            CDA planning is evaluated within the context of the broader corporate structure and long-term objectives.<br />
                            It is not a standalone decision, but a component of disciplined corporate planning.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-100 p-8 rounded-lg border-l-4 border-brand-gold mt-12">
                    <p className="text-xl font-serif font-bold text-brand-blue mb-4">
                        Understand whether CDA planning is relevant to your corporate structure.
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
