import ScrollAnimation from './ScrollAnimation';

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
    return (
        <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                <ScrollAnimation className="fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">{title}</h1>
                    <p className="text-xl text-brand-gold font-medium max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </ScrollAnimation>
            </div>
        </section>
    );
}
