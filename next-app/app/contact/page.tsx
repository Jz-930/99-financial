import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';

export const metadata = {
    title: 'Contact Us | 99 Financial Inc.',
    description: 'Book a consultation or get in touch with our team.',
};

export default function Contact() {
    return (
        <>
            <section className="relative py-24 text-white">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Contact Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/50 -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <ScrollAnimation>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact 99 Financial Inc.</h1>
                        <p className="text-xl text-slate-300">Book a Free Consultation or Send Us a Message.</p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
                    <div>
                        <ScrollAnimation>
                            <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8">Get in Touch</h2>
                            <div className="space-y-6 text-lg text-slate-600">
                                <p className="flex items-center"><i className="fa-solid fa-phone w-8 text-brand-gold"></i> 416 637 5302</p>
                                <p className="flex items-start"><i className="fa-solid fa-location-dot w-8 text-brand-gold mt-1"></i> 85 Enterprise Blvd. Unit 306, Markham ON L6G 0b5</p>
                                <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="flex items-center text-brand-blue font-bold mt-4 hover:text-brand-gold transition"><i className="fa-solid fa-calendar-check w-8 text-brand-gold"></i> Book a 30-Min Meeting</a>
                                <p className="flex items-center"><i className="fa-solid fa-envelope w-8 text-brand-gold"></i> greatec@gmail.com</p>
                            </div>
                            <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100 group hover:-translate-y-1 transition duration-500">
                                <div className="h-2 bg-brand-gold w-full"></div>
                                <div className="p-8 text-center">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-2">
                                            <i className="fa-solid fa-qrcode text-2xl"></i>
                                        </div>
                                    </div>
                                    <h3 className="font-serif font-bold text-2xl text-brand-blue mb-2">Scan to Book</h3>
                                    <p className="text-slate-500 text-sm mb-6">Use your mobile device to schedule a meeting directly.</p>

                                    <div className="relative w-48 h-48 mx-auto p-2 bg-white border border-slate-200 rounded-lg shadow-inner">
                                        <Image
                                            src="/images/QR_tidycal_download.png"
                                            alt="Scan to Book TidyCal"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <div className="mt-6 text-sm text-slate-400 font-medium tracking-wide uppercase">
                                        Secure Booking via TidyCal
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation className="bg-white shadow-xl rounded-lg p-8 border border-slate-100" delay={200}>
                        <h3 className="text-xl font-bold text-brand-blue mb-6">Send a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
                                <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
                            </div>
                            <input type="text" placeholder="Company Name" className="w-full border p-3 rounded" />
                            <select className="w-full border p-3 rounded text-slate-500">
                                <option>Select Topic...</option>
                                <option>Corporate Par</option>
                                <option>CDA Planning</option>
                                <option>IFA</option>
                            </select>
                            <textarea rows={4} placeholder="Message" className="w-full border p-3 rounded"></textarea>
                            <button className="w-full bg-brand-gold text-white font-bold py-3 rounded hover:bg-brand-blue transition">Submit</button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-brand-blue text-sm mb-2">
                                        <i className="fa-solid fa-clock text-brand-gold mr-2"></i> Response Time
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        We strive to respond to all inquiries within 24 hours during business days.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-blue text-sm mb-2">
                                        <i className="fa-solid fa-shield-halved text-brand-gold mr-2"></i> Privacy Priority
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Your details are kept strictly confidential and are never shared with third parties.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <h5 className="font-bold text-[10px] uppercase tracking-wider text-slate-400 mb-1">Disclaimer</h5>
                                <p className="text-[10px] text-slate-400 leading-relaxed text-justify">
                                    The information on this website is provided for general informational and educational purposes only and does not constitute financial, investment, tax, or legal advice. Any strategies discussed are subject to individual circumstances and applicable laws, and examples are illustrative only—results are not guaranteed (and dividends, if applicable, are not guaranteed). Before taking any action, please consult qualified professionals for advice specific to your situation.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
