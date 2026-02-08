import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function IFACaseStudyPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[300px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #2</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">Corporate IFA Strategy</h1>
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
                                            <td className="p-4 text-slate-600">Specialized building materials company</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Location</td>
                                            <td className="p-4 text-slate-600">Markham Ontario</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Owner</td>
                                            <td className="p-4 text-slate-600">Male, 45</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Annual Revenue</td>
                                            <td className="p-4 text-slate-600">~$2.1M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">After-Tax Profit</td>
                                            <td className="p-4 text-slate-600">~$600K</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Retained Earnings</td>
                                            <td className="p-4 text-slate-600">~$3.8M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Commercial Financing</td>
                                            <td className="p-4 text-slate-600">~$12M fixed-asset loans</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-slate-600 mb-12">
                                The company was financially strong but had surplus capital accumulating beyond operational needs.
                            </p>
                        </ScrollAnimation>

                        {/* 2. Planning Challenge */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">2. Planning Challenge</h2>
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm mb-12">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Significant retained earnings but inefficient extraction options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Desire to maintain business liquidity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Need for long-term estate efficiency</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Potential balance-sheet strain in the event of unexpected loss of the principal operator</span>
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
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Policy type: Corporate-owned participating whole life insurance</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Initial death benefit: ~$5.2M</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Annual premium: $200,000</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Funding period: 20 years</li>
                                    <li className="flex items-start sm:col-span-2"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Financing support integrated through the IFA structure</li>
                                    <li className="flex items-start sm:col-span-2"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Designed to align with corporate cash flow capacity and existing lending framework</li>
                                </ul>
                                <p className="text-xs text-slate-500 mt-4 italic">IFA Premium funding occurred over 20 years, with lending used to support cash flow stability. From year 21 onward, interest servicing was structured within the lending arrangement.</p>
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
                                            <td className="p-4 font-semibold text-slate-700">Corporate-owned participating life insurance</td>
                                            <td className="p-4 text-slate-600">Long-term balance sheet asset</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 2</td>
                                            <td className="p-4 font-semibold text-slate-700">Immediate Financing Arrangement (IFA)</td>
                                            <td className="p-4 text-slate-600">Preserve corporate cash flow</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 3</td>
                                            <td className="p-4 font-semibold text-slate-700">Integrated lending + tax planning</td>
                                            <td className="p-4 text-slate-600">Capital structure optimization</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ScrollAnimation>

                        {/* 4. Before vs After Structuring */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">4. Before vs After Structuring</h2>
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
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Ownership Structure</td>
                                            <td className="p-4 text-slate-600">Corporate surplus idle or invested traditionally</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Surplus repositioned into structured insurance asset</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Growth Allocation</td>
                                            <td className="p-4 text-slate-600">Returns taxed annually</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Growth tax-deferred inside policy</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Retirement Liquidity</td>
                                            <td className="p-4 text-slate-600">Limited without large dividends</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Structured liquidity through financing arrangement</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Tax Exposure at Death</td>
                                            <td className="p-4 text-slate-600">Estate tax burden on corporate assets</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">CDA credit offsets estate tax exposure</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Asset Risk Profile</td>
                                            <td className="p-4 text-slate-600">Market and operational risk exposure</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Partially shifted to protected insurance structure</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Estate Transfer Efficiency</td>
                                            <td className="p-4 text-slate-600">Taxable distributions</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Large tax-free capital dividend capacity</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ScrollAnimation>

                        {/* 5. Financial Outcome */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">5. Financial Outcome (Illustrative, projected to age 90)</h2>
                            <p className="text-slate-600 mb-6 text-sm italic">
                                Projections are based on current dividend scale assumptions for comparative planning purposes.
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="w-full text-left border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider w-1/2">Metric</th>
                                            <th className="p-4 text-sm font-bold text-brand-blue uppercase tracking-wider">Projection</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700">Projected Death Benefit</td>
                                            <td className="p-4 font-bold text-brand-gold text-lg">$21.84M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700">CDA Credit Created</td>
                                            <td className="p-4 font-bold text-green-600">$21.84M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700">Total Economic Cost to Age 90</td>
                                            <td className="p-4 text-slate-600">~$1.09M</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700">Loan Balance</td>
                                            <td className="p-4 text-slate-600">~$6.68M</td>
                                        </tr>
                                        <tr className="bg-brand-blue/5">
                                            <td className="p-4 font-bold text-brand-blue">Net Death Benefit After Loan</td>
                                            <td className="p-4 font-bold text-brand-blue text-lg">~$15.16M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-400 mb-12 italic">
                                CDA note (general): At death, a CDA credit is generally created equal to insurance proceeds minus ACB, enabling a tax-free capital dividend to shareholders.
                            </p>
                        </ScrollAnimation>

                        {/* 6. Planning Impact */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-6 border-l-4 border-brand-gold pl-4 inline-block">6. Planning Impact</h2>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Estate liquidity created without forced asset liquidation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Corporate liquidity preserved through structured financing integration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Corporate capital repositioned into a tax-efficient balance sheet asset</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Long-term economic cost efficiency relative to estate value created</span>
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
                                    <span className="text-slate-700 text-sm">Strong and consistent corporate profitability</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Stable and predictable operating cash flow</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Long-term planning horizon</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Comfort with structured lending arrangements</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center sm:col-span-2">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                    <span className="text-slate-700 text-sm">Alignment with integrated tax, lending, and corporate planning</span>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Professional Summary */}
                        <ScrollAnimation className="fade-in-up">
                            <div className="bg-brand-blue text-white p-8 rounded-xl shadow-xl mt-12">
                                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">Professional Summary</h2>
                                <p className="text-slate-200 leading-relaxed mb-8">
                                    This structure illustrates how integrated insurance and financing can be used as a corporate capital structure tool to enhance estate efficiency while preserving operating liquidity.
                                </p>

                                <div className="border-t border-white/20 pt-6">
                                    <h3 className="font-bold text-white mb-2">Next Step</h3>
                                    <p className="text-slate-300 text-sm mb-6">
                                        A confidential review can assess whether a similar capital structure approach aligns with your corporate balance sheet, tax profile, and long-term planning objectives, in coordination with your professional advisors.
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
