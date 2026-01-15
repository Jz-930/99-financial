import { AnimatedTestimonials } from "./ui/animated-testimonials";

type AnimatedTestimonialsDemoProps = {
    className?: string;
};

export function AnimatedTestimonialsDemo({ className }: AnimatedTestimonialsDemoProps) {
    const testimonials = [
        {
            quote: "The corporation funds premiums with retained earnings. Cash value begins compounding immediately with guaranteed growth plus potential dividends.",
            name: "1. Funding & Growth",
            designation: "Lower-taxed corporate dollars at work",
            src: "/images/par-funding-growth.png",
        },
        {
            quote: "Policy values grow tax-deferred on the balance sheet, creating a conservative, uncorrelated asset that keeps working through market cycles.",
            name: "2. Tax-Deferred Buildup",
            designation: "Stable asset class inside the corporation",
            src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
            quote: "Cash value can be collateralized for a bank line of credit, giving the business flexible liquidity without triggering taxable income.",
            name: "3. Bankable Liquidity",
            designation: "Use as collateral instead of redeeming",
            src: "/images/par-liquidity-payout.png",
        },
        {
            quote: "On death, the tax-free insurance benefit is paid to the corporation, creating a Capital Dividend Account (CDA) credit.",
            name: "4. Tax-Free Proceeds",
            designation: "Insurance benefit flows into the CDA",
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
            quote: "CDA credits allow 100% tax-free distributions to shareholders or their family, delivering the legacy value the policy was designed for.",
            name: "5. Tax-Free Distribution",
            designation: "Extract retained value to heirs tax-free",
            src: "/images/par-cda-family.png",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} autoplay className={className} />;
}
