interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    /** Override the inner max-width container class. Default: 'max-w-7xl' */
    maxWidth?: string;
    id?: string;
}

export default function SectionContainer({
    children,
    className = '',
    maxWidth = 'max-w-7xl',
    id,
}: SectionContainerProps) {
    return (
        <section className={className} id={id}>
            <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
                {children}
            </div>
        </section>
    );
}
