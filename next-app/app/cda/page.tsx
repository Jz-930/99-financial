
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CDAPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">Capital Dividend Account (CDA)</h1>
                        <p className="text-xl text-brand-gold font-medium max-w-3xl mx-auto">
                            A Structural Exit Mechanism for Corporate Wealth
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Strategic Context */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Strategic Context</h2>
                        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                            <p>
                                For incorporated business owners, the central financial question is rarely how to generate profit. The real long-term challenge is structural:
                            </p>
                            <p className="font-bold text-brand-blue">
                                How can accumulated corporate wealth ultimately move to shareholders and families without being eroded by layers of taxation?
                            </p>
                            <p>
                                The Canadian tax system offers very few legitimate pathways that allow corporate funds to flow to shareholders tax-free. The Capital Dividend Account (CDA) is one of those rare mechanisms.
                            </p>
                            <p>
                                CDA is not a product, and it is not a traditional account. It is a legislated tax construct that functions as a tax-free distribution channel within a properly designed corporate wealth structure.
                            </p>
                            <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-gold mt-6">
                                <p className="font-medium text-slate-700">
                                    Importantly, CDA is rarely the starting point of planning — it is often the final tax-efficient exit mechanism within a strategy that may have been designed years, sometimes decades, in advance.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* The Planning Problem It Addresses */}
            <section className="py-20 bg-brand-light border-y border-slate-200 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">The Planning Problem It Addresses</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Private corporations in Canada often become the primary holding vehicle for family wealth. Retained earnings accumulate. Corporate assets grow. Balance sheets strengthen.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                While this structure supports tax-efficient growth, it also creates a structural issue:
                                <br />
                                <span className="font-bold text-brand-blue">Corporate wealth and family wealth are not the same — and moving capital between them can be tax-intensive if not designed properly.</span>
                            </p>
                            <p className="text-slate-600 leading-relaxed max-w-lg">
                                Without deliberate planning, extracting corporate value can trigger multiple layers of tax across a business owner’s lifetime and at death.
                                <br /><br />
                                CDA planning addresses this structural disconnect by enabling tax-free capital dividends when qualifying credits exist.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-right relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/cda-planning.png"
                                alt="CDA Planning Visualization"
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Where CDA Fits in the Corporate Wealth Flow */}
            <section className="py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-12">Where CDA Fits in the Corporate Wealth Flow</h2>
                    </ScrollAnimation>

                    <ScrollAnimation className="fade-in-up">
                        <div className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
                            <p className="mb-8">CDA should be understood within the broader movement of corporate wealth:</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base font-bold text-brand-blue mb-12">
                            <div className="bg-slate-100 px-6 py-3 rounded-full border border-slate-200">Business profits</div>
                            <i className="fa-solid fa-arrow-right text-brand-gold hidden md:block"></i><i className="fa-solid fa-arrow-down text-brand-gold md:hidden"></i>
                            <div className="bg-slate-100 px-6 py-3 rounded-full border border-slate-200">Retained earnings</div>
                            <i className="fa-solid fa-arrow-right text-brand-gold hidden md:block"></i><i className="fa-solid fa-arrow-down text-brand-gold md:hidden"></i>
                            <div className="bg-slate-100 px-6 py-3 rounded-full border border-slate-200">Corporate asset accumulation</div>
                            <i className="fa-solid fa-arrow-right text-brand-gold hidden md:block"></i><i className="fa-solid fa-arrow-down text-brand-gold md:hidden"></i>
                            <div className="bg-slate-100 px-6 py-3 rounded-full border border-slate-200">Structural planning</div>
                        </div>

                        <div className="bg-brand-blue p-8 rounded-xl text-white inline-block max-w-4xl border border-brand-blue/90 shadow-lg relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-brand-gold text-2xl"><i className="fa-solid fa-arrow-down"></i></div>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                                <div className="font-bold text-xl">CDA credit creation</div>
                                <i className="fa-solid fa-arrow-right text-brand-gold hidden md:block"></i><i className="fa-solid fa-arrow-down text-brand-gold md:hidden"></i>
                                <div className="font-bold text-xl text-brand-gold border-2 border-brand-gold px-6 py-2 rounded-lg">Tax-free distribution to shareholders</div>
                            </div>
                        </div>

                        <p className="mt-10 text-slate-600 italic max-w-2xl mx-auto">
                            CDA is therefore not an isolated concept. It represents the exit stage of a corporate wealth engineering process.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* How CDA Credits Are Created */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-10" style={{ backgroundImage: `radial-gradient(#ea8d22 1px, transparent 1px)`, backgroundSize: `30px 30px` }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">How CDA Credits Are Created</h2>
                            <p className="text-lg text-slate-300 mb-6">
                                CDA credits do not arise from contributions. They are created through specific corporate events recognized under tax legislation, including:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start"><i className="fa-solid fa-caret-right text-brand-gold mt-1.5 mr-3"></i>Corporate-owned life insurance proceeds (net of policy ACB)</li>
                                <li className="flex items-start"><i className="fa-solid fa-caret-right text-brand-gold mt-1.5 mr-3"></i>Certain capital gains components</li>
                                <li className="flex items-start"><i className="fa-solid fa-caret-right text-brand-gold mt-1.5 mr-3"></i>Other qualifying capital transactions</li>
                            </ul>
                            <p className="text-slate-300 italic">
                                Because CDA is tracked — not funded — structure, timing, and documentation are critical.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-white/10 p-10 rounded-xl backdrop-blur-sm border border-white/10 fade-in-right">
                            <p className="text-xl font-medium leading-relaxed mb-6">
                                One of the most efficient methods of creating CDA credit over time is through properly structured corporate-owned life insurance, which integrates estate liquidity with corporate tax efficiency.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* What CDA Planning Is — and Is Not */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollAnimation className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6">What CDA Planning Is</h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>A corporate balance sheet strategy</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>A component of long-term shareholder and estate planning</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>A structural method for improving after-tax wealth transfer</li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-slate-50 p-8 rounded-xl shadow-inner border-t-4 border-slate-400" delay={100}>
                            <h3 className="text-2xl font-bold text-slate-600 mb-6">What CDA Planning Is Not</h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-center"><i className="fa-solid fa-xmark text-slate-400 mr-3"></i>A product purchase decision</li>
                                <li className="flex items-center"><i className="fa-solid fa-xmark text-slate-400 mr-3"></i>A short-term tax tactic</li>
                                <li className="flex items-center"><i className="fa-solid fa-xmark text-slate-400 mr-3"></i>A standalone strategy independent of corporate structure</li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation className="mt-12 text-center text-slate-600 font-medium italic fade-in-up">
                        It must be evaluated in the context of corporate assets, shareholder objectives, succession plans, and long-term tax exposure.
                    </ScrollAnimation>
                </div>
            </section>

            {/* Common Misconceptions */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8 text-center">Common Misconceptions</h2>
                        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-10">
                            <p className="text-lg text-slate-600 mb-6">Misunderstandings frequently delay or weaken planning:</p>
                            <ul className="space-y-4 mb-8 text-slate-700">
                                <li className="flex items-start"><i className="fa-solid fa-circle-xmark text-red-400 mt-1.5 mr-3"></i>Assuming CDA is a separate “funded account”</li>
                                <li className="flex items-start"><i className="fa-solid fa-circle-xmark text-red-400 mt-1.5 mr-3"></i>Treating CDA planning as something addressed only at death</li>
                                <li className="flex items-start"><i className="fa-solid fa-circle-xmark text-red-400 mt-1.5 mr-3"></i>Focusing on insurance without understanding the structural objective</li>
                                <li className="flex items-start"><i className="fa-solid fa-circle-xmark text-red-400 mt-1.5 mr-3"></i>Overlooking the long-term erosion of policy ACB</li>
                                <li className="flex items-start"><i className="fa-solid fa-circle-xmark text-red-400 mt-1.5 mr-3"></i>Viewing CDA as an afterthought rather than a design objective</li>
                            </ul>
                            <p className="text-lg text-brand-blue font-bold text-center bg-brand-light p-4 rounded-lg">
                                In practice, CDA is not an event. It is often the outcome of a corporate wealth strategy that may take years — sometimes decades — to design and position properly.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Strategic Role Within Corporate Planning & CTA */}
            <section className="py-20 lg:py-24 bg-brand-blue text-white relative text-center">
                <div className="logo-pattern-bg opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Strategic Role Within Corporate Planning</h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            CDA planning sits within the larger discipline of corporate wealth architecture. It is evaluated at the corporate balance sheet level, not at the product level.
                        </p>
                        <div className="text-left max-w-2xl mx-auto mb-12 space-y-4">
                            <p className="flex items-center text-lg text-slate-200"><i className="fa-solid fa-check text-brand-gold mr-4"></i>Convert taxable corporate surplus into tax-efficient estate liquidity</p>
                            <p className="flex items-center text-lg text-slate-200"><i className="fa-solid fa-check text-brand-gold mr-4"></i>Reduce long-term tax drag on accumulated corporate wealth</p>
                            <p className="flex items-center text-lg text-slate-200"><i className="fa-solid fa-check text-brand-gold mr-4"></i>Support intergenerational wealth transfer</p>
                            <p className="flex items-center text-lg text-slate-200"><i className="fa-solid fa-check text-brand-gold mr-4"></i>Improve after-tax outcomes without disrupting ongoing corporate operations</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation className="bg-white/10 rounded-xl p-10 backdrop-blur-sm border border-brand-gold/30 inline-block fade-in-up" delay={100}>
                        <h3 className="text-2xl font-bold text-brand-gold mb-4">Next Step</h3>
                        <p className="text-lg text-white mb-8">
                            CDA planning is not universally relevant — but when it is, it should be addressed intentionally and early within the corporate planning process.
                            <br /><br />
                            Understand whether CDA planning is structurally appropriate for your corporation.
                        </p>
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-bold text-xl py-4 px-10 rounded-sm hover:bg-white hover:text-brand-blue transition transform hover:-translate-y-1 shadow-lg">
                            Book a Private Strategy Review
                        </a>
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    );
}
