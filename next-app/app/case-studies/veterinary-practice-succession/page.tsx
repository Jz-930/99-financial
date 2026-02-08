import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function VeterinarySuccessionCasePage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[300px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #3</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">Veterinary Practice Succession & Estate Structuring</h1>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-20 lg:py-24 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="prose prose-lg prose-slate mx-auto max-w-none">

                        {/* 1. Client Snapshot */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">1. Client Snapshot</h2>
                            <div className="overflow-x-auto mb-6">
                                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider w-1/3">Item</th>
                                            <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Business Type</td>
                                            <td className="p-4 text-slate-600">Veterinary clinic</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Location</td>
                                            <td className="p-4 text-slate-600">Ottawa Ontario</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Owner</td>
                                            <td className="p-4 text-slate-600">Husband & wife, age 50</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Annual Revenue</td>
                                            <td className="p-4 text-slate-600">~$3.1M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">After-Tax Profit</td>
                                            <td className="p-4 text-slate-600">~$500K</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Retained Earnings</td>
                                            <td className="p-4 text-slate-600">~$4.2M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Corporate Real Estate</td>
                                            <td className="p-4 text-slate-600">FMV ~$2.5M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Successor</td>
                                            <td className="p-4 text-slate-600">Son, Veterinary</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ScrollAnimation>

                        {/* 2. Planning Challenge */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">2. Planning Challenge</h2>
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm mb-12">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Direct share transfer may trigger tax consequences</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Future growth increases estate tax exposure</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Retirement requires liquidity beyond business assets</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Wealth concentrated in business and real estate</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>

                        {/* 3. Strategy Framework */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">3. Strategy Framework</h2>

                            <div className="bg-brand-blue/5 p-6 rounded-xl border border-brand-blue/10 mb-8">
                                <h3 className="font-bold text-brand-blue mb-3">Implementation Structure (Illustrative)</h3>
                                <ul className="text-sm text-slate-700 space-y-2 grid sm:grid-cols-2 gap-x-4">
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Policy type: Corporate-owned joint last-to-die participating whole life insurance</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Insured structure: Spousal joint coverage</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Initial death benefit: ~$4.85M</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Annual premium: $300,000</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Funding period: 10 years (limited pay)</li>
                                    <li className="flex items-start sm:col-span-2"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Designed to support long-term estate liquidity and intergenerational wealth transfer objectives</li>
                                </ul>
                            </div>

                            <div className="overflow-x-auto mb-12">
                                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider w-24">Step</th>
                                            <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider w-1/3">Planning Element</th>
                                            <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 1</td>
                                            <td className="p-4 font-semibold text-slate-700">Estate Freeze + Family HoldCo</td>
                                            <td className="p-4 text-slate-600">Shift future growth to next generation</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 2</td>
                                            <td className="p-4 font-semibold text-slate-700">Surplus profit movement</td>
                                            <td className="p-4 text-slate-600">Asset protection and planning capital</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 3</td>
                                            <td className="p-4 font-semibold text-slate-700">Corporate participating life insurance</td>
                                            <td className="p-4 text-slate-600">Estate liquidity and CDA planning</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 4</td>
                                            <td className="p-4 font-semibold text-slate-700">Liquidity Structuring Flexibility</td>
                                            <td className="p-4 text-slate-600">Liquidity flexibility within the broader estate and retirement planning framework</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ScrollAnimation>

                        {/* 4. Before vs After Structuring */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">4. Before vs After Structuring — Family Estate Structure</h2>
                            <div className="overflow-x-auto mb-12">
                                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-sm">
                                    <thead>
                                        <tr className="bg-slate-800 text-white">
                                            <th className="p-4 font-bold uppercase tracking-wider w-1/3">Planning Dimension</th>
                                            <th className="p-4 font-bold uppercase tracking-wider w-1/3 bg-slate-700">Before Structuring</th>
                                            <th className="p-4 font-bold uppercase tracking-wider w-1/3 bg-brand-gold/90">After Structuring</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Estate Liquidity</td>
                                            <td className="p-4 text-slate-600">Dependent on asset sales or dividend extraction</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Dedicated tax-efficient liquidity at second death</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Intergenerational Transfer</td>
                                            <td className="p-4 text-slate-600">Corporate wealth largely taxable on distribution</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Significant tax-free capital dividend capacity via CDA</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Asset Transition Risk</td>
                                            <td className="p-4 text-slate-600">Estate may need to liquidate corporate or real assets</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Liquidity available without disrupting asset base</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Tax Efficiency</td>
                                            <td className="p-4 text-slate-600">Estate value exposed to personal-level taxation</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Estate liquidity structure provides funding to offset estate-level tax exposure</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Capital Allocation</td>
                                            <td className="p-4 text-slate-600">Surplus retained or traditionally invested</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Capital repositioned into long-term estate structure</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Wealth Concentration Risk</td>
                                            <td className="p-4 text-slate-600">Wealth tied to operating and market assets</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Portion shifted into protected insurance-based asset class</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Estate Planning Certainty</td>
                                            <td className="p-4 text-slate-600">Outcome dependent on market values at death</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Defined estate liquidity outcome independent of market timing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ScrollAnimation>

                        {/* 5. Financial Outcome */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">5. Financial Outcome (Illustrative, projected to age 90)</h2>
                            <p className="text-slate-600 mb-6 text-sm italic">
                                Projections are based on current dividend scale assumptions for comparative planning purposes. Two planning scenarios were evaluated:
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                                    <h3 className="font-bold text-brand-gold text-lg mb-4">Retirement Liquidity Scenario</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                            <span className="text-slate-600">Retirement income support</span>
                                            <span className="font-bold text-brand-blue">≈ $230K/year</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                            <span className="text-slate-600">Remaining estate benefit</span>
                                            <span className="font-bold text-brand-blue">≈ $7.4M</span>
                                        </li>
                                        <li className="flex justify-between items-center bg-brand-gold/10 p-2 rounded">
                                            <span className="text-slate-700 font-semibold">CDA credit</span>
                                            <span className="font-bold text-brand-gold">≈ $18.45M</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                                    <h3 className="font-bold text-brand-blue text-lg mb-4">Estate-Focused Scenario</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                            <span className="text-slate-600">Projected death benefit</span>
                                            <span className="font-bold text-brand-blue">≈ $18.45M</span>
                                        </li>
                                        <li className="flex justify-between items-center bg-brand-gold/10 p-2 rounded">
                                            <span className="text-slate-700 font-semibold">CDA credit</span>
                                            <span className="font-bold text-brand-gold">≈ $18.45M</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-4 leading-normal italic">
                                CDA note (general): At death, a CDA credit is generally created equal to insurance proceeds minus ACB, enabling a tax-free capital dividend to shareholders. In long-duration modeling, ACB is projected to decline to zero, and CDA credit is independent of retirement liquidity modeling.
                            </p>
                        </ScrollAnimation>

                        {/* 6. Planning Impact */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-6 border-l-4 border-brand-gold pl-4 inline-block">6. Planning Impact</h2>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Long-term estate liquidity established independent of asset sale timing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Corporate wealth partially transitioned into a defined intergenerational transfer structure</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Reduction of estate exposure to market-dependent asset valuation at death</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Enhanced certainty in family wealth succession planning</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>

                        {/* 7. Suitability Factors */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">7. Suitability Factors</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Established corporate or family wealth base</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Primary planning focus on estate liquidity and intergenerational transfer</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Ability to allocate capital over a defined funding period</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Long-term family wealth preservation objectives</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center sm:col-span-2">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Preference for structured and predictable estate outcomes</span>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Professional Summary */}
                        <ScrollAnimation className="fade-in-up">
                            <div className="bg-brand-blue text-white p-8 rounded-xl shadow-xl mt-12">
                                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">Professional Summary</h2>
                                <p className="text-slate-200 leading-relaxed mb-8">
                                    This structure demonstrates how business wealth can be structurally transitioned into a long-term corporate estate planning framework designed to improve transfer certainty, tax efficiency, and estate liquidity for the next generation.
                                </p>

                                <div className="border-t border-white/20 pt-6">
                                    <h3 className="font-bold text-white mb-2">Next Step</h3>
                                    <p className="text-slate-300 text-sm mb-6">
                                        A confidential review can evaluate whether a structured corporate estate planning approach aligns with your family wealth objectives, succession priorities, and long-term transfer planning, in coordination with your professional advisors.
                                    </p>
                                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded-sm hover:bg-white hover:text-brand-blue transition shadow-md uppercase tracking-wider text-sm">
                                        Book a Private Strategy Review
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>
        </main>
    );
}
