
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function FamilyBusinessCasePage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #4</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">Family Business Transitioning to the Next Generation</h1>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-20 lg:py-24 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <ScrollAnimation className="fade-in-up">
                            <p className="text-xl leading-relaxed text-slate-600 mb-8">
                                A family-owned business preparing to transition to the son (or next generation) requires careful, professional planning. Without a structured approach, significant tax exposure, liquidity shortages, or family conflicts may arise—often forcing the sale of assets or creating unequal outcomes among beneficiaries.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600 mb-12">
                                Combining an estate freeze with corporate-owned participating life insurance allows the family to lock in tax liabilities, shift growth to the next generation, and build a substantial tax-free legacy through the Capital Dividend Account (CDA).
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/family-business-transition.jpg"
                                    alt="Family Business Succession"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-16">
                                <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">1. Estate Freeze — Lock In Today’s Value and Shift Future Growth</h2>
                                <p className="text-slate-600 mb-6">
                                    An estate freeze is one of the most sophisticated and widely used strategies for successful intergenerational business transition.
                                </p>

                                <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mb-8 rounded-r hover:shadow-lg transition duration-300 cursor-default">
                                    <h4 className="font-bold text-brand-blue mb-3">What the Estate Freeze Accomplishes</h4>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex items-center group"><i className="fa-solid fa-snowflake text-brand-blue mr-2 group-hover:rotate-12 transition duration-300"></i>Locks in the current value of the business shares for the parents</li>
                                        <li className="flex items-center group"><i className="fa-solid fa-arrow-trend-up text-brand-blue mr-2 group-hover:scale-125 transition duration-300"></i>Shifts all future growth to the next generation (e.g., the son)</li>
                                        <li className="flex items-center group"><i className="fa-solid fa-file-invoice-dollar text-brand-blue mr-2 group-hover:scale-125 transition duration-300"></i>Ensures the tax liability on death is based only on today’s value</li>
                                        <li className="flex items-center group"><i className="fa-solid fa-handshake text-brand-blue mr-2 group-hover:scale-125 transition duration-300"></i>Creates clarity and stability in succession</li>
                                        <li className="flex items-center group"><i className="fa-solid fa-users-gear text-brand-blue mr-2 group-hover:scale-125 transition duration-300"></i>Often paired with a family trust for flexibility and future planning</li>
                                    </ul>
                                </div>

                                <h4 className="font-bold text-red-700 mb-3">Why a Freeze Is Critical</h4>
                                <p className="text-slate-600">
                                    Without a freeze, the business continues to grow in value, increasing the tax burden upon death. This can create a liquidity crisis where the estate must sell operating assets, equipment, commercial property, or even part of the business. A freeze prevents this by containing the tax liability.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-16">
                                <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">2. Corporate-Owned Participating Life Insurance — Liquidity + Stability</h2>
                                <p className="text-slate-600 mb-6">
                                    Even with an estate freeze, the family must still fund the tax liability associated with the frozen preferred shares. A corporate-owned par life insurance policy is the most efficient way to create that liquidity.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white border border-slate-100 p-6 rounded shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                        <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">1. Funds the Tax Liability Predictably</h4>
                                        <p className="text-slate-600 text-sm">The tax-free death benefit is used to pay capital gains tax, probate fees, and legal/estate costs without selling assets or borrowing.</p>
                                    </div>
                                    <div className="bg-white border border-slate-100 p-6 rounded shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                        <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">2. Credits the CDA</h4>
                                        <p className="text-slate-600 text-sm">The death benefit flows into the CDA, creating tax-free corporate capital that the company can distribute to the son tax-free.</p>
                                    </div>
                                    <div className="bg-white border border-slate-100 p-6 rounded shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                        <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">3. Stabilizes Family Balance Sheet</h4>
                                        <p className="text-slate-600 text-sm">Par insurance grows tax-deferred and is not correlated with market cycles, providing a stable anchor asset.</p>
                                    </div>
                                    <div className="bg-white border border-slate-100 p-6 rounded shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                        <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">4. Optional: IFA</h4>
                                        <p className="text-slate-600 text-sm">The policy can be used as collateral to access corporate liquidity during the parents’ lifetime without disrupting operations.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-16">
                                <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">CDA Legacy — Tax-Free Wealth for the Next Generation</h2>
                                <p className="text-slate-600 mb-6">This is where the strategy becomes extremely powerful.</p>

                                <div className="bg-brand-gold/10 p-6 rounded-xl border border-brand-gold/20 mb-8">
                                    <h4 className="font-bold text-brand-blue mb-3">How the CDA Maximizes Family Legacy</h4>
                                    <ol className="list-decimal ml-5 space-y-2 text-slate-700">
                                        <li>Upon the parents’ death, tax-free death benefit is paid to the corporation.</li>
                                        <li>Proceeds are credited to the Capital Dividend Account (CDA).</li>
                                        <li>The corporation distributes capital dividends to the son 100% tax-free.</li>
                                    </ol>
                                    <p className="mt-4 font-bold text-brand-blue">Without CDA planning, the son may face 45%+ personal tax when extracting money. This structure converts corporate retained earnings into pure tax-free intergenerational capital.</p>
                                </div>

                                <h3 className="text-2xl font-bold text-brand-blue mb-6">Illustrative Outcome</h3>
                                <p className="text-slate-500 text-sm italic mb-4">(Example: Family business valued at $4M; parents age 60; $100K annual corporate premium for 10 years, joint age at 53)</p>

                                <div className="bg-brand-dark text-white p-8 rounded-xl shadow-lg relative overflow-hidden hover:scale-[1.01] transition duration-500 cursor-default">
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse"></div>
                                    <h4 className="text-xl font-bold text-brand-gold mb-6 border-b border-white/10 pb-4">At Parents’ pass away at age 85:</h4>
                                    <div className="space-y-4 relative z-10">
                                        <div className="flex justify-between items-center group">
                                            <span className="text-slate-300">Death benefit</span>
                                            <span className="text-xl font-bold group-hover:text-brand-gold transition duration-300">~$4.49M</span>
                                        </div>
                                        <div className="flex justify-between items-center group">
                                            <span className="text-slate-300">CDA credit</span>
                                            <span className="text-xl font-bold group-hover:text-brand-gold transition duration-300">~$4.25M</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/10 p-3 rounded group hover:bg-white/20 transition duration-300">
                                            <div className="font-bold text-brand-gold">Tax-free distribution to the son</div>
                                            <div className="text-2xl font-bold text-brand-gold group-hover:scale-110 transition duration-300">~$4.25M</div>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-white/10 text-center text-slate-300 text-sm">
                                        Business remains intact • Tax liability on frozen shares fully funded
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="mt-16 text-center bg-slate-50 p-10 rounded-xl hover:shadow-2xl transition duration-500 cursor-default">
                                <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">Summary: A Complete Succession Strategy</h2>
                                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                                    By combining Estate Freeze, Corporate-Owned Par Insurance, and CDA Legacy Planning, the family achieves a smooth, tax-efficient business transition, protection of value, zero forced sale of assets, and tax-free capital for the next generation.
                                </p>
                                <Link href="/contact" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-blue transition shadow-md hover:scale-105 active:scale-95 transform">
                                    Plan Your Succession
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </main>
    );
}
