
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Tax-Free Retirement Income | 99 Financial Inc.',
    description: 'Create a stream of tax-free retirement income using corporate-owned life insurance strategies.',
};

export default function TaxFreeRetirement() {
    return (
        <>
            <section className="hero-gradient py-20 text-white relative">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Corporate Strategy</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6">Tax-Free Retirement Income</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">Turn corporate retained earnings into tax-free personal income.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">The Problem: Taxable Retirement Income</h2>
                            <div className="w-20 h-1 bg-brand-gold mb-8"></div>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                For many Canadian entrepreneurs and incorporated professionals, traditional retirement planning often leads to one predictable outcome: taxable income in your retirement years. Withdrawing money from a corporation—whether through salary or dividends—triggers significant personal tax.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A properly structured corporate-owned participating life insurance strategy offers a sophisticated alternative: the ability to build long-term, tax-advantaged assets inside your corporation while creating a stream of tax-free retirement income for your future.
                            </p>

                            <div className="bg-brand-light p-8 rounded-lg border border-slate-100 mt-8">
                                <h3 className="text-xl font-bold text-brand-blue mb-4">Key Benefits</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>
                                        <div>
                                            <strong className="block text-brand-blue">Tax-Free Income in Retirement</strong>
                                            <span className="text-slate-600 text-sm">Unlock a consistent stream of tax-free cash flow without selling assets.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>
                                        <div>
                                            <strong className="block text-brand-blue">Maintain Control of Capital</strong>
                                            <span className="text-slate-600 text-sm">Your corporation retains the funds and continues to benefit from growth.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3"></i>
                                        <div>
                                            <strong className="block text-brand-blue">Preserve Estate Value</strong>
                                            <span className="text-slate-600 text-sm">Insurance proceeds credit your CDA for tax-free distribution to heirs.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 shadow-lg">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">How It Works</h3>
                                <div className="space-y-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-blue">Grow Tax-Deferred Corporate Assets</h4>
                                            <p className="text-slate-600 text-sm mt-1">Premiums are paid using retained earnings. Funds accumulate inside a participating policy, compounding tax-deferred.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-blue">Access Liquidity Tax-Free</h4>
                                            <p className="text-slate-600 text-sm mt-1">Access the rising cash value through policy loans or bank collateral loans. This provides liquidity without paying personal income tax.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-blue">Enjoy Tax-Free Cash Flow</h4>
                                            <p className="text-slate-600 text-sm mt-1">Use loans to create tax-free retirement income. These distributions do not count as taxable income and do not affect government benefits.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">4</div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-blue">Maximize Legacy</h4>
                                            <p className="text-slate-600 text-sm mt-1">At death, insurance proceeds repay loans and the balance flows through your Capital Dividend Account (CDA) to heirs tax-free.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <div className="bg-brand-dark text-white p-10 rounded-xl max-w-5xl mx-auto">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-center">A Powerful Strategy for CCPC Owners</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="mb-4 text-slate-300">This structure is especially valuable for:</p>
                                    <ul className="space-y-2 text-brand-gold">
                                        <li><i className="fa-solid fa-angle-right mr-2"></i> Business owners with significant retained earnings</li>
                                        <li><i className="fa-solid fa-angle-right mr-2"></i> Professionals with professional corporations</li>
                                        <li><i className="fa-solid fa-angle-right mr-2"></i> High-income earners seeking stable, long-term wealth</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center">
                                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="bg-brand-gold text-white font-bold py-4 px-8 rounded-sm hover:bg-white hover:text-brand-blue transition shadow-lg text-center w-full md:w-auto">
                                        Book a Private Strategy Review
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
