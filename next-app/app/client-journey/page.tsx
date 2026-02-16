"use client";

import Link from 'next/link';
import ScrollAnimation from '../../components/ScrollAnimation';
import HeroSection from '../../components/HeroSection';

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

export default function ClientJourney() {
    return (
        <>
            <HeroSection
                title="The Client Journey"
                subtitle="A disciplined planning process for complex corporate decisions"
            />

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="prose prose-lg text-slate-700 leading-relaxed space-y-6">
                        <p>
                            For incorporated business owners, meaningful financial decisions are rarely isolated.
                            Tax efficiency, retained earnings, liquidity needs, and long-term estate outcomes are deeply interconnected — and the consequences of early decisions often surface many years later.
                        </p>
                        <p>
                            Our client journey is designed to bring clarity and structure to that complexity.
                            It is not a sales process. It is a planning framework that helps business owners determine whether advanced strategies are appropriate, how they should be structured, and when they should be implemented.
                        </p>
                    </div>
                </div>
            </section>

            {/* Steps Section - Broken down for alternating backgrounds */}
            {/* Steps Section - Broken down for alternating backgrounds */}


            {/* Step 01 - Context & Discovery (White) */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex flex-col items-start text-left">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Step 01</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Context & Discovery</h2>
                        <p className="text-lg text-slate-500 mb-6 font-medium">Understanding the full corporate and personal landscape</p>
                        <div className="prose prose-lg text-slate-700 leading-relaxed">
                            <p>
                                Every engagement begins with context.<br />
                                Before discussing strategies or tools, we focus on understanding how your corporation and personal planning currently function.
                            </p>
                            <p>This typically includes:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                                <li>Corporate structure and retained earnings</li>
                                <li>Passive investment exposure and tax profile</li>
                                <li>Shareholder objectives and time horizon</li>
                                <li>Existing insurance, investments, and planning arrangements</li>
                                <li>Coordination with accountants and legal advisors</li>
                            </ul>
                            <p>
                                The goal at this stage is not to recommend solutions, but to establish a clear, shared understanding of the current landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 02 - Strategic Fit Assessment (Gray) */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex flex-col items-start text-left">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Step 02</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Strategic Fit Assessment</h2>
                        <p className="text-lg text-slate-500 mb-6 font-medium">Determining whether advanced planning is appropriate</p>
                        <div className="prose prose-lg text-slate-700 leading-relaxed">
                            <p>
                                Not every business owner benefits from corporate insurance strategies, CDA planning, or financing structures.
                            </p>
                            <p>
                                This stage is designed to answer a critical question:<br />
                                Does this type of planning make sense in your specific situation?
                            </p>
                            <p>We evaluate:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                                <li>Suitability of corporate-owned insurance structures</li>
                                <li>Potential relevance of CDA planning over time</li>
                                <li>Liquidity needs versus long-term objectives</li>
                                <li>Risk tolerance, governance, and flexibility requirements</li>
                            </ul>
                            <p>
                                If a strategy does not fit, we say so clearly.<br />
                                Clarity at this stage prevents unnecessary complexity later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 03 - Structure Design (White) */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex flex-col items-start text-left">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Step 03</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Structure Design</h2>
                        <p className="text-lg text-slate-500 mb-6 font-medium">Designing the framework before selecting tools</p>
                        <div className="prose prose-lg text-slate-700 leading-relaxed">
                            <p>
                                When planning is appropriate, the focus shifts to structure.<br />
                                This stage emphasizes how different elements work together, rather than individual products.
                            </p>
                            <p>Considerations may include:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                                <li>How insurance functions within the corporate balance sheet</li>
                                <li>How CDA may be created, tracked, and used in the future</li>
                                <li>How liquidity needs can be addressed without undermining long-term outcomes</li>
                                <li>Alignment with succession, estate, and shareholder planning</li>
                            </ul>
                            <p>
                                Only after the structure is clearly defined do we move toward implementation decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 04 - Implementation & Coordination (Gray) */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex flex-col items-start text-left">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Step 04</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Implementation & Coordination</h2>
                        <p className="text-lg text-slate-500 mb-6 font-medium">Working alongside your professional advisors</p>
                        <div className="prose prose-lg text-slate-700 leading-relaxed">
                            <p>
                                Advanced planning rarely exists in isolation.<br />
                                Implementation typically involves coordination with:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                                <li>Accountants (tax reporting, CDA tracking, integration with T2 filings)</li>
                                <li>Lawyers (corporate structure, estate and succession considerations)</li>
                                <li>Lenders, where financing strategies are involved</li>
                            </ul>
                            <p>
                                Our role is to ensure that the planning intent is executed accurately and consistently across all parties — reducing friction, misalignment, and unintended consequences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 05 - Ongoing Review & Governance (White) */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex flex-col items-start text-left">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Step 05</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Ongoing Review & Governance</h2>
                        <p className="text-lg text-slate-500 mb-6 font-medium">Planning as a long-term process, not a one-time event</p>
                        <div className="prose prose-lg text-slate-700 leading-relaxed">
                            <p>
                                Corporate planning evolves.<br />
                                Tax rules change, businesses grow, personal priorities shift, and liquidity needs emerge over time.
                            </p>
                            <p>We support ongoing review by:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                                <li>Monitoring planning assumptions</li>
                                <li>Reviewing structural relevance as circumstances change</li>
                                <li>Ensuring strategies remain aligned with long-term objectives</li>
                                <li>Maintaining coordination with your broader advisory team</li>
                            </ul>
                            <p>
                                This governance-focused approach helps preserve the integrity of the original planning framework over the long term.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Solutions ─────────────────────────────────── */}
            <section className="py-16 md:py-24 relative overflow-hidden bg-slate-900">
                {/* Background similar to homepage but static or simplified if video not desired, using homepage video for consistency as requested */}
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
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-brand-blue text-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">A Planning Philosophy Built on Discipline and Clarity</h2>
                    <div className="prose prose-lg text-slate-300 leading-relaxed mb-12">
                        <p>
                            Our client journey is intentionally deliberate.<br />
                            It prioritizes understanding over action, structure over products, and long-term outcomes over short-term decisions.
                        </p>
                        <p>
                            This approach is best suited for business owners who value thoughtful planning, professional coordination, and clarity around complex financial decisions.
                        </p>
                    </div>

                    <div>
                        <Link href="/contact" className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded shadow-lg hover:bg-brand-goldHover transition duration-300 transform hover:-translate-y-1">
                            Book a Private Strategy Review
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
