
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '../../../lib/caseStudiesData';
import ScrollAnimation from '../../../components/ScrollAnimation';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all case studies
export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: 'Case Study Not Found' };
    return {
        title: `${study.title} | 99 Financial Inc.`,
        description: `Case Study: ${study.subtitle}`,
    };
}

export default async function CaseStudyDetail({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={study.heroImage}
                        alt={study.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/85"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <ScrollAnimation>
                        <Link href="/case-studies" className="inline-flex items-center text-brand-gold hover:text-white transition mb-6 font-bold text-sm uppercase tracking-wider">
                            <i className="fa-solid fa-arrow-left mr-2"></i> Back to Case Studies
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{study.title}</h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light">{study.subtitle}</p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollAnimation>
                        <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6 border-l-4 border-brand-gold pl-4">The Challenge</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                                {study.overview.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={study.contentImage}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Pain Points */}
                    {study.painPoints && study.painPoints.length > 0 && (
                        <ScrollAnimation className="mt-16 bg-slate-50 p-8 rounded-lg border border-slate-100" delay={100}>
                            <h3 className="text-xl font-bold text-brand-blue mb-6">Key Pain Points</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {study.painPoints.map((point, index) => (
                                    <div key={index} className="flex items-start">
                                        <i className="fa-solid fa-triangle-exclamation text-brand-gold mt-1.5 mr-3 flex-shrink-0"></i>
                                        <div>
                                            <h4 className="font-bold text-slate-700 mb-1">{point.title}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                    )}
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-brand-light border-y border-slate-200">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollAnimation>
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">The Solution</span>
                        <h2 className="text-3xl font-serif font-bold text-brand-blue mt-2 mb-8">{study.solution.title}</h2>
                        <p className="text-lg text-slate-600 mb-10">{study.solution.description}</p>

                        <div className="space-y-6">
                            {study.solution.components.map((comp, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-blue mb-2">{comp.title}</h4>
                                        <p className="text-slate-600">{comp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Outcome Section */}
            <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <ScrollAnimation>
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center">{study.outcome.title}</h2>
                        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-16 italic">{study.outcome.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {study.outcome.stats.map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center border border-white/20">
                                    <p className="text-brand-gold font-bold uppercase tracking-wider text-xs mb-3">{stat.label}</p>
                                    <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                                    <p className="text-sm text-slate-400">{stat.subtext}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Summary/CTA Section */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollAnimation>
                        <h2 className="text-2xl font-serif font-bold text-brand-blue mb-8">Summary of Value</h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {study.summary.map((item, index) => (
                                <span key={index} className="bg-brand-light text-slate-700 px-4 py-2 rounded-full text-sm font-semibold border border-slate-200">
                                    <i className="fa-solid fa-check text-brand-gold mr-2"></i> {item}
                                </span>
                            ))}
                        </div>

                        <div className="bg-brand-dark p-8 rounded-lg text-white">
                            <h3 className="text-2xl font-serif font-bold mb-4">See Your Own Numbers</h3>
                            <p className="text-slate-300 mb-8">Every corporation is unique. Schedule a consultation to model these strategies with your financial data.</p>
                            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" className="inline-block bg-brand-gold text-white font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-brand-blue transition shadow-lg">
                                Book a Private Strategy Review
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
