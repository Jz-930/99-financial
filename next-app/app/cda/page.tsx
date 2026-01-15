
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CDAPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">CDA — Capital Dividend Account</h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Tax-Free Corporate Wealth Extraction for Canadian Business Owners.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            The Capital Dividend Account (CDA) is one of the most powerful — yet often overlooked — tax planning tools available to Canadian-Controlled Private Corporations (CCPCs). When structured properly, the CDA allows business owners to extract corporate wealth completely tax-free, creating a significant long-term advantage for estate planning, succession, and wealth transfer.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* What Is a CDA? */}
            <section className="py-20 bg-brand-light border-y border-slate-200 relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">1. What Is a Capital Dividend Account (CDA)?</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The CDA is a notional tax account used by the CRA that tracks amounts that can be paid out from a corporation to its shareholders as tax-free dividends.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                It is not a bank account — it is a tax mechanism that grants the corporation a unique privilege:
                            </p>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-gold shadow-sm my-6">
                                <p className="font-bold text-brand-blue text-lg">The ability to distribute certain types of gains to shareholders without triggering personal tax.</p>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                For business owners, this is one of the few remaining ways to move money out of the corporation without paying 45%–54% personal tax.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation className="fade-in-right relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/cda-planning.png"
                                alt="CDA Planning Concept"
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply"></div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* How Does a CDA Help Business Owners? */}
            <section className="py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue">2. How Does a CDA Help Business Owners?</h2>
                    </ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <ScrollAnimation className="bg-brand-blue/5 p-8 rounded-xl border border-brand-blue/10 hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-bold text-brand-blue mb-4">A properly structured CDA strategy allows you to:</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1.5"><i className="fa-solid fa-check"></i></span>Extract corporate retained earnings tax-free</li>
                                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1.5"><i className="fa-solid fa-check"></i></span>Multiply net estate value for the next generation</li>
                                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1.5"><i className="fa-solid fa-check"></i></span>Offset corporate tax on passive investments</li>
                                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1.5"><i className="fa-solid fa-check"></i></span>Create liquidity for succession or estate settlement</li>
                                <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1.5"><i className="fa-solid fa-check"></i></span>Move funds from your corporation into family hands without erosion</li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-brand-gold/10 p-8 rounded-xl flex flex-col justify-center items-center text-center border border-brand-gold/30 hover:shadow-lg transition duration-300" delay={100}>
                            <i className="fa-solid fa-vault text-brand-gold text-5xl mb-6"></i>
                            <p className="text-xl font-bold text-brand-blue mb-2">Most importantly:</p>
                            <p className="text-lg text-slate-700">Corporate-owned life insurance is the most efficient and predictable way to build CDA credit.</p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* How Life Insurance Creates CDA Credit */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-10" style={{ backgroundImage: `radial-gradient(#ea8d22 1px, transparent 1px)`, backgroundSize: `30px 30px` }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">3. How Life Insurance Creates CDA Credit</h2>
                            <p className="text-lg text-slate-300 mb-6">When a corporation owns a participating life insurance policy:</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold mr-4 shrink-0">1</span>The policy grows tax-sheltered</li>
                                <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold mr-4 shrink-0">2</span>Upon death, the death benefit is paid to the corporation</li>
                                <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold mr-4 shrink-0">3</span>The amount above the policy’s adjusted cost basis (ACB) is credited to the CDA</li>
                                <li className="flex items-center"><span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold mr-4 shrink-0">4</span>The corporation can then pay this amount out tax-free to shareholders or family members</li>
                            </ul>
                        </ScrollAnimation>
                        <ScrollAnimation className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 fade-in-right">
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4">Example Calculation</h3>
                            <div className="space-y-4 text-lg">
                                <div className="flex justify-between">
                                    <span className="text-slate-300">Corporate-owned policy death benefit:</span>
                                    <span className="font-bold text-white">$3,000,000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-300">Policy ACB at death:</span>
                                    <span className="font-bold text-red-300">($200,000)</span>
                                </div>
                                <div className="pt-4 border-t border-white/20 flex justify-between text-xl">
                                    <span className="text-brand-gold font-bold">CDA credit created:</span>
                                    <span className="font-bold text-brand-gold">$2,800,000</span>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-green-900/40 rounded-lg border border-green-500/30 text-center">
                                <p className="font-bold text-green-300">→ Entire $2.8M can be paid out to family tax-free</p>
                                <p className="text-sm text-slate-300 mt-2">This simple structure can save families millions of dollars in personal tax.</p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Why Insurance Is the Most Powerful CDA Generator */}
            <section className="py-20 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-10">4. Why Insurance Is the Most Powerful CDA Generator</h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
                            Unlike capital gains or other CDA credits, which rely on the markets or business events, corporate-owned life insurance provides:
                        </p>
                    </ScrollAnimation>

                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            { icon: "fa-lock", text: "Guaranteed CDA creation" },
                            { icon: "fa-regular fa-clock", text: "Predictable timing" },
                            { icon: "fa-temperature-arrow-up", text: "Large, immediate credit" },
                            { icon: "fa-chart-simple", text: "No impact from market volatility" },
                            { icon: "fa-leaf", text: "Built-in tax efficiency" },
                        ].map((item, idx) => (
                            <ScrollAnimation key={idx} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64 border-t-4 border-brand-gold hover:-translate-y-1 transition duration-300" delay={idx * 50}>
                                <div className="text-brand-gold text-3xl mb-3"><i className={`fa-solid ${item.icon}`}></i></div>
                                <h4 className="font-bold text-brand-blue">{item.text}</h4>
                            </ScrollAnimation>
                        ))}
                    </div>

                    <ScrollAnimation className="inline-block bg-brand-blue/10 px-8 py-4 rounded-full fade-in-up">
                        <p className="text-xl font-bold text-brand-blue">CDA + life insurance is not an “insurance product” — it is a <span className="text-brand-gold">corporate tax extraction strategy</span>.</p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Typical Client Situations */}
            <section className="py-20 bg-brand-light relative">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation className="order-2 md:order-1 fade-in-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">5. Typical Client Situations</h2>
                            <p className="text-lg text-slate-600 mb-6">CDA planning is highly effective for:</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Business owners with large retained earnings",
                                    "Incorporated professionals (lawyers, accountants, doctors, engineers)",
                                    "Family-owned companies preparing for succession",
                                    "Owners concerned about taxes on estate settlement",
                                    "High-net-worth families wanting to transfer wealth efficiently"
                                ].map((txt, i) => (
                                    <li key={i} className="flex items-center text-slate-700 bg-white p-3 rounded shadow-sm">
                                        <i className="fa-solid fa-user-tie text-brand-gold mr-4"></i>{txt}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-bold text-brand-blue text-lg">If your corporation has $300K–$2M in retained earnings, CDA planning becomes essential.</p>
                        </ScrollAnimation>
                        <ScrollAnimation className="order-1 md:order-2 bg-brand-blue text-white p-10 rounded-2xl shadow-xl text-center fade-in-right">
                            <h3 className="text-2xl font-bold mb-6">CDA Benefits at a Glance</h3>
                            <div className="space-y-6 text-left">
                                <div>
                                    <p className="text-brand-gold font-bold uppercase text-xs tracking-wider mb-2">For the Corporation</p>
                                    <p>Tax-sheltered asset growth • Efficient use of corporate cash • Estate liquidity</p>
                                </div>
                                <div className="w-full h-px bg-white/20"></div>
                                <div>
                                    <p className="text-brand-gold font-bold uppercase text-xs tracking-wider mb-2">For the Shareholders</p>
                                    <p>Tax-free dividend extraction • Intergenerational wealth transfer • Minimization of estate taxes</p>
                                </div>
                                <div className="w-full h-px bg-white/20"></div>
                                <div>
                                    <p className="text-brand-gold font-bold uppercase text-xs tracking-wider mb-2">For the Family</p>
                                    <p>Guaranteed tax-free capital • Smoother estate settlement • Preservation of business value</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="text-center fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-12">7. Case Study: CCPC Owner With $500,000 Annual Profit</h2>
                    </ScrollAnimation>

                    <ScrollAnimation className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row fade-in-up">
                        <div className="md:w-1/3 bg-slate-100 p-8 flex flex-col justify-center border-r border-slate-200">
                            <div className="mb-6">
                                <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Profile</span>
                                <h4 className="text-xl font-bold text-brand-blue mt-2">45-year-old business owner</h4>
                                <p className="text-slate-600 mt-2">Profitable CCPC, excess cash building up.</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Strategy</span>
                                <ul className="mt-2 text-slate-600 space-y-2 text-sm">
                                    <li>• Corporate-owned par life insurance ($100k/yr premium)</li>
                                    <li>• Long-term CDA extraction plan</li>
                                    <li>• Succession and estate planning integration</li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-10 bg-brand-dark text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="logo-pattern-bg opacity-10"></div>
                            <div className="relative z-10">
                                <h4 className="text-2xl font-serif font-bold text-brand-gold mb-6">Outcome</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-3xl font-bold text-white mb-2">$10M+</p>
                                        <p className="text-slate-400 text-sm">Projected Tax-Free CDA Room at Age 90</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="flex items-center"><i className="fa-solid fa-check text-green-400 mr-2"></i> Family receives tax-free distribution</p>
                                        <p className="flex items-center"><i className="fa-solid fa-check text-green-400 mr-2"></i> Corporate tax exposure reduced</p>
                                        <p className="flex items-center"><i className="fa-solid fa-check text-green-400 mr-2"></i> Liquidity for estate needs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* How CDA Planning Fits With IFA */}
            <section className="py-20 bg-brand-light border-y border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">8. How CDA Planning Fits With IFA</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            When combined with an IFA loan, the structure becomes even more versatile:
                        </p>
                    </ScrollAnimation>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "fa-hand-holding-dollar", text: "Corporation keeps liquidity" },
                            { icon: "fa-seedling", text: "Policy continues to grow tax-sheltered" },
                            { icon: "fa-percent", text: "Interest is tax-deductible" },
                            { icon: "fa-up-right-from-square", text: "CDA grows untouched" }
                        ].map((item, idx) => (
                            <ScrollAnimation key={idx} className="bg-white p-6 rounded-lg shadow hover:-translate-y-1 transition duration-300" delay={idx * 50}>
                                <div className="text-brand-gold text-2xl mb-3"><i className={`fa-solid ${item.icon}`}></i></div>
                                <p className="font-bold text-brand-blue text-sm">{item.text}</p>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 lg:py-24 bg-brand-blue text-white text-center relative">
                <div className="logo-pattern-bg opacity-10"></div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">9. Is CDA Right for You?</h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Understanding CDA is essential for any business owner looking to optimize long-term tax outcomes and legacy value.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation className="bg-white/5 rounded-xl p-8 mb-12 text-left inline-block w-full backdrop-blur-sm border border-white/10" delay={100}>
                        <p className="font-bold text-brand-gold mb-4 text-center uppercase tracking-widest text-sm">Checklist</p>
                        <ul className="space-y-3 text-lg md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3">
                            <li><i className="fa-solid fa-check text-brand-gold mr-3"></i>Your corporation has retained earnings</li>
                            <li><i className="fa-solid fa-check text-brand-gold mr-3"></i>You are planning for retirement or legacy</li>
                            <li><i className="fa-solid fa-check text-brand-gold mr-3"></i>You want to extract funds tax-free</li>
                            <li><i className="fa-solid fa-check text-brand-gold mr-3"></i>You want to minimize personal and estate tax</li>
                            <li className="md:col-span-2 text-center mt-2"><i className="fa-solid fa-check text-brand-gold mr-3"></i>You want to protect your corporation’s value for your family</li>
                        </ul>
                    </ScrollAnimation>

                    <ScrollAnimation className="mt-8 fade-in-up" delay={200}>
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-bold text-xl py-5 px-12 rounded-sm hover:bg-white hover:text-brand-blue transition transform hover:-translate-y-1 shadow-xl">
                            Book a Discovery Call
                        </a>
                        <p className="mt-6 text-slate-400">See how CDA planning can work for your corporation.</p>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
