import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../components/ScrollAnimation';
// NumberCounter removed

export default function Home() {
    return (
        <>
            <section className="relative h-auto min-h-[85vh] flex items-center text-white py-20 lg:py-0 overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/images/Hero-video.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to right, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.75))' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-block py-1.5 px-4 mb-8 border border-brand-gold/50 bg-brand-gold/10 rounded-full backdrop-blur-sm">
                            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">For Canadian Business Owners</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold leading-relaxed md:leading-[1.45] mb-8 drop-shadow-xl">
                            Corporate Insurance & <br />
                            <span className="text-brand-gold">Tax-Optimized</span> Wealth Strategies
                        </h1>
                        <p className="text-base md:text-lg text-slate-200 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
                            Specialized in helping entrepreneurs, high-income professionals, and high-net-worth families build tax-efficient, long-term wealth through corporate-owned insurance, CDA strategies, and Immediate Financing Arrangements (IFA).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="bg-brand-gold text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-brand-goldHover transition shadow-lg text-center transform hover:-translate-y-1 duration-200">
                                Book a Consultation
                            </a>
                            <a href="#" className="bg-transparent border border-white/40 text-white px-10 py-4 rounded-sm font-semibold text-lg hover:bg-white hover:text-brand-blue transition text-center backdrop-blur-sm">
                                Join Our Monthly Webinar
                            </a>
                            <Link href="/resources" className="bg-transparent border border-white/40 text-white px-10 py-4 rounded-sm font-semibold text-lg hover:bg-white hover:text-brand-blue transition text-center backdrop-blur-sm">
                                Download Free Book
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation className="fade-in-left">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-6">
                                Tax-Efficient Corporate Planning for Canadian Entrepreneurs
                            </h2>
                            <div className="logo-pattern-bg"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-1 bg-brand-gold mb-8 animated-divider animate"></div>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    99 Financial Inc. is a Toronto-based advisory firm specializing in tax-efficient wealth strategies for Canadian entrepreneurs, incorporated professionals, and high-net-worth families.
                                </p>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    We focus on advanced corporate planning solutions that transform retained earnings into long-term, tax-free capital—helping business owners protect their wealth, reduce tax, and build a multi-generational legacy.
                                </p>
                                <Link href="/about" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-gold transition group text-lg">
                                    Learn More About Us
                                    <i className="fa-solid fa-arrow-right ml-3 transform group-hover:translate-x-1 transition text-sm"></i>
                                </Link>
                            </div>

                        </ScrollAnimation>

                        <ScrollAnimation className="relative fade-in-right">
                            <div className="absolute -inset-4 bg-brand-gold/20 rounded-lg transform rotate-2"></div>
                            <div className="bg-brand-light p-10 rounded-lg border border-slate-100 shadow-xl relative z-10 expertise-card">
                                <h3 className="text-xl font-serif font-bold text-brand-blue mb-6 border-b border-slate-200 pb-4">Our Core Expertise</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start list-item-stagger animate">
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-4"></i>
                                        <span className="text-slate-700 font-medium">Corporate-Owned Participating Life Insurance</span>
                                    </li>
                                    <li className="flex items-start list-item-stagger animate" style={{ transitionDelay: '0.1s' }}>
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-4"></i>
                                        <span className="text-slate-700 font-medium">CDA (Capital Dividend Account) Planning</span>
                                    </li>
                                    <li className="flex items-start list-item-stagger animate" style={{ transitionDelay: '0.2s' }}>
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-4"></i>
                                        <span className="text-slate-700 font-medium">Immediate Financing Arrangements (IFA)</span>
                                    </li>
                                    <li className="flex items-start list-item-stagger animate" style={{ transitionDelay: '0.3s' }}>
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-4"></i>
                                        <span className="text-slate-700 font-medium">Retained Earnings Optimization</span>
                                    </li>
                                    <li className="flex items-start list-item-stagger animate" style={{ transitionDelay: '0.4s' }}>
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-4"></i>
                                        <span className="text-slate-700 font-medium">Estate Freeze & Family Business Succession</span>
                                    </li>
                                    <li className="flex items-start list-item-stagger animate" style={{ transitionDelay: '0.5s' }}>
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-4"></i>
                                        <span className="text-slate-700 font-medium">Tax-Free Retirement Income Strategies for CCPCs</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="mt-20 pt-10 border-t border-slate-100 fade-in">
                        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by Canada&apos;s Top Financial Institutions</p>
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale transition duration-500 items-center">
                            <span className="text-2xl font-serif font-bold text-slate-500 flex items-center gap-2 logo-container"><i className="fa-solid fa-building"></i> Manulife</span>
                            <span className="text-2xl font-serif font-bold text-slate-500 flex items-center gap-2 logo-container"><i className="fa-solid fa-leaf"></i> Canada Life</span>
                            <span className="text-2xl font-serif font-bold text-slate-500 flex items-center gap-2 logo-container"><i className="fa-regular fa-sun"></i> Sun Life</span>
                            <span className="text-2xl font-serif font-bold text-slate-500 flex items-center gap-2 logo-container"><i className="fa-solid fa-scale-balanced"></i> Equitable Life</span>
                        </div>
                    </ScrollAnimation>
                </div >
            </section >

            <section className="py-24 bg-brand-light/90 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Our Solutions</span>
                        <h2 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">Core Corporate Strategies</h2>
                        <p className="text-slate-600 text-lg">Sophisticated tools to optimize your corporation&apos;s balance sheet.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 group overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2">
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src="/images/corporate-par-insurance.png"
                                    alt="Corporate Par Insurance"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 border-b border-slate-100 pb-4">Corporate Par Insurance</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                    Combines lifelong insurance protection with steady, tax-advantaged asset growth inside the corporation—offering both financial stability and powerful estate benefits.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-3 mb-8">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Tax-deferred growth</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Access to cash value</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Tax-free CDA benefits</li>
                                </ul>
                                <div className="pt-0 mt-auto">
                                    <Link href="/corporate-par" className="inline-block border border-brand-blue text-brand-blue font-bold text-sm px-6 py-3 rounded-sm hover:bg-brand-blue hover:text-white transition w-full text-center group-hover:shadow-md">Explore Strategy</Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 group overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2" delay={100}>
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src="/images/cda-planning.png"
                                    alt="CDA Planning"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-gold/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 border-b border-slate-100 pb-4">CDA Planning</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                    The Capital Dividend Account (CDA) allows business owners to extract corporate wealth completely tax-free. It is one of the most powerful tax planning tools for CCPCs.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-3 mb-8">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Extract wealth tax-free</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Multiply net estate value</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Succession efficiency</li>
                                </ul>
                                <div className="pt-0 mt-auto">
                                    <Link href="/cda" className="inline-block border border-brand-blue text-brand-blue font-bold text-sm px-6 py-3 rounded-sm hover:bg-brand-blue hover:text-white transition w-full text-center group-hover:shadow-md">Learn About CDA</Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 group overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2" delay={200}>
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src="/images/ifa-strategy.png"
                                    alt="IFA Strategy"
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition duration-500"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 border-b border-slate-100 pb-4">IFA Strategy</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                    Immediate Financing Arrangements allow you to retain liquidity while building long-term wealth. Designed for those who value both cash flow and the compounding of insurance.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-3 mb-8">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Maintain corporate liquidity</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Tax-deductible interest</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></span>Leverage corporate assets</li>
                                </ul>
                                <div className="pt-0 mt-auto">
                                    <Link href="/ifa" className="inline-block border border-brand-blue text-brand-blue font-bold text-sm px-6 py-3 rounded-sm hover:bg-brand-blue hover:text-white transition w-full text-center group-hover:shadow-md">How IFA Works</Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="mt-16 text-center">
                        <Link href="/solution" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-gold transition text-lg border-b-2 border-transparent hover:border-brand-gold">
                            View All Strategies <i className="fa-solid fa-arrow-right ml-3"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-blue relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-32"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        <div>
                            <h2 className="text-3xl font-serif font-bold text-white mb-10">Who We Serve</h2>
                            <div className="space-y-8">
                                <div className="flex client-card p-4 rounded-lg">
                                    <div className="flex-shrink-0">
                                        <div className="client-icon w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <i className="fa-solid fa-briefcase text-brand-gold"></i>
                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold text-white">Business Owners</h4>
                                        <p className="text-slate-300 mt-1">With growing retained earnings ($500K - $5M revenue).</p>
                                    </div>
                                </div>
                                <div className="flex client-card p-4 rounded-lg">
                                    <div className="flex-shrink-0">
                                        <div className="client-icon w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <i className="fa-solid fa-user-doctor text-brand-gold"></i>
                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold text-white">Incorporated Professionals</h4>
                                        <p className="text-slate-300 mt-1">Doctors, Lawyers, Dentists with $250K+ income.</p>
                                    </div>
                                </div>
                                <div className="flex client-card p-4 rounded-lg">
                                    <div className="flex-shrink-0">
                                        <div className="client-icon w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <i className="fa-solid fa-people-roof text-brand-gold"></i>
                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold text-white">High-Net-Worth Families</h4>
                                        <p className="text-slate-300 mt-1">Planning intergenerational wealth transfer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-lg border border-white/20 shadow-2xl">
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">Why Work With <br />99 Financial</h2>
                            <p className="text-slate-200 mb-8 leading-relaxed text-lg">
                                We specialize in insurance-based corporate tax planning. Our recommendations are built on actuarial illustrations, tax law analysis, and long-term risk modeling.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center text-slate-200">
                                    <i className="fa-solid fa-check text-brand-gold mr-3"></i> Clear explanations & real numbers
                                </li>
                                <li className="flex items-center text-slate-200">
                                    <i className="fa-solid fa-check text-brand-gold mr-3"></i> Step-by-step implementation structures
                                </li>
                            </ul>
                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="block w-full text-center bg-brand-gold text-white font-bold py-4 px-8 rounded-sm hover:bg-white hover:text-brand-blue transition shadow-lg">
                                Book a Strategy Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Case Study Highlight</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mt-2 mb-2">Real Strategies, Real Impact</h2>
                            <p className="text-slate-500">See how we solve complex problems for Canadian business owners.</p>
                        </div>
                        <Link href="/case-studies" className="hidden md:inline-flex items-center text-brand-blue font-bold hover:text-brand-gold transition mt-4 md:mt-0 text-lg border-b-2 border-transparent hover:border-brand-gold">
                            View All Case Studies <i className="fa-solid fa-arrow-right ml-3"></i>
                        </Link>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
                        <div className="p-10 lg:p-14 lg:w-3/5">
                            <div className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold uppercase rounded-sm mb-4 border border-blue-100">Construction Company</div>
                            <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">Owner with $500k Annual Profit</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                A construction company owner was facing rising retained earnings and high personal tax. By redirecting a portion of annual profits into a corporate-owned participating life policy—paired with an optional IFA—the owner created a stable, tax-efficient asset.
                            </p>
                            <div className="flex flex-wrap gap-8 md:gap-16 pt-8 border-t border-slate-100">
                                <ScrollAnimation className="stat-item">
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Proj. Death Benefit</p>
                                    <p className="text-2xl font-bold text-brand-blue highlight-number">~ $9.22M</p>
                                </ScrollAnimation>
                                <ScrollAnimation className="stat-item" delay={200}>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Tax-Free to Family</p>
                                    <p className="text-2xl font-bold text-brand-gold highlight-number">~ $8.98M</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="lg:w-2/5 bg-slate-200 relative min-h-[300px] case-study-image">
                            <Image
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Construction Site"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
                        </div>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link href="/case-studies" className="text-brand-gold font-bold text-lg">Read Full Case Study &rarr;</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-dark text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#ea8d22 1px, transparent 1px)`, backgroundSize: `40px 40px` }}></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                        Ready to turn trapped retained earnings into tax-free family wealth?
                    </h2>
                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-bold text-xl py-5 px-12 rounded-sm shadow-xl hover:bg-white hover:text-brand-blue transition transform hover:-translate-y-1 duration-200">
                        Book a Consultation
                    </a>
                    <p className="mt-6 text-slate-400 text-sm">Complimentary 30-minute discovery call. No obligation.</p>
                </div>
            </section>
        </>
    );
}
