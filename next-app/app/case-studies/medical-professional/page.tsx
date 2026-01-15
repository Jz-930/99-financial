
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../../components/ScrollAnimation';

export default function MedicalProfessionalCasePage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Case Study #3</span>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">Medical Professional — Annual Income $600,000</h1>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-20 lg:py-24 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <ScrollAnimation className="fade-in-up">
                            <p className="text-xl leading-relaxed text-slate-600 mb-8">
                                Physicians earning $500K–$700K annually face one of the highest lifetime tax burdens in Canada. For incorporated doctors, optimizing corporate structures and building long-term tax-efficient wealth is essential for financial independence.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600 mb-12">
                                A corporate-owned participating whole life policy is one of the most effective tools available. It provides stable, tax-deferred growth, supports retirement planning, and functions as a superior alternative—or complement—to traditional RRSP strategies.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <div className="my-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/medical-professional.jpg"
                                    alt="Medical Professional"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-12 mb-6">Incorporation Advantages for Physicians</h2>
                            <p className="text-slate-600 mb-6">Most doctors in Ontario and across Canada operate through a Professional Corporation (PC). Incorporation provides powerful financial planning benefits:</p>

                            <div className="space-y-4 mb-10">
                                {[
                                    { title: "Lower Corporate Tax Rate vs. Personal Tax", text: "Corporate tax (12.2%–26.5%) is significantly lower than Personal tax (up to 53.53%). This allows physicians to retain more profit inside the corporation, creating a strong base for long-term investment." },
                                    { title: "Flexibility in Income Timing", text: "Physicians can control when and how they take money out through dividends or salary—optimal for maternity/paternity leave, part-time transitions, early retirement, or practice sale/wind-down." },
                                    { title: "Larger Capital Base for Long-Term Wealth", text: "As earnings accumulate within the PC, retained earnings become a long-term “engine” for future investment opportunities." },
                                    { title: "Enhanced Retirement and Succession Tools", text: "Corporate structures allow physicians to use corporate-owned insurance, access CDA tax-free distributions, and optimize estate planning." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex group p-4 rounded-xl hover:bg-slate-50 transition duration-300">
                                        <span className="bg-brand-blue/10 text-brand-blue font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1 group-hover:bg-brand-gold group-hover:text-white transition duration-300">{idx + 1}</span>
                                        <div>
                                            <strong className="text-brand-blue group-hover:text-brand-gold transition duration-300">{item.title}</strong>
                                            <p className="text-slate-600 text-sm mt-1">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="italic font-medium text-slate-700 border-l-4 border-brand-gold pl-4 bg-slate-50 py-3 rounded-r">
                                Incorporation is the foundation that enables more advanced wealth strategies—especially corporate-owned par insurance.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">Corporate Par as a Superior Alternative to RRSP</h2>
                            <p className="text-slate-600 mb-6">
                                High-income physicians quickly max out their RRSP limits, and many find RRSPs inadequate for long-term tax planning. Corporate par policies provide several advantages over an RRSP.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition duration-500 cursor-default">
                                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center"><i className="fa-solid fa-ban mr-2"></i> RRSP Limitations</h3>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        <li className="flex items-start group"><span className="text-red-500 mr-2 group-hover:scale-150 transition">•</span> RRSP room is based on earned income and capped annually</li>
                                        <li className="flex items-start group"><span className="text-red-500 mr-2 group-hover:scale-150 transition">•</span> A $600K income physician can contribute only about $30,780 (2024 limit)</li>
                                        <li className="flex items-start group"><span className="text-red-500 mr-2 group-hover:scale-150 transition">•</span> RRSP withdrawals in retirement are 100% taxable income</li>
                                        <li className="flex items-start group"><span className="text-red-500 mr-2 group-hover:scale-150 transition">•</span> RRSPs increase Old Age Security claw back</li>
                                        <li className="flex items-start group"><span className="text-red-500 mr-2 group-hover:scale-150 transition">•</span> Market volatility impacts retirement timing</li>
                                    </ul>
                                    <p className="mt-4 text-xs font-bold text-red-800 uppercase tracking-wide">Cannot keep up with high income</p>
                                </div>

                                <div className="bg-brand-blue/5 p-6 rounded-xl border border-brand-blue/20 shadow-sm hover:shadow-xl hover:bg-brand-blue/10 transition duration-500 cursor-default">
                                    <h3 className="text-xl font-bold text-brand-blue mb-4 flex items-center"><i className="fa-solid fa-check-circle mr-2"></i> Corporate Par Benefits</h3>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        <li className="flex items-start group"><span className="text-green-500 mr-2 group-hover:scale-150 transition">•</span> Funded with corporate after-tax dollars at a much lower tax cost</li>
                                        <li className="flex items-start group"><span className="text-green-500 mr-2 group-hover:scale-150 transition">•</span> No CRA-imposed contribution limits</li>
                                        <li className="flex items-start group"><span className="text-green-500 mr-2 group-hover:scale-150 transition">•</span> Cash value compounds tax-deferred</li>
                                        <li className="flex items-start group"><span className="text-green-500 mr-2 group-hover:scale-150 transition">•</span> Access funds in retirement tax-free through policy loans</li>
                                        <li className="flex items-start group"><span className="text-green-500 mr-2 group-hover:scale-150 transition">•</span> Death benefit credits the Capital Dividend Account (CDA) for tax-free distribution</li>
                                        <li className="flex items-start group"><span className="text-green-500 mr-2 group-hover:scale-150 transition">•</span> Virtually no market volatility</li>
                                    </ul>
                                    <p className="mt-4 text-xs font-bold text-brand-blue uppercase tracking-wide">Multi-million dollar retirement plan</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">Ideal Policy Design for a Physician Earning $600K</h2>
                            <div className="bg-white border border-brand-gold rounded-xl p-8 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-brand-gold text-white px-4 py-1 font-bold text-xs uppercase rounded-bl">Typical Structure</div>
                                <ul className="space-y-4">
                                    <li className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-slate-600">Annual premium</span>
                                        <span className="font-bold text-slate-800">$100,000–$200,000 (paid from retained earnings)</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-slate-600">Pay period</span>
                                        <span className="font-bold text-slate-800">10-pay or 20-pay</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-slate-600">Ownership</span>
                                        <span className="font-bold text-slate-800">The corporation owns and pays the policy</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-slate-600">Retirement access</span>
                                        <span className="font-bold text-slate-800">Via bank loans or policy loans</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-slate-600">Estate</span>
                                        <span className="font-bold text-slate-800">Death benefit creates CDA credits</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-center mt-4 text-slate-600 italic">This approach transforms taxable retained earnings into retirement income and tax-free intergenerational wealth.</p>
                        </ScrollAnimation>

                        <ScrollAnimation className="fade-in-up">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mt-16 mb-6">Long-Term Outcomes for the Physician</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-lg text-brand-gold mb-3 border-b border-brand-gold pb-2">By age 65</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><i className="fa-solid fa-caret-right text-brand-blue mr-2"></i>Strong, tax-deferred cash value inside the corporation</li>
                                        <li><i className="fa-solid fa-caret-right text-brand-blue mr-2"></i>Corporate funds stable source of retirement income</li>
                                        <li><i className="fa-solid fa-caret-right text-brand-blue mr-2"></i>Reduction in personal taxable withdrawals from the corporate</li>
                                        <li><i className="fa-solid fa-caret-right text-brand-blue mr-2"></i>Lower lifetime tax bill</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-brand-gold mb-3 border-b border-brand-gold pb-2">At death</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><i className="fa-solid fa-caret-right text-brand-blue mr-2"></i>Large tax-free insurance payout</li>
                                        <li><i className="fa-solid fa-caret-right text-brand-blue mr-2"></i>CDA credits allowing tax-free distribution to family</li>
                                        <li><i className="fa-solid fa-caret-right text-brand-blue mr-2"></i>Liquidity to fund estate taxes, avoiding forced sale of assets or practice shares</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-16 bg-slate-50 p-8 rounded-xl text-center hover:shadow-xl transition duration-500 cursor-default">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4">Summary</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    For physicians earning $600,000 annually, relying solely on RRSPs is insufficient and tax-inefficient. By leveraging the advantages of incorporation and redirecting retained earnings into a corporate-owned participating life insurance policy, doctors can achieve predictable growth, superior retirement planning, and tax-free intergenerational wealth.
                                </p>
                                <Link href="/contact" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-blue transition shadow-md hover:scale-105 active:scale-95 transform">
                                    Build Your Strategy
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </main>
    );
}
