
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function SolutionsPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Our Solutions
                        </h1>
                        <p className="text-2xl text-brand-gold font-medium mb-6">
                            Strategy-led planning for incorporated business owners
                        </p>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            At 99 Financial, we evaluate insurance, tax, and liquidity decisions within a broader long-term corporate planning framework. Our solutions are designed for business owners who value clarity, discipline, and thoughtful planning over time.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Client Journey Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Client Journey</h2>
                            <p className="text-xl text-brand-gold font-medium mb-8">A disciplined planning process, designed for complexity</p>

                            <div className="text-slate-600 space-y-6 text-lg leading-relaxed mb-10">
                                <p>
                                    Every engagement follows a structured process — from understanding corporate context to evaluating strategic fit, implementation, and ongoing review.
                                </p>
                                <p>
                                    This ensures decisions are made deliberately, with clarity around trade-offs, timing, and long-term consequences.
                                </p>
                                <p className="font-semibold text-brand-blue">
                                    Best suited for business owners who value process, coordination, and strategic clarity.
                                </p>
                            </div>

                            <Link href="/client-journey" className="inline-block px-8 py-4 bg-brand-blue text-white font-bold rounded-sm hover:bg-brand-gold transition-colors duration-300 uppercase tracking-widest text-sm shadow-lg hover:shadow-xl">
                                Understand our client journey
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">

                <div className="logo-pattern-bg"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Corporate Par */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/corporate-par-insurance.png"
                                    alt="Corporate Par"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">Corporate-Owned Life Insurance</h3>
                                <p className="text-sm font-serif italic text-brand-gold mb-4">Insurance as a long-term planning tool</p>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    Within the right structure, corporate-owned life insurance can play a powerful role in tax efficiency, balance-sheet planning, and estate liquidity.
                                    <br /><br />
                                    The emphasis is not on product selection, but on how insurance fits within a broader corporate and long-term planning framework. Used thoughtfully, insurance supports planning objectives — it does not drive them.
                                </p>
                                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Tax-deferred growth</li>
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Liquidity access</li>
                                </ul>
                                <Link href="/corporate-par" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Learn More
                                </Link>
                            </div>
                            <div className="h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-500"></div>
                        </ScrollAnimation>

                        {/* CDA */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group" delay={100}>
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/cda-planning.png"
                                    alt="CDA Planning"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-gold/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">Capital Dividend Account (CDA)</h3>
                                <p className="text-sm font-serif italic text-brand-gold mb-4">Understanding the mechanics behind tax-free corporate wealth transfer</p>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    The Capital Dividend Account is often misunderstood and underutilized.
                                    <br /><br />
                                    We help business owners and their advisors understand how CDA is created, tracked, and strategically integrated into long-term planning — well before exit or succession events. Timing, structure, and coordination matter more than most owners realize.
                                </p>
                                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Tax-free withdrawals</li>
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Estate optimization</li>
                                </ul>
                                <Link href="/cda" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Learn More
                                </Link>
                            </div>
                            <div className="h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-500"></div>
                        </ScrollAnimation>

                        {/* IFA */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col h-full group" delay={200}>
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src="/images/ifa-strategy.png"
                                    alt="IFA Strategy"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">Immediate Financing Arrangement (IFA)</h3>
                                <p className="text-sm font-serif italic text-brand-gold mb-4">Balancing long-term structure with lifetime liquidity</p>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    An Immediate Financing Arrangement is an advanced planning strategy — not a product.
                                    <br /><br />
                                    When appropriate, it allows business owners to access liquidity while preserving carefully designed long-term structures, without forcing premature compromises. IFA is suitable only in specific circumstances and requires disciplined planning.
                                </p>
                                <ul className="space-y-2 mb-8 text-sm text-slate-500">
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Keep corporate funds</li>
                                    <li className="flex items-center"><i className="fa-solid fa-check text-brand-gold mr-2"></i>Interest deduction</li>
                                </ul>
                                <Link href="/ifa" className="mt-auto inline-block text-center w-full py-3 border border-brand-blue text-brand-blue font-bold rounded-sm hover:bg-brand-blue hover:text-white transition uppercase tracking-wider text-sm">
                                    Learn More
                                </Link>
                            </div>
                            <div className="h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-500"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Section 1: How the Solutions Work Together */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-8 text-center">How the Solutions Work Together</h2>
                            <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
                                Our solutions are not designed to operate in isolation. Each element plays a distinct role within a broader corporate planning framework, addressing different aspects of long-term decision-making.
                            </p>

                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-gold/30 before:to-transparent">

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-lg shadow-sm border-l-4 border-brand-gold hover:shadow-md transition-shadow">
                                        <p className="font-medium text-slate-800">The <strong>Client Journey</strong> provides the planning discipline and decision framework.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-lg shadow-sm border-l-4 border-brand-gold hover:shadow-md transition-shadow">
                                        <p className="font-medium text-slate-800"><strong>Corporate-owned life insurance</strong> establishes a long-term structural foundation.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-lg shadow-sm border-l-4 border-brand-gold hover:shadow-md transition-shadow">
                                        <p className="font-medium text-slate-800">The <strong>Capital Dividend Account</strong> reflects the tax outcomes created by that structure over time.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-lg shadow-sm border-l-4 border-brand-gold hover:shadow-md transition-shadow">
                                        <p className="font-medium text-slate-800">Where appropriate, an <strong>Immediate Financing Arrangement</strong> may be used to enhance liquidity without undermining long-term planning objectives.</p>
                                    </div>
                                </div>

                            </div>

                            <p className="text-xl text-brand-blue font-serif font-medium text-center mt-12 italic">
                                "Together, these components form an integrated approach — one that prioritizes structure, coordination, and clarity over individual tactics or short-term outcomes."
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Section 2: Who These Solutions Are For */}
            <section className="py-24 bg-brand-light relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-brand-blue mb-16">Who These Solutions Are For</h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Typically Suitable */}
                            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-brand-gold">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-8 text-center bg-green-50/50 py-3 rounded-md">Typically suitable for</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-check text-green-600 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-700 font-medium">Incorporated business owners with retained earnings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-check text-green-600 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-700 font-medium">Long-term planning and tax efficiency focused</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-check text-green-600 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-700 font-medium">Estate, succession, or shareholder planning considerations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-check text-green-600 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-700 font-medium">Comfortable with structured, coordinated decision-making</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Not Appropriate */}
                            <div className="bg-slate-100 rounded-lg p-8 border-t-4 border-slate-300 opacity-90">
                                <h3 className="text-2xl font-serif font-bold text-slate-500 mb-8 text-center bg-slate-200/50 py-3 rounded-md">Often not appropriate when</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-minus text-slate-500 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-500">Corporate cash flow is needed for near-term operations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-minus text-slate-500 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-500">Objectives are short-term or return-driven</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-minus text-slate-500 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-500">Flexibility is prioritized over structure</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mt-0.5">
                                            <i className="fa-solid fa-minus text-slate-500 text-sm"></i>
                                        </div>
                                        <span className="ml-4 text-slate-500">Decisions are evaluated in isolation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-blue relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to align your corporate structure?</h2>
                        <a
                            href="https://tidycal.com/greatec/30-minute-meeting"
                            target="_blank"
                            className="inline-block bg-brand-gold text-white text-lg font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-xl uppercase tracking-widest"
                        >
                            Request a private strategy review
                        </a>
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    );
}
