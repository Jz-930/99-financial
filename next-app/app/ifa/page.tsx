
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function IFAPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">Immediate Financing Arrangement (IFA)</h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            A Liquidity Strategy for Entrepreneurs and High-Net-Worth Families.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            An Immediate Financing Arrangement (IFA) is a highly effective planning structure that allows business owners and incorporated professionals to retain liquidity while building long-term, tax-efficient wealth through a corporate-owned participating life insurance policy. It is designed for those who value both cash flow and the compounding advantages of permanent insurance.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Why Consider an IFA? */}
            <section className="py-20 bg-brand-light border-y border-slate-200 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation className="fade-in-left relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
                            <Image
                                src="/images/ifa-strategy.png"
                                alt="IFA Strategy"
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
                        </ScrollAnimation>
                        <ScrollAnimation className="order-1 lg:order-2 fade-in-right">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-10">Why Consider an IFA?</h2>

                            <div className="space-y-10">
                                {[
                                    { title: "Maintain Corporate Liquidity", text: "Instead of tying up large premium payments within the corporation, an IFA allows you to borrow back the majority of the premium immediately through a bank line of credit secured against the policy’s cash value. Your corporate funds remain available for operations, investments, or new business opportunities." },
                                    { title: "Tax-Deductible Interest", text: "For qualifying corporate structures, the interest paid on the loan may be deductible when the borrowed funds are used for income-generating business purposes. This creates an additional tax advantage compared to funding premiums directly." },
                                    { title: "Enhanced Long-Term Growth", text: "The policy continues to accumulate cash value and grow on a tax-advantaged basis, regardless of the loan balance. This provides long-term stability, diversification, and an asset that is not correlated to market volatility." },
                                    { title: "Significant Estate Benefits", text: "Upon the passing of the insured, the death benefit flows into the corporation and generates a Capital Dividend Account (CDA) credit. This allows funds to be paid out to shareholders tax-free, creating an exceptionally efficient legacy strategy." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex group">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-brand-blue transition duration-300">{idx + 1}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* How an IFA Works */}
            <section className="py-20 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-10" style={{ backgroundImage: `radial-gradient(#ea8d22 1px, transparent 1px)`, backgroundSize: `40px 40px` }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="text-center mb-16 fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">How an IFA Works</h2>
                        <p className="text-xl text-slate-400">A simplified process flow</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Apply for Policy", text: "Apply for a Corporate-Owned Participating Life Insurance Policy structured for long-term cash value growth." },
                            { step: "02", title: "Pay the Premium", text: "The corporation funds the annual premium." },
                            { step: "03", title: "Assign Collateral", text: "Assign the Policy as Collateral to a Partner Bank. The lender reviews the corporate financials and illustration." },
                            { step: "04", title: "Receive Line of Credit", text: "Bank Advances a Line of Credit, typically up to 75%–90% of the policy’s cash value." },
                            { step: "05", title: "Pay Interest Only", text: "Corporation Pays Interest Only. Interest may be tax-deductible depending on use of funds." },
                            { step: "06", title: "Repeat Annually", text: "As premiums continue, cash value and loan capacity grow over time." }
                        ].map((item, idx) => (
                            <ScrollAnimation key={idx} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition duration-300 transform hover:-translate-y-1" delay={idx * 50}>
                                <div className="text-brand-gold text-4xl mb-4 font-bold">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-300">{item.text}</p>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Uses & Ideal Candidate */}
            <section className="py-20 lg:py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <ScrollAnimation className="fade-in-left">
                            <h3 className="text-3xl font-serif font-bold text-brand-blue mb-8">Common Uses of IFA for Business Owners</h3>
                            <ul className="space-y-4 text-lg">
                                {[
                                    "Expanding business operations",
                                    "Acquiring real estate or equipment",
                                    "Investing in new ventures",
                                    "Building a diversified portfolio outside the corporation",
                                    "Strengthening succession and estate planning",
                                    "Funding buy–sell agreements or shareholder strategies"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start"><i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>{item}</li>
                                ))}
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-right">
                            <h3 className="text-3xl font-serif font-bold text-brand-blue mb-8">Who Is an Ideal Candidate?</h3>
                            <p className="text-slate-600 mb-6">An IFA is most suitable for:</p>
                            <ul className="space-y-4 text-lg">
                                {[
                                    "Incorporated business owners",
                                    "Professionals with a CCPC",
                                    "Individuals with steady corporate cash flow",
                                    "Those with long-term planning horizons",
                                    "Clients with retained earnings seeking a more efficient structure"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start"><i className="fa-solid fa-user-check text-brand-gold mt-1.5 mr-3"></i>{item}</li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-lg">
                                <p className="font-bold text-brand-blue italic">"This strategy is especially compelling for clients who want to preserve liquidity today while creating a meaningful tax-free legacy in the future."</p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Risks & Considerations */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="bg-slate-50 border border-slate-200 p-10 rounded-xl fade-in-up">
                        <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-b border-slate-200 pb-4">Risks and Considerations</h2>
                        <ul className="space-y-3 mb-8 text-slate-700">
                            {[
                                "Interest rate fluctuations may impact annual loan costs",
                                "Bank due diligence and documentation requirements",
                                "Commitment to making ongoing premium and interest payments",
                                "Need for long-term planning and strong cash flow management"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start"><i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1 mr-3"></i>{item}</li>
                            ))}
                        </ul>
                        <p className="font-bold text-brand-blue">
                            IFA is a strategy that should be implemented with guidance from experienced advisors, bankers, accountants, and tax professionals.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-24 bg-brand-blue text-white text-center relative">
                <div className="logo-pattern-bg opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Why Work With 99 Financial?</h2>
                        <p className="text-xl text-slate-300 mb-10">We specialize in insurance-based corporate tax planning for entrepreneurs, professionals, and high-net-worth families across Canada.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base font-bold text-brand-gold mb-12">
                        {["CDA maximization strategies", "Corporate-owned participating life insurance design", "IFA bank coordination and underwriting support", "Long-term tax-efficient wealth transfer"].map((item, idx) => (
                            <ScrollAnimation key={idx} className="p-4 bg-white/5 rounded-lg border border-white/10" delay={idx * 50}>
                                {item}
                            </ScrollAnimation>
                        ))}
                    </div>

                    <ScrollAnimation className="text-lg text-white mb-10 bg-brand-gold/20 inline-block px-8 py-4 rounded-full border border-brand-gold/40 fade-in-up">
                        Our role is to help you structure the strategy correctly, coordinate with lenders, and ensure your planning aligns with your corporate goals.
                    </ScrollAnimation>

                    <ScrollAnimation className="fade-in-up">
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-bold text-xl py-5 px-12 rounded-sm hover:bg-white hover:text-brand-blue transition transform hover:-translate-y-1 shadow-xl">
                            Book an IFA Strategy Call
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
