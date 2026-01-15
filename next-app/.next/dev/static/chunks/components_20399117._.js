(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ScrollAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollAnimation({ children, className = "", delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAnimation.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ScrollAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "ScrollAnimation.useEffect": ()=>setIsVisible(true)
                        }["ScrollAnimation.useEffect"], delay);
                        observer.disconnect();
                    }
                }
            }["ScrollAnimation.useEffect"], {
                threshold: 0.15
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "ScrollAnimation.useEffect": ()=>observer.disconnect()
            })["ScrollAnimation.useEffect"];
        }
    }["ScrollAnimation.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${className} ${isVisible ? 'animate' : ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ScrollAnimation.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(ScrollAnimation, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
_c = ScrollAnimation;
var _c;
__turbopack_context__.k.register(_c, "ScrollAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FAQAccordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScrollAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
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
function FAQAccordion() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: `bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer border border-slate-100 ${openIndex === index ? 'open' : ''}`,
                delay: index * 50,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between font-bold text-brand-blue list-none items-center text-lg",
                        onClick: ()=>toggleFAQ(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: faq.question
                            }, void 0, false, {
                                fileName: "[project]/components/FAQAccordion.tsx",
                                lineNumber: 56,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `transition-transform duration-300 text-brand-gold ml-4 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-chevron-down"
                                }, void 0, false, {
                                    fileName: "[project]/components/FAQAccordion.tsx",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/FAQAccordion.tsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FAQAccordion.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-6 pt-6 border-t border-slate-100' : 'max-h-0 opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600 leading-relaxed",
                            children: faq.answer
                        }, void 0, false, {
                            fileName: "[project]/components/FAQAccordion.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FAQAccordion.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/components/FAQAccordion.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/FAQAccordion.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(FAQAccordion, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQAccordion;
var _c;
__turbopack_context__.k.register(_c, "FAQAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_20399117._.js.map