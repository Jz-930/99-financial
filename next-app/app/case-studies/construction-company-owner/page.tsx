
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function ConstructionCompanyCasePage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #1</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">Construction Company Owner — Annual Profit $500,000</h1>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-20 lg:py-24 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <ScrollAnimation className="fade-in-up">
                            <p className="text-xl leading-relaxed text-slate-600 mb-8">
                                A successful construction business often generates strong cash flow, but also faces high taxes, significant volatility, and limited options for extracting retained earnings efficiently. For many owners, traditional corporate planning leads to growing trapped capital and rising personal tax exposure.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600 mb-12">
                                A corporate-owned participating life insurance strategy provides a disciplined, tax-efficient framework to optimize retained earnings, enhance long-term wealth, and create substantial tax-free value for the family.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/construction-company-owner.jpg"
                                    alt="Construction Company Owner"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-12 mb-6">Pain Points</h2>
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 cursor-default group">
                                <ul className="space-y-6">
                                    <li className="p-2 rounded-lg hover:bg-slate-50 transition duration-300">
                                        <strong className="text-brand-blue block text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">1. Rising Corporate Retained Earnings Without a Clear Deployment Strategy</strong>
                                        <span className="text-slate-600">The corporation accumulates more than $500,000 of profit annually. After corporate tax, a large portion remains trapped in the company, earning modest returns and exposed to future tax on distribution.</span>
                                    </li>
                                    <li className="p-2 rounded-lg hover:bg-slate-50 transition duration-300">
                                        <strong className="text-brand-blue block text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">2. High Personal Tax When Taking Money Out</strong>
                                        <span className="text-slate-600">Extracting funds through salary or dividends triggers significant personal taxes (often 40%–53%), making traditional retirement planning inefficient.</span>
                                    </li>
                                    <li className="p-2 rounded-lg hover:bg-slate-50 transition duration-300">
                                        <strong className="text-brand-blue block text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">3. Business Is Asset-Heavy and Tax-Heavy</strong>
                                        <span className="text-slate-600">The company owns equipment, vehicles, accounts receivable, and sometimes real estate. At death, these assets trigger a substantial tax liability, potentially forcing liquidation.</span>
                                    </li>
                                    <li className="p-2 rounded-lg hover:bg-slate-50 transition duration-300">
                                        <strong className="text-brand-blue block text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">4. Lack of Long-Term Tax-Free Wealth Transfer Tools</strong>
                                        <span className="text-slate-600">The owner wants to structure wealth for the next generation but lacks a mechanism to move funds out of the corporation tax-free.</span>
                                    </li>
                                    <li className="p-2 rounded-lg hover:bg-slate-50 transition duration-300">
                                        <strong className="text-brand-blue block text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">5. Market Volatility and Unpredictable Cash Flow</strong>
                                        <span className="text-slate-600">Construction cycles fluctuate, making stability and capital preservation a priority.</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">The Solution: Corporate-Owned Participating Life Insurance (With Optional IFA)</h2>
                            <p className="text-slate-600 mb-8">
                                By redirecting a portion of annual retained earnings into a corporate-owned participating whole life policy, the owner creates a tax-efficient long-term asset inside the corporation.
                            </p>

                            <h3 className="text-2xl font-bold text-brand-blue mt-10 mb-4">Key Components of the Solution</h3>
                            <ol className="list-decimal list-outside space-y-6 ml-5 marker:text-brand-gold marker:font-bold">
                                <li>
                                    <strong className="text-slate-800">Allocate $150k–$200k of Annual Corporate Cash Flow</strong>
                                    <p className="text-slate-600 mt-1">Premiums are paid using retained earnings. The policy compounds tax-deferred and becomes a stable asset within the CCPC.</p>
                                </li>
                                <li>
                                    <strong className="text-slate-800">Use an Immediate Financing Arrangement (IFA) for Liquidity (Optional)</strong>
                                    <p className="text-slate-600 mt-1">If the owner needs working capital for projects, equipment, or real estate:</p>
                                    <ul className="list-disc ml-5 mt-2 space-y-1 text-slate-600">
                                        <li>Collateralize the policy to a bank</li>
                                        <li>The bank provides a revolving line of credit</li>
                                        <li>The corporation continues operations with minimal cash flow impact</li>
                                    </ul>
                                    <p className="text-slate-600 mt-2">This structure allows the owner to build tax-free wealth while keeping corporate liquidity intact.</p>
                                </li>
                                <li>
                                    <strong className="text-slate-800">Create Significant CDA Credits</strong>
                                    <p className="text-slate-600 mt-1">Upon death, tax-free insurance proceeds are credited to the Capital Dividend Account, allowing the estate to extract millions from the corporation entirely tax-free.</p>
                                </li>
                                <li>
                                    <strong className="text-slate-800">Fund Future Tax Liabilities Predictably</strong>
                                    <p className="text-slate-600 mt-1">The policy provides the liquidity needed to cover taxes triggered at death, ensuring the construction business can continue without forced sale.</p>
                                </li>
                            </ol>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">Projected CDA Result</h2>
                            <p className="text-sm text-slate-500 italic mb-6">
                                (Example using a male age 45, non-smoker, corporate-owned participating life insurance program with annual premiums of $200,000 for 20 years. The initial coverage is $5.2 million, and it increases each year. Actual numbers depend on age/health/product.)
                            </p>

                            <div className="bg-brand-blue text-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
                                <h4 className="text-xl font-bold text-brand-gold mb-6 border-b border-white/20 pb-4">By Age 85:</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-300">Death Benefit:</span>
                                        <span className="text-2xl font-bold">~ $9.22M</span>
                                    </div>
                                    <p className="text-slate-400 text-sm py-2">
                                        From age 66 to 85, you can receive $170,000 in annual retirement income, and if death occurs at age 85, there will still be remaining benefits.
                                    </p>
                                    <div className="flex justify-between items-center bg-white/10 p-4 rounded">
                                        <span className="text-brand-gold font-bold">Tax-Free Distribution to Family:</span>
                                        <span className="text-2xl font-bold text-brand-gold">~ $8.98M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-300 text-sm">Corporate Capital Outflow (Net of IFA):</span>
                                        <span className="text-slate-300 text-sm text-right">Minimal, depending on loan structure</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h3 className="text-2xl font-bold text-brand-blue mt-12 mb-4">Impact</h3>
                            <ul className="space-y-3 mb-10">
                                <li className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition duration-300 group"><i className="fa-solid fa-check text-green-500 mt-1.5 mr-3 group-hover:scale-125 transition duration-300"></i><span className="text-slate-700">The family extracts millions in corporate wealth with zero personal tax</span></li>
                                <li className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition duration-300 group"><i className="fa-solid fa-check text-green-500 mt-1.5 mr-3 group-hover:scale-125 transition duration-300"></i><span className="text-slate-700">The company gains liquidity to handle final taxes and succession</span></li>
                                <li className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition duration-300 group"><i className="fa-solid fa-check text-green-500 mt-1.5 mr-3 group-hover:scale-125 transition duration-300"></i><span className="text-slate-700">No forced sale of equipment, properties, or projects</span></li>
                                <li className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition duration-300 group"><i className="fa-solid fa-check text-green-500 mt-1.5 mr-3 group-hover:scale-125 transition duration-300"></i><span className="text-slate-700 font-bold">This turns what would have been heavily taxed corporate wealth into a fully tax-free intergenerational transfer.</span></li>
                            </ul>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">Retained Earnings Optimization</h2>
                            <p className="text-slate-600 mb-6">By integrating this solution into the corporate structure, the business owner achieves long-term optimization of trapped capital.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">1. Convert Taxable Retained Earnings Into Tax-Free Capital</h4>
                                    <p className="text-slate-600 text-sm">Instead of leaving cash idle, funds are allocated to a policy with tax-deferred growth, stable return, and zero market volatility.</p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">2. Improve Corporate Balance Sheet Quality</h4>
                                    <p className="text-slate-600 text-sm">Participating whole life becomes a stable asset, bank-friendly collateral, and an effective tool for borrowing capacity.</p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">3. Maintain Operating Liquidity Through IFA</h4>
                                    <p className="text-slate-600 text-sm">Annual premiums do not disrupt cash flow because the bank provides financing against the policy’s growing cash value.</p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-gold transition duration-300">4. Enhance Long-Term Corporate Value</h4>
                                    <p className="text-slate-600 text-sm">The policy becomes a multi-million-dollar asset supporting succession planning and wealth transfer.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="bg-brand-gold/10 p-8 rounded-xl border border-brand-gold/30 mt-12 text-center backdrop-blur-sm hover:shadow-2xl transition duration-500 cursor-default">
                                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-4">Summary</h2>
                                <p className="text-slate-700 mb-6 leading-relaxed">
                                    For a construction company owner with $500,000 of annual profit, corporate-owned participating life insurance—paired with an IFA—solves major tax and liquidity challenges: Reduces long-term tax exposure, creates tax-free CDA credit, preserves liquidity, and builds a stable asset inside the corporation.
                                </p>
                                <Link href="/contact" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-blue transition shadow-md hover:scale-105 active:scale-95 transform">
                                    Discuss Your Situation
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </main>
    );
}
