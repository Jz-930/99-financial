import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export const metadata = {
    title: 'Contact Us | 99 Financial Inc.',
    description: 'Start a Private Strategy Review. For incorporated business owners and professionals seeking clarity on corporate wealth, tax efficiency, and long-term planning.',
};

export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-gradient relative h-[45vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/30 z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">Contact 99 Financial</h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl mx-auto mb-8">
                            Start a Private Strategy Review
                        </p>
                        <div className="h-1 w-24 bg-brand-gold mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
                            For incorporated business owners and professionals seeking clarity on corporate wealth, tax efficiency, and long-term planning.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* What This Is / Who This Is For - Two Column Section */}
            <section className="py-20 bg-brand-light relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Column 1: What This Review Is */}
                        <ScrollAnimation className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6">What This Review Is — and Is Not</h2>

                            <div className="space-y-4 text-slate-600 mb-8">
                                <p className="font-medium text-brand-dark">This initial conversation is not a sales meeting.</p>
                                <p>The purpose is simply to determine:</p>
                                <ul className="space-y-3 pl-2">
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3 text-sm"></i>
                                        <span>Whether a planning issue exists in your situation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fa-solid fa-check text-brand-gold mt-1.5 mr-3 text-sm"></i>
                                        <span>And whether it deserves attention at all</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-brand-gold">
                                <p className="text-slate-700 font-medium italic">
                                    "A brief private strategy review can help assess relevance. No obligation. No preparation required."
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Column 2: Who This Is For */}
                        <ScrollAnimation delay={200} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6">Who This Is For</h2>
                            <p className="text-slate-500 mb-6 text-sm uppercase tracking-wider font-bold">This conversation is typically relevant for:</p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <div className="bg-brand-light p-2 rounded-full mr-4 mt-0.5">
                                        <i className="fa-solid fa-building text-brand-blue text-xs"></i>
                                    </div>
                                    <span className="text-slate-700">Incorporated business owners (CCPCs)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-brand-light p-2 rounded-full mr-4 mt-0.5">
                                        <i className="fa-solid fa-user-md text-brand-blue text-xs"></i>
                                    </div>
                                    <span className="text-slate-700">Professionals with growing corporate retained earnings</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-brand-light p-2 rounded-full mr-4 mt-0.5">
                                        <i className="fa-solid fa-door-open text-brand-blue text-xs"></i>
                                    </div>
                                    <span className="text-slate-700">Owners planning retirement, succession, or a future business exit</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-brand-light p-2 rounded-full mr-4 mt-0.5">
                                        <i className="fa-solid fa-users text-brand-blue text-xs"></i>
                                    </div>
                                    <span className="text-slate-700">Families concerned about long-term tax exposure and estate liquidity</span>
                                </li>
                            </ul>

                            <p className="text-sm text-slate-500 border-t border-slate-100 pt-4">
                                This planning is not appropriate for every situation and is evaluated on a case-by-case basis.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Booking & Contact Info Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollAnimation className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mb-6">Book a Private Strategy Review</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Select a time that works for you. Meetings are typically held virtually unless otherwise arranged.
                        </p>

                        <a
                            href="https://tidycal.com/greatec/30-minute-meeting"
                            target="_blank"
                            className="inline-flex items-center justify-center px-10 py-5 bg-brand-gold text-white font-bold text-lg rounded-full shadow-lg hover:bg-brand-goldHover hover:transform hover:-translate-y-1 transition-all duration-300 group"
                        >
                            Book a Private Conversation
                            <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </ScrollAnimation>

                    <div className="border-t border-slate-200 mt-16 pt-16">
                        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start">
                                <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-4">Get In Touch</span>
                                <a href="tel:4166375302" className="text-2xl font-serif text-brand-blue hover:text-brand-gold transition-colors mb-2">416 637 5302</a>
                                <a href="mailto:greatec@gmail.com" className="text-lg text-slate-600 hover:text-brand-gold transition-colors">greatec@gmail.com</a>
                            </div>

                            <div className="flex flex-col items-center md:items-start">
                                <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-4">Visit Us</span>
                                <address className="not-italic text-slate-600 text-lg leading-relaxed">
                                    85 Enterprise Blvd. Unit 306<br />
                                    Markham ON L6G 0B5
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
