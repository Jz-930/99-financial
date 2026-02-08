import ScrollAnimation from './ScrollAnimation';

interface ComparisonGridProps {
    positiveTitle: string;
    positiveItems: string[];
    negativeTitle: string;
    negativeItems: string[];
    footnote?: string;
    /** Icon for positive items. Default: fa-solid fa-check */
    positiveIcon?: string;
    /** Icon for negative items. Default: fa-solid fa-xmark */
    negativeIcon?: string;
    /** Color accent for positive card border. Default: green-500 */
    positiveAccent?: string;
    /** Color accent for negative card border. Default: slate-400 */
    negativeAccent?: string;
}

export default function ComparisonGrid({
    positiveTitle,
    positiveItems,
    negativeTitle,
    negativeItems,
    footnote,
    positiveIcon = 'fa-solid fa-check',
    negativeIcon = 'fa-solid fa-xmark',
    positiveAccent = 'green-500',
    negativeAccent = 'slate-400',
}: ComparisonGridProps) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Positive */}
                <ScrollAnimation className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-${positiveAccent} hover:-translate-y-1 transition duration-300`}>
                    <h3 className="text-xl font-bold text-brand-blue mb-6 flex items-center">
                        <i className={`fa-solid fa-check-circle text-${positiveAccent} mr-3 text-2xl`}></i>
                        {positiveTitle}
                    </h3>
                    <ul className="space-y-4 text-slate-700">
                        {positiveItems.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <i className={`${positiveIcon} text-${positiveAccent} mt-1.5 mr-3`}></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </ScrollAnimation>

                {/* Negative */}
                <ScrollAnimation className={`bg-slate-50 p-8 rounded-xl shadow-inner border-t-4 border-${negativeAccent} hover:-translate-y-1 transition duration-300`} delay={100}>
                    <h3 className="text-xl font-bold text-slate-600 mb-6 flex items-center">
                        <i className={`fa-solid fa-ban text-${negativeAccent} mr-3 text-2xl`}></i>
                        {negativeTitle}
                    </h3>
                    <ul className="space-y-4 text-slate-600">
                        {negativeItems.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <i className={`${negativeIcon} text-${negativeAccent} mt-1.5 mr-3`}></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </ScrollAnimation>
            </div>

            {footnote && (
                <ScrollAnimation className="mt-12 text-center fade-in-up">
                    <p className="text-lg font-medium text-brand-gold italic">
                        {footnote}
                    </p>
                </ScrollAnimation>
            )}
        </>
    );
}
