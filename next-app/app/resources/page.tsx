import Link from 'next/link';
import { ArrowRight, FileText, Layers3, Lightbulb, MessageCircleQuestion } from 'lucide-react';
import ScrollAnimation from '../../components/ScrollAnimation';

export const metadata = {
    title: 'Resources | 99 Financial Inc.',
    description: 'Educational articles, planning frameworks, in-depth PDF guides, and answers to common questions about corporate wealth planning.',
};

const resources = [
    {
        id: 'foundational-articles',
        href: '/foundational-articles',
        title: 'Foundational Articles',
        description: 'Core principles of corporate financial planning, taxation, and wealth structure design.',
        action: 'View Articles',
        icon: Layers3,
    },
    {
        id: 'planning-concepts',
        href: '/planning-concepts',
        title: 'Planning Concepts & Frameworks',
        description: 'Explore strategies like Corporate Par, CDA, and IFA, and understand how they work in practice.',
        action: 'Explore Concepts',
        icon: Lightbulb,
    },
    {
        id: 'guides',
        href: '/guides',
        title: 'In-Depth Guides (PDF)',
        description: 'Comprehensive whitepapers and downloadable guides for detailed study and reference.',
        action: 'Browse Guides',
        icon: FileText,
    },
    {
        id: 'faq',
        href: '/faq',
        title: 'Frequently Asked Questions',
        description: 'Clear answers about planning structures, risks, implementation, and eligibility.',
        action: 'View FAQ',
        icon: MessageCircleQuestion,
    },
];

export default function ResourcesPage() {
    return (
        <div className="bg-brand-cream">
            <section className="hero-gradient relative overflow-hidden px-4 py-16 text-center text-white sm:px-6 md:py-20 lg:px-8" aria-labelledby="resources-title">
                <div className="absolute inset-0 bg-brand-dark/20" aria-hidden="true" />
                <div className="relative mx-auto max-w-4xl">
                    <ScrollAnimation className="fade-in-up">
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">Knowledge Center</p>
                        <h1 id="resources-title" className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            How We Think About<br className="hidden sm:block" /> Long-Term Corporate Planning
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed text-slate-200 md:text-lg">
                            Understand the long-term implications of corporate wealth, taxation, liquidity, and planning decisions — before solutions are discussed.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8" aria-labelledby="resource-library-title">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-12">
                        <div>
                            <span className="mb-4 block h-0.5 w-10 bg-brand-gold" aria-hidden="true" />
                            <h2 id="resource-library-title" className="font-serif text-2xl font-bold text-brand-blue sm:text-3xl">Explore the Resource Library</h2>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
                            Start with the fundamentals, explore a planning concept, or find an answer to a specific question.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                        {resources.map(({ id, href, title, description, action, icon: Icon }) => (
                            <Link
                                key={id}
                                id={id}
                                href={href}
                                className="group flex h-full scroll-mt-28 flex-col rounded-xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:border-brand-gold/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream sm:p-8"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-white">
                                    <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                                </div>
                                <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-brand-blue sm:text-2xl">{title}</h3>
                                <p className="mb-7 max-w-lg flex-grow text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
                                <span className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-brand-blue">
                                    {action}
                                    <ArrowRight className="text-brand-gold transition-transform group-hover:translate-x-1" size={19} aria-hidden="true" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-10">
                        <div className="max-w-xl">
                            <h2 className="font-serif text-xl font-bold text-brand-blue sm:text-2xl">Have a question about your situation?</h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">Bring your questions to a private conversation about your business, priorities, and long-term plans.</p>
                        </div>
                        <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-sm bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-gold hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-cream md:self-auto">
                            Start a Conversation <ArrowRight size={17} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
