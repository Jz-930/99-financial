
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function ResourcesPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Knowledge Center</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Resources
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            In-depth guides and tools to help you understand corporate planning strategies.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {/* Guide 1 */}
                        <ScrollAnimation className="service-card bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col transition duration-500 h-full group hover:-translate-y-2">
                            <div className="mb-8 w-20 h-20 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue text-4xl group-hover:bg-brand-blue group-hover:text-white transition duration-500 icon-float">
                                <i className="fa-regular fa-file-pdf"></i>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">Participating Life Insurance Guide</h3>
                            <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                                A Foundation for Stable Growth & Long-Term Wealth Creation. Understand the mechanics and benefits.
                            </p>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <a href="/downloads/ParLife_Guide_99Financial.pdf" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-gold transition uppercase tracking-wider text-sm">
                                    Download PDF <i className="fa-solid fa-download ml-2"></i>
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Guide 2 */}
                        <ScrollAnimation className="service-card bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col transition duration-500 h-full group hover:-translate-y-2" delay={100}>
                            <div className="mb-8 w-20 h-20 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue text-4xl group-hover:bg-brand-blue group-hover:text-white transition duration-500 icon-float">
                                <i className="fa-regular fa-file-pdf"></i>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">CDA Guide for Business Owners</h3>
                            <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                                A Practical Framework for Tax-Free Wealth Transfer. Learn how to maximize your Capital Dividend Account.
                            </p>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <a href="/downloads/CDA_Guide_99Financial.pdf" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-gold transition uppercase tracking-wider text-sm">
                                    Download PDF <i className="fa-solid fa-download ml-2"></i>
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Guide 3 */}
                        <ScrollAnimation className="service-card bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl border border-slate-100 flex flex-col transition duration-500 h-full group hover:-translate-y-2" delay={200}>
                            <div className="mb-8 w-20 h-20 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue text-4xl group-hover:bg-brand-blue group-hover:text-white transition duration-500 icon-float">
                                <i className="fa-regular fa-file-pdf"></i>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition duration-300">IFA Guide for Business Owners</h3>
                            <p className="text-slate-600 mb-8 font-medium leading-relaxed flex-grow">
                                Leveraging Corporate-Owned Insurance for Liquidity & Tax Efficiency. Explore the Immediate Financing Arrangement.
                            </p>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <a href="/downloads/IFA.pdf" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-gold transition uppercase tracking-wider text-sm">
                                    Download PDF <i className="fa-solid fa-download ml-2"></i>
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Complete Guide */}
                        <ScrollAnimation className="service-card bg-brand-dark p-10 rounded-xl shadow-xl hover:shadow-2xl border border-slate-700 flex flex-col transition duration-500 h-full group hover:-translate-y-2 relative overflow-hidden" delay={300}>
                            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <div className="mb-8 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gold text-4xl group-hover:bg-brand-gold group-hover:text-white transition duration-500 icon-float relative z-10">
                                <i className="fa-solid fa-file-zipper"></i>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-brand-gold transition duration-300 relative z-10">Complete Corporate Planning Guide</h3>
                            <p className="text-slate-300 mb-8 font-medium leading-relaxed flex-grow relative z-10">
                                Get the comprehensive package. Contains: Participating Life Insurance Guide + CDA Guide + IFA Guide.
                            </p>
                            <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                                <a href="/downloads/Combined_99Financial_Par_CDA_IFA_Guide.pdf" className="inline-flex items-center text-brand-gold font-bold hover:text-white transition uppercase tracking-wider text-sm">
                                    Download All <i className="fa-solid fa-download ml-2"></i>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="mt-24 fade-in-up">
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative h-64 lg:h-auto min-h-[300px]">
                                    <Image
                                        src="/images/Have-Questions.jpg"
                                        alt="Consult with 99 Financial"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
                                </div>
                                <div className="p-10 lg:p-14 flex flex-col justify-center">
                                    <h3 className="text-3xl font-serif font-bold text-brand-blue mb-6">Have Questions?</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                        Corporate financial planning can be complex. Whether you need clarification on a specific strategy or want to discuss your unique situation, we're here to help.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-5">
                                        <Link href="/faq" className="inline-flex justify-center items-center bg-transparent border-2 border-brand-blue text-brand-blue font-bold py-4 px-8 rounded hover:bg-brand-blue hover:text-white transition duration-300">
                                            View FAQ
                                        </Link>
                                        <Link href="/contact" className="inline-flex justify-center items-center bg-brand-gold text-white font-bold py-4 px-8 rounded shadow-lg hover:bg-brand-goldHover hover:-translate-y-1 transition duration-300 transform">
                                            Book Consultation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </main>
    );
}
