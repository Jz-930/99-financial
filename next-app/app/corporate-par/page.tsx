
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CorporateParPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">Corporate-Owned Participating Life Insurance</h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            A Stable, Tax-Efficient Asset for Canadian Business Owners.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Corporate-owned participating life insurance is one of the most effective long-term planning tools available to Canadian-controlled private corporations (CCPCs). It combines insurance protection with steady, tax-advantaged asset growth inside the corporation—offering both financial stability and powerful estate benefits.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Why Corporations Use Participating Life Insurance */}
            <section className="py-20 bg-brand-light border-y border-slate-200 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-16 text-center">Why Corporations Use Participating Life Insurance</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <ScrollAnimation className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-brand-gold service-card hover:-translate-y-1 transition duration-300">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">1. Tax-Efficient Growth Inside the Corporation</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Funds inside a participating life insurance policy grow on a tax-deferred basis, creating a stable and predictable asset that is not correlated to market volatility. For corporations with significant retained earnings, this allows capital to compound more efficiently than passive investments.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-brand-gold service-card hover:-translate-y-1 transition duration-300" delay={100}>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">2. Access to Cash Value During Lifetime</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The corporation can access the accumulating cash value through withdrawals or policy loans, or by using the policy as collateral for a line of credit. This creates:
                            </p>
                            <ul className="space-y-2 text-slate-600 list-disc ml-5">
                                <li>Liquidity for business investments</li>
                                <li>Flexibility for succession planning</li>
                                <li>Funding options for opportunities or emergencies</li>
                            </ul>
                            <p className="text-slate-600 mt-4 font-medium italic">
                                This makes corporate-owned insurance a versatile balance sheet asset.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-brand-gold service-card hover:-translate-y-1 transition duration-300" delay={200}>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">3. Significant Tax-Free Estate Benefit (CDA Credit)</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Upon death, the corporation receives the tax-free death benefit. After deducting the policy’s adjusted cost basis, the remaining amount creates a Capital Dividend Account (CDA) credit, which can be paid out to shareholders 100% tax-free.
                                <br /><br />
                                <span className="font-bold">For business owners, this is one of the most powerful estate strategies available in Canada.</span>
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-brand-gold service-card hover:-translate-y-1 transition duration-300" delay={300}>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">4. Strong Long-Term Stability</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Participating (Par) policies are backed by the insurer’s large, diversified participating account—typically consisting of high-quality fixed income, real estate, private debt, and infrastructure assets. These portfolios aim for stable long-term returns, even in uncertain markets.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* How Corporate-Owned Insurance Works */}
            <section className="py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-8">How Corporate-Owned Insurance Works</h2>
                            <ol className="space-y-6 list-decimal list-inside text-lg text-slate-700 marker:text-brand-gold marker:font-bold">
                                <li>The corporation is both the owner and beneficiary of the policy.</li>
                                <li>Premiums are paid using corporate dollars at a lower tax rate than personal funds.</li>
                                <li>Cash value grows inside the policy on a tax-deferred basis.</li>
                                <li>The policy can be collateralized to create liquidity during lifetime.</li>
                                <li>Upon the shareholder’s passing, the death benefit flows into the corporation.</li>
                                <li>The CDA credit allows a tax-free distribution to the shareholder’s family.</li>
                            </ol>
                            <p className="mt-8 text-xl font-medium text-brand-blue border-l-4 border-brand-gold pl-4">
                                This structure provides both lifetime benefits and intergenerational planning advantages.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-right relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/corporate-par-insurance.png"
                                alt="Corporate Insurance Diagram"
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Common Strategic Uses & Who Is a Good Candidate */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/logo_origin.webp')] bg-no-repeat bg-center opacity-5 pointer-events-none mix-blend-soft-light transform scale-150"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <ScrollAnimation className="fade-in-up">
                            <h3 className="text-3xl font-serif font-bold text-brand-gold mb-8">Common Strategic Uses</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>Enhancing shareholder wealth and legacy</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>Tax-efficient distribution to next-generation shareholders</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>Buy–sell and shareholder agreement funding</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>Retirement income planning for business owners</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>Corporate diversification beyond traditional investments</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>Complementing IFA strategies to preserve liquidity</li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-up" delay={100}>
                            <h3 className="text-3xl font-serif font-bold text-brand-gold mb-8">Who Is a Good Candidate?</h3>
                            <p className="text-slate-300 mb-6">Corporate-owned participating life insurance is most suitable for:</p>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start"><i className="fa-solid fa-user-check text-brand-gold mt-1.5 mr-3"></i>Business owners with consistent retained earnings</li>
                                <li className="flex items-start"><i className="fa-solid fa-user-check text-brand-gold mt-1.5 mr-3"></i>Professionals operating through a CCPC</li>
                                <li className="flex items-start"><i className="fa-solid fa-user-check text-brand-gold mt-1.5 mr-3"></i>Those seeking long-term, stable asset growth</li>
                                <li className="flex items-start"><i className="fa-solid fa-user-check text-brand-gold mt-1.5 mr-3"></i>Entrepreneurs planning succession or intergenerational wealth transfer</li>
                                <li className="flex items-start"><i className="fa-solid fa-user-check text-brand-gold mt-1.5 mr-3"></i>Clients who value liquidity and tax-efficient estate planning</li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Why It Works So Well for CCPCs */}
            <section className="py-20 lg:py-24 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-10">Why It Works So Well for CCPCs</h2>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: "fa-percent", text: "Corporate tax rates are lower than personal rates" },
                            { icon: "fa-coins", text: "Premiums paid with corporate dollars are more efficient" },
                            { icon: "fa-chart-line", text: "Tax-deferred growth helps retained earnings compound" },
                            { icon: "fa-file-invoice-dollar", text: "CDA credit enables tax-free distribution" },
                            { icon: "fa-shield-halved", text: "Policy forms a valuable, non-correlated corporate asset" },
                        ].map((item, idx) => (
                            <ScrollAnimation key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-lg transition duration-300" delay={idx * 100}>
                                <div className="text-brand-gold text-4xl mb-4"><i className={`fa-solid ${item.icon}`}></i></div>
                                <p className="font-bold text-slate-700">{item.text}</p>
                            </ScrollAnimation>
                        ))}
                    </div>
                    <ScrollAnimation className="fade-in-up">
                        <p className="text-2xl font-serif font-bold text-brand-blue">
                            It is one of the few remaining structures in Canada that provides lifetime liquidity, long-term stability, and tax-free estate transfer in a single solution.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Why Work With 99 Financial & CTA */}
            <section className="py-20 lg:py-24 bg-brand-blue text-white relative">
                <div className="logo-pattern-bg opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Why Work With 99 Financial</h2>
                        <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12">
                            We help entrepreneurs and high-net-worth families design tax-efficient corporate insurance strategies that integrate:
                        </p>
                    </ScrollAnimation>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {["Policy structure optimization", "CDA planning", "IFA coordination", "Estate and succession planning", "Long-term cash flow analysis"].map((tag, idx) => (
                            <ScrollAnimation key={idx} className="bg-white/10 px-6 py-3 rounded-full text-brand-gold font-bold border border-white/20" delay={idx * 50}>
                                {tag}
                            </ScrollAnimation>
                        ))}
                    </div>

                    <ScrollAnimation className="fade-in-up bg-brand-gold/10 p-10 rounded-2xl border border-brand-gold/30 max-w-3xl mx-auto backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-4 text-white">Our Goal</h3>
                        <p className="text-lg text-slate-200 mb-8">
                            To help you turn retained earnings into a stable, tax-efficient and flexible asset for both today and the next generation.
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
