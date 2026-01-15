'use client';

import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const faqs = [
    {
        question: "Is an IFA risky?",
        answer: "The main risks relate to interest rate changes, loan management, and changing collateral requirements. The underlying policy remains a stable, long-term asset designed for conservative growth."
    },
    {
        question: "Can I access cash value without using an IFA?",
        answer: "Yes. The corporation may use policy loans, withdrawals, or bank collateral loans without a formal IFA arrangement."
    },
    {
        question: "Are interest payments always tax-deductible?",
        answer: "No. Deductibility depends on how borrowed funds are used. They must be tied to income-producing activities and should be confirmed with your tax advisor."
    },
    {
        question: "When does the CDA credit become available?",
        answer: "Only upon the insured's passing. This is when the corporation can distribute tax-free capital dividends to shareholders, subject to proper elections and CRA filing."
    },
    {
        question: "Are participating life insurance returns guaranteed?",
        answer: "Policies include guaranteed values, but dividends are not guaranteed. However, Canadian insurers generally have strong, stable long-term dividend histories."
    },
    {
        question: "Can my corporation own and pay for the insurance?",
        answer: "Yes. This is the standard and often most tax-efficient structure for business owners with retained earnings."
    },
    {
        question: "Does the bank review my corporate financials for an IFA?",
        answer: "Yes. Standard underwriting includes reviewing financial statements, tax returns, and corporate banking history."
    },
    {
        question: "Can I change beneficiaries or ownership later?",
        answer: "Yes. Corporate-owned policies offer flexibility through restructuring, buy-sell agreements, or estate planning adjustments. Any changes should be coordinated with your legal and tax advisors."
    }
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <ScrollAnimation key={index} className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer border border-slate-100 ${openIndex === index ? 'open' : ''}`} delay={index * 50}>
                    <div
                        className="flex justify-between font-bold text-brand-blue list-none items-center text-lg"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span>{faq.question}</span>
                        <span className={`transition-transform duration-300 text-brand-gold ml-4 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-6 pt-6 border-t border-slate-100' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </ScrollAnimation>
            ))}
        </div>
    );
}
