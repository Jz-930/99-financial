
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CaseStudiesPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Proven Results</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Case Studies
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Real-world examples of how we help Canadian business owners and professionals build tax-efficient wealth.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

                    {/* Case 1 */}
                    <ScrollAnimation className="fade-in-up">
                        <Link href="/case-studies/construction-company-owner" className="block group">
                            <div className="bg-white rounded-xl shadow-lg border-2 border-slate-100 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-blue hover:-translate-y-2 flex flex-col md:flex-row transform">
                                <div className="md:w-1/3 bg-slate-800 min-h-[250px] relative overflow-hidden">
                                    <Image
                                        src="/images/construction-company-owner.jpg"
                                        alt="Construction Company Owner"
                                        fill
                                        className="object-cover transition transform group-hover:scale-110 duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Construction</span>
                                    </div>
                                </div>
                                <div className="p-10 md:w-2/3 flex flex-col justify-center relative">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl text-slate-300 font-serif font-bold">01</div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">Construction Company Owner — Annual Profit $500,000</h2>
                                    <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-2">
                                        A successful construction business facing high taxes and trapped capital discovers a disciplined, tax-efficient framework to optimize retained earnings.
                                    </p>
                                    <div className="flex items-center text-brand-blue font-bold group-hover:translate-x-2 transition duration-300">
                                        Read Full Case Study <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </ScrollAnimation>

                    {/* Case 2 */}
                    <ScrollAnimation className="fade-in-up">
                        <Link href="/case-studies/ifa-case-study" className="block group">
                            <div className="bg-white rounded-xl shadow-lg border-2 border-slate-100 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-blue hover:-translate-y-2 flex flex-col md:flex-row-reverse transform">
                                <div className="md:w-1/3 bg-slate-800 min-h-[250px] relative overflow-hidden">
                                    <Image
                                        src="/images/ifa-case-study.jpg"
                                        alt="IFA Case Study"
                                        fill
                                        className="object-cover transition transform group-hover:scale-110 duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Liquidity Strategy</span>
                                    </div>
                                </div>
                                <div className="p-10 md:w-2/3 flex flex-col justify-center relative">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl text-slate-300 font-serif font-bold">02</div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">IFA Case Study — Male Age 45, Non-Smoker</h2>
                                    <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-2">
                                        Leveraging an Immediate Financing Arrangement (IFA) to maintain corporate liquidity while building long-term, tax-efficient wealth.
                                    </p>
                                    <div className="flex items-center text-brand-blue font-bold group-hover:translate-x-2 transition duration-300">
                                        Read Full Case Study <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </ScrollAnimation>

                    {/* Case 3 */}
                    <ScrollAnimation className="fade-in-up">
                        <Link href="/case-studies/medical-professional" className="block group">
                            <div className="bg-white rounded-xl shadow-lg border-2 border-slate-100 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-blue hover:-translate-y-2 flex flex-col md:flex-row transform">
                                <div className="md:w-1/3 bg-slate-800 min-h-[250px] relative overflow-hidden">
                                    <Image
                                        src="/images/medical-professional.jpg"
                                        alt="Medical Professional"
                                        fill
                                        className="object-cover transition transform group-hover:scale-110 duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Medical Professional</span>
                                    </div>
                                </div>
                                <div className="p-10 md:w-2/3 flex flex-col justify-center relative">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl text-slate-300 font-serif font-bold">03</div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">Medical Professional — Annual Income $600,000</h2>
                                    <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-2">
                                        For incorporated doctors, optimizing corporate structures and building long-term tax-efficient wealth is essential. See why Corporate Par is a superior alternative to RRSPs.
                                    </p>
                                    <div className="flex items-center text-brand-blue font-bold group-hover:translate-x-2 transition duration-300">
                                        Read Full Case Study <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </ScrollAnimation>

                    {/* Case 4 */}
                    <ScrollAnimation className="fade-in-up">
                        <Link href="/case-studies/family-business-transition" className="block group">
                            <div className="bg-white rounded-xl shadow-lg border-2 border-slate-100 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-blue hover:-translate-y-2 flex flex-col md:flex-row-reverse transform">
                                <div className="md:w-1/3 bg-slate-800 min-h-[250px] relative overflow-hidden">
                                    <Image
                                        src="/images/family-business-transition.jpg"
                                        alt="Family Business"
                                        fill
                                        className="object-cover transition transform group-hover:scale-110 duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Succession</span>
                                    </div>
                                </div>
                                <div className="p-10 md:w-2/3 flex flex-col justify-center relative">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl text-slate-300 font-serif font-bold">04</div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">Family Business Transitioning to the Next Generation</h2>
                                    <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-2">
                                        Combining an estate freeze with corporate-owned participating life insurance to lock in tax liabilities and shift growth to the next generation.
                                    </p>
                                    <div className="flex items-center text-brand-blue font-bold group-hover:translate-x-2 transition duration-300">
                                        Read Full Case Study <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </ScrollAnimation>

                    {/* Case 5 */}
                    <ScrollAnimation className="fade-in-up">
                        <Link href="/case-studies/high-income-lawyer" className="block group">
                            <div className="bg-white rounded-xl shadow-lg border-2 border-slate-100 overflow-hidden hover:shadow-2xl transition duration-500 hover:border-brand-blue hover:-translate-y-2 flex flex-col md:flex-row transform">
                                <div className="md:w-1/3 bg-slate-800 min-h-[250px] relative overflow-hidden">
                                    <Image
                                        src="/images/high-income-lawyer.jpg"
                                        alt="High-Income Lawyer"
                                        fill
                                        className="object-cover transition transform group-hover:scale-110 duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">Professional</span>
                                    </div>
                                </div>
                                <div className="p-10 md:w-2/3 flex flex-col justify-center relative">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl text-slate-300 font-serif font-bold">05</div>
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">High-Income Lawyer — Annual Income $300,000</h2>
                                    <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-2">
                                        Solving the high tax burden and limited access to tax-efficient wealth building tools for high-income legal professionals.
                                    </p>
                                    <div className="flex items-center text-brand-blue font-bold group-hover:translate-x-2 transition duration-300">
                                        Read Full Case Study <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </ScrollAnimation>

                </div>
            </section>
        </main>
    );
}
