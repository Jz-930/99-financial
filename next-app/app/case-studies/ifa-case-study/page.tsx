
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function IFACaseStudyPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #2</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">IFA Case Study — Male Age 45, Non-Smoker</h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Corporate-Owned Participating Life Insurance + Immediate Financing Arrangement (IFA)
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-20 lg:py-24 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <ScrollAnimation className="fade-in-up">
                            <div className="flex flex-wrap gap-4 mb-10 justify-center">
                                <span className="bg-slate-100 px-4 py-2 rounded-full text-slate-600 font-bold border border-slate-200 shadow-sm">Annual Premium: $100,000 for 20 years</span>
                                <span className="bg-slate-100 px-4 py-2 rounded-full text-slate-600 font-bold border border-slate-200 shadow-sm">Initial Coverage: $2.6 million</span>
                                <span className="bg-slate-100 px-4 py-2 rounded-full text-slate-600 font-bold border border-slate-200 shadow-sm">Loan Rate: Prime</span>
                            </div>

                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">Overview</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                A 45-year-old male, non-smoker, establishes a corporate-owned participating life insurance program with annual premiums of $100,000 for 20 years, providing an initial death benefit of $2.6 million.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                To maintain corporate liquidity, the company uses an Immediate Financing Arrangement (IFA). After paying each year’s premium, the corporation assigns the policy as collateral and borrows back the premium at Prime, allowing retained earnings to remain available for business operations or investment.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/ifa-case-study.jpg"
                                    alt="IFA Strategy"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">IFA Process</h2>
                            <div className="space-y-6 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 z-0"></div>
                                {[
                                    { title: "Insurance Approval", text: "The corporation applies for and is approved for a corporate-owned participating life insurance policy." },
                                    { title: "Premium Payment", text: "The corporation pays the annual premium of $100,000." },
                                    { title: "Collateral Assignment to the Bank", text: "The policy is assigned to a lending bank as collateral." },
                                    { title: "Bank Loan Advance", text: "After approval, the bank advances a loan—typically covering most or all of the premium—returning liquidity back to the corporation." },
                                    { title: "Monthly Interest Payments", text: "The corporation pays interest at Prime on the loan balance." },
                                    { title: "Repeat Annually", text: "Steps 2–5 are repeated each year during the funding period." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex relative z-10 group p-4 rounded-xl hover:bg-slate-50 transition duration-300">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl border-4 border-white shadow-md group-hover:scale-110 group-hover:bg-brand-gold transition duration-300">{idx + 1}</div>
                                        <div className="ml-6 pt-2">
                                            <h4 className="text-lg font-bold text-brand-blue group-hover:translate-x-1 transition duration-300">{step.title}</h4>
                                            <p className="text-slate-600">{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-center font-medium text-slate-700 italic border-l-4 border-brand-gold pl-4 bg-slate-50 p-4 rounded-r shadow-sm">
                                This structure preserves cash flow, creates long-term tax-efficient growth, and generates significant CDA credit.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">IFA Key Outcomes by Age 85</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="text-brand-gold text-2xl mb-2 group-hover:scale-125 transition duration-300 origin-left"><i className="fa-solid fa-coins"></i></div>
                                    <h4 className="font-bold text-brand-blue mb-2">Total Interest Cost ≈ $540,000</h4>
                                    <p className="text-slate-600 text-sm">Beginning in year 21, the client can use additional IFA loan advances to fund the ongoing interest payments.</p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="text-brand-gold text-2xl mb-2 group-hover:scale-125 transition duration-300 origin-left"><i className="fa-solid fa-chart-line"></i></div>
                                    <h4 className="font-bold text-brand-blue mb-2">Total net estate ≈ $6.26 million</h4>
                                    <p className="text-slate-600 text-sm">Reflecting long-term dividend growth inside the participating policy.</p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="text-brand-gold text-2xl mb-2 group-hover:scale-125 transition duration-300 origin-left"><i className="fa-solid fa-file-invoice-dollar"></i></div>
                                    <h4 className="font-bold text-brand-blue mb-2">CDA Credit ≈ $8.98 million</h4>
                                    <p className="text-slate-600 text-sm">Upon death, the corporation receives the policy’s death benefit. After subtracting the ACB, the credit is available for tax-free distribution.</p>
                                </div>
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="text-brand-gold text-2xl mb-2 group-hover:scale-125 transition duration-300 origin-left"><i className="fa-solid fa-hand-holding-heart"></i></div>
                                    <h4 className="font-bold text-brand-blue mb-2">Tax-Free Distribution</h4>
                                    <p className="text-slate-600 text-sm">With a CDA credit of ~$8.98 million, the corporation can distribute ≈ $8.98 million tax-free to the shareholder’s family or estate.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="bg-brand-dark text-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition duration-500 cursor-default">
                                <h2 className="text-2xl font-serif font-bold text-brand-gold mb-6">Summary of Value Created</h2>
                                <ul className="space-y-4 text-lg">
                                    <li className="flex items-center group p-2 rounded hover:bg-white/5 transition"><i className="fa-solid fa-check text-green-400 mr-3 group-hover:scale-125 transition"></i>Maintains corporate liquidity through annual IFA loans</li>
                                    <li className="flex items-center group p-2 rounded hover:bg-white/5 transition"><i className="fa-solid fa-check text-green-400 mr-3 group-hover:scale-125 transition"></i>Creates long-term tax-efficient growth inside the corporation</li>
                                    <li className="flex items-center w-full border-t border-white/10 pt-4 mt-2 justify-between">
                                        <span>Total interest cost</span>
                                        <span className="font-bold">$540K</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Total net estate</span>
                                        <span className="font-bold">≈ $6.26M</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-brand-gold font-bold">Expected tax-free legacy</span>
                                        <span className="text-brand-gold font-bold">≈ $8.98M</span>
                                    </li>
                                    <li className="flex items-center text-sm text-slate-400 mt-2">Efficient intergenerational transfer via CDA</li>
                                </ul>
                            </div>
                        </ScrollAnimation>

                        <div className="mt-12 text-center">
                            <Link href="/contact" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-blue transition shadow-md border border-brand-gold">
                                See How IFA Works For You
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
