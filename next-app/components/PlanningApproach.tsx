"use client";

import ScrollAnimation from './ScrollAnimation';

const steps = [
    {
        number: "01",
        title: "Awareness",
        description: "Recognizing long-term tax, liquidity, and estate risks that may not be visible in annual planning.",
        icon: "fa-eye"
    },
    {
        number: "02",
        title: "Structure",
        description: "Aligning corporate assets, tax considerations, and future outcomes within a coherent framework.",
        icon: "fa-network-wired"
    },
    {
        number: "03",
        title: "Implementation",
        description: "Using appropriate planning tools only when they support the overall structure — not in isolation.",
        icon: "fa-rocket"
    },
    {
        number: "04",
        title: "Review",
        description: "Revisiting decisions as circumstances evolve, ensuring the strategy remains aligned over time.",
        icon: "fa-arrows-rotate"
    }
];

export default function PlanningApproach() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Our Process</span>
                        <h2 className="mt-3 text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">A Thoughtful Planning Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Effective corporate planning is not about selecting individual products. It is about understanding where you are today — and how different decisions compound over time.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 border-t-2 border-dashed border-brand-blue/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <ScrollAnimation key={index} className="fade-in-up h-full" delay={index * 150}>
                                <div className="h-full bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-brand-blue/0 transition-all duration-500 group flex flex-col relative overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:bg-brand-blue">

                                    {/* Background Decor */}
                                    <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-all duration-500"></div>
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light/20 rounded-bl-full transition-all duration-500 group-hover:bg-white/10"></div>

                                    {/* Number & Icon */}
                                    <div className="mb-8 relative flex justify-between items-start">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-brand-light/30 text-brand-blue text-2xl shadow-sm group-hover:bg-brand-gold group-hover:text-white group-hover:shadow-brand-gold/50 transition-all duration-500 border border-brand-blue/10 group-hover:border-transparent group-hover:scale-110 group-hover:rotate-3">
                                            <i className={`fa-solid ${step.icon}`}></i>
                                        </div>
                                        <span className="text-6xl font-serif font-bold text-slate-100 group-hover:text-white/30 transition-colors duration-500 leading-[0.8] select-none">{step.number}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-white transition-colors duration-300 pb-4 border-b border-brand-blue/10 group-hover:border-white/20">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-700 ease-out"></div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
