
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function LawyerCasePage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #5</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">High-Income Lawyer — Annual Income $300,000</h1>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-20 lg:py-24 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <ScrollAnimation className="fade-in-up">
                            <p className="text-xl leading-relaxed text-slate-600 mb-8">
                                Many lawyers earning $250K–$400K face significant tax pressure and limited access to tax-efficient wealth-building tools. Whether the lawyer operates through a professional corporation (PC) or works as an employee, the long-term challenge remains the same: high income, high tax, and low efficiency in building personal net worth.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600 mb-12">
                                A participating whole life insurance strategy—held personally or corporately—provides a stable, tax-advantaged solution for retirement planning, asset protection, and efficient wealth transfer.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/high-income-lawyer.jpg"
                                    alt="High-Income Lawyer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-12 mb-6">Pain Points</h2>
                            <ul className="space-y-4 mb-10">
                                <li>
                                    <strong className="text-brand-blue block text-lg mb-1">1. Extremely High Personal Tax Burden</strong>
                                    <span className="text-slate-600">With annual income around $300,000, the lawyer faces a 50%+ marginal tax rate. RRSP and TFSA limits are not sufficient to meaningfully reduce tax or build long-term wealth.</span>
                                </li>
                                <li>
                                    <strong className="text-brand-blue block text-lg mb-1">2. Limited Access to Corporate Planning (if employee)</strong>
                                    <span className="text-slate-600">Most high-income professionals without a corporation lack tax-efficient opportunities beyond RRSP, TFSA, and taxable investments—resulting in long-term after-tax erosion of wealth.</span>
                                </li>
                                <li>
                                    <strong className="text-brand-blue block text-lg mb-1">3. High Income but Low Asset Protection</strong>
                                    <span className="text-slate-600">Traditional investment accounts are exposed to market volatility and offer no creditor protection, a concern for litigators and lawyers in high-liability fields.</span>
                                </li>
                                <li>
                                    <strong className="text-brand-blue block text-lg mb-1">4. No Tax-Free Source of Retirement Income</strong>
                                    <span className="text-slate-600">The lawyer wants predictable long-term retirement income, but traditional investment income is always taxable.</span>
                                </li>
                                <li>
                                    <strong className="text-brand-blue block text-lg mb-1">5. Concern About Long-Term Estate Taxes</strong>
                                    <span className="text-slate-600">Without planning, a large portion of accumulated assets will be taxed at death, reducing family legacy.</span>
                                </li>
                            </ul>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">Policy Design — Tailored for a $300K Income Professional</h2>
                            <p className="text-slate-600 mb-6">A participating whole life policy provides stable, long-term compounding with tax-deferred growth and tax-free access.</p>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12 hover:shadow-2xl transition duration-500 cursor-default group">
                                <h4 className="font-bold text-brand-blue text-lg mb-4 group-hover:text-brand-gold transition duration-300">Recommended Design</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-start group/item hover:bg-white p-2 rounded transition border border-transparent hover:border-slate-100">
                                        <div className="bg-brand-gold text-white font-bold rounded px-2 py-1 text-xs md:w-24 text-center mr-4 mb-2 md:mb-0 flex-shrink-0">Premium</div>
                                        <div>
                                            <strong className="block text-slate-800">$30,000–$45,000 Annual Premium</strong>
                                            <p className="text-slate-600 text-sm">Fits comfortably within cash flow and builds substantial long-term value.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-start group/item hover:bg-white p-2 rounded transition border border-transparent hover:border-slate-100">
                                        <div className="bg-brand-gold text-white font-bold rounded px-2 py-1 text-xs md:w-24 text-center mr-4 mb-2 md:mb-0 flex-shrink-0">Structure</div>
                                        <div>
                                            <strong className="block text-slate-800">20-Pay or 10-Pay</strong>
                                            <p className="text-slate-600 text-sm">Shorter premium periods front-load growth and accelerate cash value accumulation.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-start group/item hover:bg-white p-2 rounded transition border border-transparent hover:border-slate-100">
                                        <div className="bg-brand-gold text-white font-bold rounded px-2 py-1 text-xs md:w-24 text-center mr-4 mb-2 md:mb-0 flex-shrink-0">Asset Class</div>
                                        <div>
                                            <strong className="block text-slate-800">Protected Long-Term Asset Class</strong>
                                            <p className="text-slate-600 text-sm">High-quality long bonds, fixed income, real estate, private placements. Provides stability and minimizes correlation with public markets.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-start group/item hover:bg-white p-2 rounded transition border border-transparent hover:border-slate-100">
                                        <div className="bg-brand-gold text-white font-bold rounded px-2 py-1 text-xs md:w-24 text-center mr-4 mb-2 md:mb-0 flex-shrink-0">Income</div>
                                        <div>
                                            <strong className="block text-slate-800">Tax-Free Retirement Drawdown</strong>
                                            <p className="text-slate-600 text-sm">Use policy loans, withdrawals, or leverage insured financing to create tax-free retirement income.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-start group/item hover:bg-white p-2 rounded transition border border-transparent hover:border-slate-100">
                                        <div className="bg-brand-gold text-white font-bold rounded px-2 py-1 text-xs md:w-24 text-center mr-4 mb-2 md:mb-0 flex-shrink-0">Estate</div>
                                        <div>
                                            <strong className="block text-slate-800">Estate Enhancement</strong>
                                            <p className="text-slate-600 text-sm">Tax-free death benefit creates immediate liquidity, often many multiples of premiums paid.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">Optional: Corporate vs. Personal Ownership</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Corporate */}
                                <div className="bg-white border border-slate-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="bg-brand-blue text-white p-4 font-bold text-center group-hover:bg-brand-blue/90 transition">Owned by Professional Corp (PC)</div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-slate-800 mb-3 text-sm uppercase text-center text-brand-gold">Advantages</h5>
                                        <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>Use corporate after-tax dollars (cheaper)</li>
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>Tax-deferred growth inside corp</li>
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>CDA credit for tax-free extraction</li>
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>Great for intergenerational wealth</li>
                                        </ul>
                                        <h5 className="font-bold text-slate-800 mb-2 text-sm uppercase text-center text-brand-gold">Ideal For</h5>
                                        <p className="text-center text-sm text-slate-600">Lawyers with PCs, stable corporate profits, partners.</p>
                                    </div>
                                </div>

                                {/* Personal */}
                                <div className="bg-white border border-slate-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="bg-slate-700 text-white p-4 font-bold text-center group-hover:bg-slate-600 transition">Owned Personally</div>
                                    <div className="p-6">
                                        <h5 className="font-bold text-slate-800 mb-3 text-sm uppercase text-center text-brand-gold">Advantages</h5>
                                        <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>Portable (stays with individual)</li>
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>Simpler retirement access</li>
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>Stronger creditor protection (provincial)</li>
                                            <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>Flexible for career changes</li>
                                        </ul>
                                        <h5 className="font-bold text-slate-800 mb-2 text-sm uppercase text-center text-brand-gold">Ideal For</h5>
                                        <p className="text-center text-sm text-slate-600">Employees, younger lawyers, those bridging careers.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="bg-brand-blue/5 p-8 rounded-xl text-center border border-brand-blue/10 hover:shadow-2xl transition duration-500 cursor-default">
                                <h2 className="text-3xl font-serif font-bold text-brand-blue mb-4">Summary</h2>
                                <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    A well-designed participating life insurance strategy transforms high taxable income into a tax-efficient lifetime wealth strategy. It provides tax-deferred compounding, tax-free retirement income, protection from volatility, and a tax-free legacy for the next generation.
                                </p>
                                <Link href="/contact" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-blue transition shadow-md hover:scale-105 active:scale-95 transform">
                                    Discuss Your Options
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </main>
    );
}
