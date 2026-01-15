import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export const metadata = {
    title: 'Estate & Succession Planning | 99 Financial Inc.',
    description: 'Integrating Corporate-Owned Insurance, Estate Freezes, and Capital Dividend Account (CDA) strategies.',
};

export default function EstatePlanning() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="relative text-white py-32 lg:py-40">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80"
                        alt="Estate Planning Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation>
                        <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-4 block">Legacy Preservation</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                            Estate & Succession Planning <br />
                            <span className="text-slate-300 text-3xl md:text-5xl font-normal">for Canadian Business Owners</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
                            Integrating Corporate-Owned Insurance, Estate Freezes, and Capital Dividend Account (CDA) strategies to secure your legacy.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#contact" className="bg-brand-gold text-white px-8 py-3 rounded shadow-lg hover:bg-brand-goldHover transition duration-300 font-medium">
                                Start Your Plan
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 2. The Problem: Tax at Death */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <ScrollAnimation>
                            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">The Challenge: Taxation at Death</h2>
                            <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
                            <p className="text-lg leading-relaxed text-slate-600 mb-6">
                                In Canada, unlike having an estate tax, we have a deemed disposition rule. At death, you are treated as having sold all your capital assets at fair market value. For business owners, this can trigger a massive tax bill on:
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-brand-blue">
                                <span className="bg-slate-100 px-4 py-2 rounded">Corporate Shares</span>
                                <span className="bg-slate-100 px-4 py-2 rounded">Real Estate Holdings</span>
                                <span className="bg-slate-100 px-4 py-2 rounded">Investment Portfolios</span>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center bg-red-50 p-10 rounded-xl border border-red-100">
                        <ScrollAnimation>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">The Liquidity Crisis</h3>
                            <p className="text-slate-600 mb-4">
                                Without planning, your estate may face a tax liability of 25%–27% of your total business value. If the estate is illiquid (meaning value is tied up in the business or real estate), your executors might be forced to trigger a "fire sale" of assets just to pay the CRA.
                            </p>
                            <p className="font-bold text-red-700">Don&apos;t let the CRA become your largest beneficiary.</p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={100}>
                            <div className="bg-white p-6 rounded shadow-sm">
                                <h4 className="font-bold text-slate-700 mb-4 text-center">Potential Tax Exposure</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b pb-2"><span className="text-slate-500">Business Value Growth</span> <span className="font-bold">$5,000,000</span></div>
                                    <div className="flex justify-between border-b pb-2"><span className="text-slate-500">Capital Gains Tax (~27%)</span> <span className="font-bold text-red-500">$1,350,000</span></div>
                                    <div className="flex justify-between pt-2"><span className="text-brand-blue font-bold">Cash Required by Estate</span> <span className="font-bold text-brand-blue">$1,350,000</span></div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* 3. The Solution: Integration */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <ScrollAnimation>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">The Solution: Integrated Estate Planning</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">We combine legal structures with insurance funding to cap liability and create tax-free liquidity.</p>
                        </ScrollAnimation>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <ScrollAnimation className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold hover:-translate-y-2 transition duration-300">
                            <div className="h-14 w-14 bg-brand-blue/5 rounded-full flex items-center justify-center mb-6"><i className="fa-solid fa-snowflake text-2xl text-brand-blue"></i></div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">1. Estate Freeze</h3>
                            <p className="text-slate-600 text-sm mb-4">Exchanges your current common shares for fixed-value preferred shares.</p>
                            <ul className="text-sm space-y-2 text-slate-500">
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Caps your tax liability at today&apos;s value</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Passes future growth to heirs</li>
                            </ul>
                        </ScrollAnimation>
                        {/* Card 2 */}
                        <ScrollAnimation className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold hover:-translate-y-2 transition duration-300" delay={100}>
                            <div className="h-14 w-14 bg-brand-blue/5 rounded-full flex items-center justify-center mb-6"><i className="fa-solid fa-shield-halved text-2xl text-brand-blue"></i></div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">2. Corporate Insurance</h3>
                            <p className="text-slate-600 text-sm mb-4">Corporate-owned life insurance purchases to fund the future tax liability.</p>
                            <ul className="text-sm space-y-2 text-slate-500">
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Pennies on the dollar cost</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Tax-free death benefit</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Creates CDA credit</li>
                            </ul>
                        </ScrollAnimation>
                        {/* Card 3 */}
                        <ScrollAnimation className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold hover:-translate-y-2 transition duration-300" delay={200}>
                            <div className="h-14 w-14 bg-brand-blue/5 rounded-full flex items-center justify-center mb-6"><i className="fa-solid fa-sitemap text-2xl text-brand-blue"></i></div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">3. Family Trust</h3>
                            <p className="text-slate-600 text-sm mb-4">Can be introduced to hold the new common shares for future generations.</p>
                            <ul className="text-sm space-y-2 text-slate-500">
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Control & flexibility</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Capital gains exemption access</li>
                                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Asset protection</li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* 4. Insurance Integration Details */}
            <section className="py-24 bg-brand-blue text-white relative">
                <div className="absolute inset-0 pattern-grid opacity-10" style={{ backgroundImage: 'radial-gradient(#ea8d22 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Insurance Integration with Freeze / Trust Structures</h2>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                This is the engine that powers the strategy. While the freeze stops the tax bill from growing, the insurance creates the liquidity to pay it. Matches the fixed tax liability of the "Frozen" shares with a guaranteed death benefit.
                            </p>
                            <div className="bg-white/10 p-6 rounded-lg border border-white/20 mb-6">
                                <h3 className="font-bold text-brand-gold mb-3">Key Benefits of Integration</h3>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i> <strong>Cost Efficiency:</strong> Paying premiums is far cheaper than saving dollar-for-dollar for tax.</li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i> <strong>Asset Protection:</strong> No need to liquidate business assets.</li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-brand-gold mr-3 mt-1"></i> <strong>Double Benefit:</strong> Pays the tax AND redeems the preferred shares tax-free via CDA.</li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation delay={100}>
                            <Image
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
                                alt="Strategic Planning Documents"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-2xl skew-x-1 hover:skew-x-0 transition duration-500"
                            />
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* 5. Case Study */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <ScrollAnimation>
                            <h2 className="text-3xl font-serif font-bold text-brand-blue">Case Study: The Succession Plan</h2>
                            <p className="text-slate-500 mt-2">Scenario: Business Value $5M | Owner Age 60</p>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-10 bg-slate-50">
                            <h3 className="text-xl font-bold text-brand-blue mb-4">The Plan</h3>
                            <ul className="space-y-4 mb-6 text-slate-600">
                                <li className="flex items-start"><span className="font-bold text-brand-gold mr-2">1.</span> Perform Estate Freeze. Lock in $5M value in Preferred Shares.</li>
                                <li className="flex items-start"><span className="font-bold text-brand-gold mr-2">2.</span> Issue new Common Shares to Family Trust for growth.</li>
                                <li className="flex items-start"><span className="font-bold text-brand-gold mr-2">3.</span> Corporation buys $1.5M Life Insurance Policy to cover future tax on Preferred Shares.</li>
                            </ul>
                            <p className="text-xs text-slate-500 italic">*Assuming 25-30% tax liability on $5M frozen value.</p>
                        </div>
                        <div className="md:w-1/2 p-10 bg-brand-blue text-white flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-brand-gold mb-6">The Outcome at Death</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/20 pb-2"><span className="text-slate-300">Estate Tax Due</span> <span className="font-bold">$1,350,000</span></div>
                                <div className="flex justify-between border-b border-white/20 pb-2"><span className="text-slate-300">Insurance Payout</span> <span className="font-bold text-brand-gold">$1,500,000</span></div>
                                <div className="mt-4 bg-white/10 p-4 rounded text-center">
                                    <p className="font-bold text-lg mb-1">Result</p>
                                    <p className="text-sm text-slate-200">Tax paid fully by insurance. Business passes to children intact. Excess insurance proceeds paid as tax-free dividend.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="py-20 bg-brand-dark text-center text-white relative">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <ScrollAnimation>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Secure Your Family&apos;s Legacy</h2>
                        <p className="text-lg text-slate-300 mb-10">
                            Don&apos;t leave your life&apos;s work to chance. Let&apos;s discuss a structured Estate & Succession Plan tailored to your business needs.
                        </p>
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white text-lg font-bold px-10 py-4 rounded hover:bg-white hover:text-brand-blue transition duration-300 shadow-xl transform hover:-translate-y-1">
                            Discuss Your Plan
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
