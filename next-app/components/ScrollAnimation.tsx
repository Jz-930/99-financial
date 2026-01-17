"use client";
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string; // e.g. "fade-in-up"
    delay?: number;
    id?: string;
}

export default function ScrollAnimation({ children, className = "", delay = 0, id }: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.disconnect();
            }
        }, { threshold: 0.15 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} id={id} className={`${className} ${isVisible ? 'animate' : ''}`}>
            {children}
        </div>
    );
}
