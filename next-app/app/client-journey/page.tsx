"use client";

import Link from 'next/link';

export default function ClientJourney() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-28 bg-brand-blue overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2070&q=80" alt="Planning Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/95 to-brand-blue/80"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
                    <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6">The Process</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">The Client Journey</h1>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">A disciplined planning process for complex corporate decisions.</p>
                </div>
            </section>

            {/* Intro Philosophy */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <p className="text-2xl font-serif text-brand-blue italic leading-relaxed mb-8">
                        "For incorporated business owners, meaningful financial decisions are rarely isolated. Tax efficiency, retained earnings, liquidity needs, and long-term estate outcomes are deeply interconnected."
                    </p>
                    <div className="w-16 h-1 bg-brand-gold mx-auto mb-8"></div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Our client journey is designed to bring clarity and structure to that complexity. It is not a sales process. It is a planning framework that helps business owners determine whether advanced strategies are appropriate, how they should be structured, and when they should be implemented.
                    </p>
                </div>
            </section>

            {/* The Journey Steps with Timeline */}
            <div className="relative max-w-6xl mx-auto px-4 pb-24">
                {/* Central Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/20 via-brand-gold/40 to-brand-gold/20 -translate-x-1/2"></div>

                {/* Step 1: Context & Discovery */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-stretch">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-lg z-10"></div>

                    {/* Left Column - Title + Illustration */}
                    <div className="flex flex-col">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">Step 01</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Context & Discovery</h2>
                        <p className="text-slate-500 text-lg mb-6">Understanding the full corporate and personal landscape.</p>
                        {/* Illustration */}
                        <div className="mt-auto">
                            <img
                                src="/images/discovery_illustration.png"
                                alt="Context & Discovery illustration"
                                className="w-full max-w-xs rounded-xl shadow-md"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content Card */}
                    <div className="bg-brand-light p-8 rounded-xl shadow-sm border border-slate-100 h-fit">
                        <p className="mb-6 text-slate-700">Before discussing strategies or tools, we focus on understanding how your corporation and personal planning currently function.</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                                <span className="text-slate-600">Corporate structure and retained earnings</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                                <span className="text-slate-600">Passive investment exposure and tax profile</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                                <span className="text-slate-600">Shareholder objectives and time horizon</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                                <span className="text-slate-600">Existing insurance, investments, and planning arrangements</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 2: Strategic Fit Assessment */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-stretch">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-lg z-10"></div>

                    {/* Left Column - Content Card */}
                    <div className="bg-brand-blue p-8 rounded-xl shadow-lg text-white h-fit md:order-1">
                        <h3 className="font-serif text-xl text-brand-gold mb-4 italic">"Does this type of planning make sense in your specific situation?"</h3>
                        <p className="text-white/80 mb-6 leading-relaxed">Not every business owner benefits from corporate insurance strategies. We evaluate suitability clearly to prevent unnecessary complexity.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                                <i className="fa-solid fa-scale-balanced text-brand-gold text-lg mb-2 block"></i>
                                <span className="text-white text-sm">Corporate-owned insurance suitability</span>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                                <i className="fa-solid fa-file-invoice-dollar text-brand-gold text-lg mb-2 block"></i>
                                <span className="text-white text-sm">CDA planning relevance</span>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                                <i className="fa-solid fa-arrows-spin text-brand-gold text-lg mb-2 block"></i>
                                <span className="text-white text-sm">Liquidity needs vs long-term objectives</span>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                                <i className="fa-solid fa-shield-halved text-brand-gold text-lg mb-2 block"></i>
                                <span className="text-white text-sm">Governance & flexibility</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Title + Illustration */}
                    <div className="flex flex-col md:order-2">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">Step 02</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Strategic Fit Assessment</h2>
                        <p className="text-slate-500 text-lg mb-6">Determining whether advanced planning is appropriate.</p>
                        {/* Illustration */}
                        <div className="mt-auto">
                            <img
                                src="/images/assessment_illustration.png"
                                alt="Strategic Fit Assessment illustration"
                                className="w-full max-w-xs rounded-xl shadow-md ml-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Step 3: Structure Design */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-stretch">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-lg z-10"></div>

                    {/* Left Column - Title + Illustration */}
                    <div className="flex flex-col">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">Step 03</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Structure Design</h2>
                        <p className="text-slate-500 text-lg mb-6">Designing the framework before selecting products.</p>
                        {/* Illustration */}
                        <div className="mt-auto">
                            <img
                                src="/images/structure_illustration.png"
                                alt="Structure Design illustration"
                                className="w-full max-w-xs rounded-xl shadow-md"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content Card */}
                    <div className="bg-amber-50 border border-brand-gold/20 p-8 rounded-xl h-fit">
                        <p className="text-slate-700 mb-6">Only after the structure is clearly defined do we move toward implementation decisions. Considerations include:</p>
                        <div className="space-y-3">
                            <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm border-l-4 border-brand-gold">
                                <span className="font-semibold text-brand-blue">Insurance Functionality</span>
                                <span className="text-sm text-slate-500 mt-1">Balance Sheet Impact</span>
                            </div>
                            <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm border-l-4 border-brand-gold">
                                <span className="font-semibold text-brand-blue">CDA Tracking</span>
                                <span className="text-sm text-slate-500 mt-1">Future Access</span>
                            </div>
                            <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm border-l-4 border-brand-gold">
                                <span className="font-semibold text-brand-blue">Liquidity Structure</span>
                                <span className="text-sm text-slate-500 mt-1">Long-term Safety</span>
                            </div>
                            <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm border-l-4 border-brand-gold">
                                <span className="font-semibold text-brand-blue">Planning Alignment</span>
                                <span className="text-sm text-slate-500 mt-1">Succession / Estate</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4: Implementation & Coordination */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-stretch">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-lg z-10"></div>

                    {/* Left Column - Content Card */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 h-fit md:order-1">
                        <p className="text-slate-600 mb-8">We ensure planning intent is executed accurately across all parties to reduce friction and unintended consequences.</p>
                        <div className="flex items-center justify-around text-center gap-2">
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-brand-blue text-xl"><i className="fa-solid fa-calculator"></i></div>
                                <h4 className="font-bold text-sm text-slate-700">Accountants</h4>
                            </div>
                            <div className="text-slate-300 text-xl"><i className="fa-solid fa-arrows-left-right"></i></div>
                            <div className="flex-1">
                                <div className="w-16 h-16 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg text-xl"><i className="fa-solid fa-handshake"></i></div>
                                <h4 className="font-bold text-sm text-brand-gold">Coordination</h4>
                            </div>
                            <div className="text-slate-300 text-xl"><i className="fa-solid fa-arrows-left-right"></i></div>
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-brand-blue text-xl"><i className="fa-solid fa-gavel"></i></div>
                                <h4 className="font-bold text-sm text-slate-700">Lawyers</h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Title */}
                    <div className="flex flex-col md:order-2">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">Step 04</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Implementation & Coordination</h2>
                        <p className="text-slate-500 text-lg">Working alongside your professional advisors.</p>
                    </div>
                </div>

                {/* Step 5: Ongoing Review & Governance */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-lg z-10"></div>

                    {/* Left Column - Title */}
                    <div className="flex flex-col">
                        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">Step 05</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Ongoing Review & Governance</h2>
                        <p className="text-slate-500 text-lg">Planning as a long-term process, not a one-time event.</p>
                    </div>

                    {/* Right Column - Content Card */}
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 h-fit">
                        <p className="text-slate-600 mb-6">Tax rules change, businesses grow, and priorities shift. We support ongoing review by:</p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center text-brand-gold font-bold">1</div>
                                <span className="text-slate-700">Monitoring planning assumptions</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center text-brand-gold font-bold">2</div>
                                <span className="text-slate-700">Reviewing structural relevance</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center text-brand-gold font-bold">3</div>
                                <span className="text-slate-700">Ensuring long-term alignment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Philosophy & CTA */}
            <section className="py-24 bg-brand-blue text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <i className="fa-solid fa-quote-left text-brand-gold text-4xl mb-6 opacity-50"></i>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">A Planning Philosophy Built on Discipline & Clarity</h2>
                    <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto">
                        We prioritize understanding over action, structure over products, and long-term outcomes over short-term decisions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="inline-block bg-brand-gold text-white font-semibold px-8 py-4 rounded shadow-lg hover:bg-brand-goldHover transition duration-300 transform hover:-translate-y-1">
                            Book a Private Strategy Review
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
