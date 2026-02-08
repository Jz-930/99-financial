import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function ConstructionCompanyCasePage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[300px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #1</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">Construction Design Firm Owner</h1>
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
                                            <td className="p-4 text-slate-600">Construction design firm</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Location</td>
                                            <td className="p-4 text-slate-600">Toronto</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Owner</td>
                                            <td className="p-4 text-slate-600">Female, age 46</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Annual Profit</td>
                                            <td className="p-4 text-slate-600">~$500K</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50/50">Retained Earnings</td>
                                            <td className="p-4 text-slate-600">~$2.5M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-slate-600 mb-12">
                                The owner operates a profitable project-based design business with strong retained earnings accumulation inside the corporation.
                            </p>
                        </ScrollAnimation>

                        {/* 2. Planning Challenge */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4 inline-block">2. Planning Challenge</h2>
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm mb-12">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Corporate earnings accumulation exceeding efficient distribution capacity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Dividend extraction would result in significant personal-level taxation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3"></i>
                                        <span className="text-slate-700">Need to balance liquidity, retirement planning, and estate objectives</span>
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
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Initial death benefit: ~$2.64M</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Annual premium: $100,000</li>
                                    <li className="flex items-start"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Funding period: 20 years</li>
                                    <li className="flex items-start sm:col-span-2"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>Structure designed to align with corporate cash flow capacity</li>
                                    <li className="flex items-start sm:col-span-2"><span className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-2"></span>No external financing integration required</li>
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
                                            <td className="p-4 font-semibold text-slate-700">Corporate-owned participating life insurance</td>
                                            <td className="p-4 text-slate-600">Reposition corporate surplus into long-term planning asset</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 2</td>
                                            <td className="p-4 font-semibold text-slate-700">CDA-focused estate structure</td>
                                            <td className="p-4 text-slate-600">Enable future tax-free capital dividend capacity</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-brand-gold">Step 3</td>
                                            <td className="p-4 font-semibold text-slate-700">Collateral lending flexibility</td>
                                            <td className="p-4 text-slate-600">Preserve liquidity and optional retirement income</td>
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
                                            <td className="p-4 text-slate-600">Owner holds all growth in OpCo/HoldCo</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Growth partially repositioned into structured corporate asset</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Growth Allocation</td>
                                            <td className="p-4 text-slate-600">All appreciation increases estate tax exposure</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Future value partially converted to insurance-backed estate asset</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Retirement Liquidity</td>
                                            <td className="p-4 text-slate-600">Dependent on dividends or asset sale</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Collateral lending flexibility available</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Tax Exposure at Death</td>
                                            <td className="p-4 text-slate-600">Corporate value subject to taxation</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">CDA mechanism provides tax-efficient distribution capacity</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Asset Risk Profile</td>
                                            <td className="p-4 text-slate-600">Concentrated in operating business</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Diversified into insurance asset class</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-slate-700 bg-slate-50">Estate Transfer Efficiency</td>
                                            <td className="p-4 text-slate-600">Taxable wealth transfer</td>
                                            <td className="p-4 text-brand-blue font-medium bg-brand-blue/5">Structured tax-advantaged estate liquidity</td>
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
                                    <h3 className="font-bold text-brand-gold text-lg mb-4">If retirement income is used <span className="text-xs font-normal text-slate-500 block mt-1">(Collateral Loan Approach), from age 66 to 85</span></h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                            <span className="text-slate-600">Projected access to</span>
                                            <span className="font-bold text-brand-blue">~$170K/year</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                            <span className="text-slate-600">Remaining estate benefit</span>
                                            <span className="font-bold text-brand-blue">~$3.75M</span>
                                        </li>
                                        <li className="flex justify-between items-center bg-brand-gold/10 p-2 rounded">
                                            <span className="text-slate-700 font-semibold">CDA credit created</span>
                                            <span className="font-bold text-brand-gold">~$8.72M</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-slate-400 mt-4 leading-tight">Collateral loan note: CDA credit is generally based on insurance proceeds received (less ACB) and is not reduced by subsequent use of proceeds, including loan repayment.</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
                                    <h3 className="font-bold text-brand-blue text-lg mb-4">If retirement income is not used <span className="text-xs font-normal text-slate-500 block mt-1">(Estate-focused outcome)</span></h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                                            <span className="text-slate-600">Projected death benefit</span>
                                            <span className="font-bold text-brand-blue">~$9.37M</span>
                                        </li>
                                        <li className="flex justify-between items-center bg-brand-gold/10 p-2 rounded">
                                            <span className="text-slate-700 font-semibold">CDA credit</span>
                                            <span className="font-bold text-brand-gold">~$8.72M</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-slate-400 mt-4 leading-tight">CDA note (general): At death, a CDA credit is generally created equal to insurance proceeds minus ACB, enabling a tax-free capital dividend to shareholders.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* 6. Planning Impact */}
                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mt-12 mb-6 border-l-4 border-brand-gold pl-4 inline-block">6. Planning Impact</h2>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Corporate surplus converted into tax-efficient estate asset</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Liquidity flexibility without forced dividend extraction</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3"></i>
                                        <span className="text-slate-700 font-medium">Structured intergenerational wealth transfer</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>

                        {/* 7. Professional Summary */}
                        <ScrollAnimation className="fade-in-up">
                            <div className="bg-brand-blue text-white p-8 rounded-xl shadow-xl mt-12">
                                <h2 className="text-xl font-serif font-bold text-brand-gold mb-4">7. Professional Summary</h2>
                                <p className="text-slate-200 leading-relaxed mb-8">
                                    This case demonstrates how corporate retained earnings can be repositioned into a long-term corporate estate planning framework while preserving liquidity and retirement flexibility.
                                </p>

                                <div className="border-t border-white/20 pt-6">
                                    <h3 className="font-bold text-white mb-2">Next Step</h3>
                                    <p className="text-slate-300 text-sm mb-6">
                                        A confidential review can assess whether a similar corporate estate planning structure aligns with your tax profile and long-term planning objectives.
                                    </p>
                                    <Link href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded-sm hover:bg-white hover:text-brand-blue transition shadow-md uppercase tracking-wider text-sm">
                                        Book a Private Strategy Review
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>
        </main>
    );
}
