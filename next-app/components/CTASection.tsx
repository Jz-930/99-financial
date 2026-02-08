import ScrollAnimation from './ScrollAnimation';

interface CTASectionProps {
    heading: string;
    description: string | React.ReactNode;
    buttonText?: string;
    /** 'blue' = solid blue bg with logo pattern (solution pages), 'video' = video bg CTA (homepage) */
    variant?: 'blue' | 'video';
    /** Additional content above the CTA card, rendered inside the first ScrollAnimation */
    extraContent?: React.ReactNode;
}

export default function CTASection({
    heading,
    description,
    buttonText = 'Book a Private Strategy Review',
    variant = 'blue',
    extraContent,
}: CTASectionProps) {
    if (variant === 'video') {
        return (
            <section className="py-20 md:py-32 relative overflow-hidden text-center">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/images/Hero-video.mp4"
                    >
                        <source src="/images/CTA.mp4" type="video/mp4" />
                    </video>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-100 mb-8 leading-tight">
                            {heading}
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-200 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </p>
                        <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-gold text-white font-bold text-base md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-sm hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
                            {buttonText}
                            <i className="fa-solid fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        );
    }

    // Default: 'blue' variant — used on solution pages
    return (
        <section className="py-20 lg:py-24 bg-brand-blue text-white relative overflow-hidden text-center">
            <div className="logo-pattern-bg opacity-10"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollAnimation className="fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">{heading}</h2>
                    {extraContent}
                </ScrollAnimation>

                <ScrollAnimation className="bg-white/10 rounded-xl p-10 backdrop-blur-sm border border-brand-gold/30 inline-block fade-in-up" delay={100}>
                    <h3 className="text-2xl font-bold text-brand-gold mb-4">Next Step</h3>
                    <p className="text-lg text-white mb-8">
                        {description}
                    </p>
                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-gold text-white font-bold text-xl py-4 px-10 rounded-sm hover:bg-white hover:text-brand-blue transition transform hover:-translate-y-1 shadow-lg">
                        {buttonText}
                    </a>
                </ScrollAnimation>
            </div>
        </section>
    );
}
