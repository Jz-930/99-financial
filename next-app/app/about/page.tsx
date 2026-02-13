

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../../components/HeroSection';

export const metadata = {
    title: 'About 99 Financial | Capital Structuring for Business Owners',
    description: 'Focused on aligning corporate wealth, liquidity, and long-term planning objectives for Canadian business owners.',
};

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Standard Hero Section */}
            <HeroSection
                title="Capital Structuring for Business Owners"
                subtitle="Focused on aligning corporate wealth, liquidity, and long-term planning objectives"
            />

            <div className="max-w-3xl mx-auto px-6 py-24 space-y-16">

                {/* About 99 Financial */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">About 99 Financial</h2>
                    <h3 className="text-xl font-bold text-brand-gold mb-4">A Capital Structuring Perspective</h3>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            99 Financial was built on a simple realization: as business owners and high-net-worth families accumulate significant wealth inside corporate structures, planning becomes less about individual financial products and more about structure.
                        </p>
                        <p className="mb-6">
                            Corporate balance sheets, tax exposure, liquidity needs, and family objectives are interconnected. Decisions made in one area influence outcomes in another. Effective planning therefore requires alignment — not isolated transactions.
                        </p>
                        <p>
                            Our advisory perspective centers on capital structuring: ensuring corporate assets, family priorities, and long-term planning frameworks function cohesively over time.
                        </p>
                    </div>
                </section>

                {/* Founder’s Perspective with Image */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Founder’s Perspective</h2>

                    <div className="mb-8 relative w-full aspect-[3/2] md:aspect-[2/1] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/talking.jpeg"
                            alt="Tom Ren - Founder"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            The firm’s approach evolved through working with incorporated professionals, entrepreneurs, and business owners whose companies were financially successful but structurally uncoordinated from a long-term planning standpoint.
                        </p>
                        <p className="mb-6">
                            A consistent pattern emerged: wealth accumulated efficiently inside corporations, yet planning strategies often did not reflect the broader corporate balance sheet, future tax exposure, or intergenerational objectives.
                        </p>
                        <p className="mb-6">
                            This shifted the focus from product implementation to structural planning. Rather than asking which financial tool to use, the more relevant question became:
                        </p>
                        <p className="font-bold text-brand-blue mb-6">
                            How should corporate and family capital be structured to support long-term outcomes?
                        </p>
                        <p>
                            This structural lens continues to guide our advisory work.
                        </p>
                    </div>
                </section>

                {/* Our Professional Approach */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Our Professional Approach</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            Our work emphasizes structure, integration, and long-term alignment.
                        </p>
                        <p className="mb-4 font-bold text-brand-blue">We focus on:</p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                            <li>Structural analysis of corporate balance sheets and tax exposure</li>
                            <li>Liquidity planning that avoids unnecessary disruption to operations</li>
                            <li>Alignment between corporate assets and family wealth objectives</li>
                            <li>Planning frameworks designed to remain effective as circumstances evolve</li>
                            <li>Predictable estate and succession outcomes</li>
                        </ul>
                        <p>
                            Each engagement is shaped around the client’s specific corporate and family context. The objective is not to implement a single strategy, but to design planning structures that remain relevant over time.
                        </p>
                    </div>
                </section>

                {/* A Collaborative Advisory Model */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">A Collaborative Advisory Model</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            Planning for business owners and high-net-worth families rarely exists in isolation. Effective structures must align with existing professional frameworks.
                        </p>
                        <p className="mb-4 font-bold text-brand-blue">Our advisory work is developed in coordination with:</p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                            <li>Accountants</li>
                            <li>Tax advisors</li>
                            <li>Legal professionals</li>
                        </ul>
                        <p>
                            This ensures that planning decisions integrate with corporate arrangements, tax planning considerations, and legal structures already in place.
                        </p>
                    </div>
                </section>

                {/* Who We Work With */}
                <section className="py-8 bg-slate-50 -mx-6 px-6 rounded-xl md:bg-transparent md:p-0 md:mx-0">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">Who We Work With</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-4 font-bold text-brand-blue">Our advisory perspective is most relevant for:</p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-brand-gold mb-6">
                            <li>Incorporated business owners</li>
                            <li>Professionals with corporate income structures</li>
                            <li>Entrepreneurs planning for succession or transition</li>
                            <li>High-net-worth families with retained corporate wealth</li>
                        </ul>
                        <p className="italic text-slate-600">
                            These clients often face planning complexity that extends beyond traditional financial advice and benefits from a structural approach.
                        </p>
                    </div>
                </section>

                {/* A Long-Term Planning Philosophy */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-6">A Long-Term Planning Philosophy</h2>
                    <div className="prose prose-lg text-slate-700 leading-relaxed text-lg">
                        <p className="mb-6">
                            We believe effective planning is structure-driven rather than event-driven. Strong planning frameworks are built to support evolving business conditions, family dynamics, and tax environments over time.
                        </p>
                        <p>
                            Our role is to provide clarity, structure, and long-term perspective as clients navigate complex corporate and family planning decisions.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-100 p-8 rounded-lg border-l-4 border-brand-gold mt-12">
                    <h2 className="text-xl font-serif font-bold text-brand-blue mb-4">
                        Book a Private Strategy Review
                    </h2>
                    <p className="text-lg text-slate-700 mb-6">
                        A confidential discussion to explore how your corporate capital structure and family objectives align with long-term planning frameworks.
                    </p>
                    <div>
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded shadow-md hover:bg-brand-goldHover transition duration-300">
                            Book a Private Strategy Review
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}
