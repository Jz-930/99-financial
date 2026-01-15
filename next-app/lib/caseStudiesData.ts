
export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    heroImage: string;
    contentImage: string;
    overview: string[];
    painPoints?: { title: string; description: string }[];
    solution: {
        title: string;
        description: string;
        components: { title: string; description: string }[];
    };
    outcome: {
        title: string;
        stats: { label: string; value: string; subtext?: string }[];
        description?: string;
    };
    summary: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: '1',
        slug: 'construction-company-owner',
        title: 'Construction Company Owner',
        subtitle: 'Annual Profit $500,000',
        heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
        contentImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
        overview: [
            "A successful construction business often generates strong cash flow, but also faces high taxes, significant volatility, and limited options for extracting retained earnings efficiently. For many owners, traditional corporate planning leads to growing trapped capital and rising personal tax exposure.",
            "A corporate-owned participating life insurance strategy provides a disciplined, tax-efficient framework to optimize retained earnings, enhance long-term wealth, and create substantial tax-free value for the family."
        ],
        painPoints: [
            {
                title: "Rising Corporate Retained Earnings Without a Clear Deployment Strategy",
                description: "The corporation accumulates more than $500,000 of profit annually. After corporate tax, a large portion remains trapped in the company, earning modest returns and exposed to future tax on distribution."
            },
            {
                title: "High Personal Tax When Taking Money Out",
                description: "Extracting funds through salary or dividends triggers significant personal taxes (often 40%–53%), making traditional retirement planning inefficient."
            },
            {
                title: "Business Is Asset-Heavy and Tax-Heavy",
                description: "The company owns equipment, vehicles, accounts receivable, and sometimes real estate. At death, these assets trigger a substantial tax liability, potentially forcing liquidation."
            },
            {
                title: "Lack of Long-Term Tax-Free Wealth Transfer Tools",
                description: "The owner wants to structure wealth for the next generation but lacks a mechanism to move funds out of the corporation tax-free."
            },
            {
                title: "Market Volatility and Unpredictable Cash Flow",
                description: "Construction cycles fluctuate, making stability and capital preservation a priority."
            }
        ],
        solution: {
            title: "Corporate-Owned Participating Life Insurance (With Optional IFA)",
            description: "By redirecting a portion of annual retained earnings into a corporate-owned participating whole life policy, the owner creates a tax-efficient long-term asset inside the corporation.",
            components: [
                {
                    title: "Allocate $150k–$200k of Annual Corporate Cash Flow",
                    description: "Premiums are paid using retained earnings. The policy compounds tax-deferred and becomes a stable asset within the CCPC."
                },
                {
                    title: "Use an Immediate Financing Arrangement (IFA) for Liquidity (Optional)",
                    description: "If the owner needs working capital for projects, equipment, or real estate, they can collateralize the policy to a bank. The bank provides a revolving line of credit, allowing the corporation to continue operations with minimal cash flow impact."
                },
                {
                    title: "Create Significant CDA Credits",
                    description: "Upon death, tax-free insurance proceeds are credited to the Capital Dividend Account, allowing the estate to extract millions from the corporation entirely tax-free."
                },
                {
                    title: "Fund Future Tax Liabilities Predictably",
                    description: "The policy provides the liquidity needed to cover taxes triggered at death, ensuring the construction business can continue without forced sale."
                }
            ]
        },
        outcome: {
            title: "Projected CDA Result (Age 85)",
            description: "Example using a male age 45, non-smoker, corporate-owned participating life insurance program with annual premiums of $200,000 for 20 years. From age 66 to 85, you can receive $170,000 in annual retirement income.",
            stats: [
                { label: "Death Benefit", value: "~ $9.22M", subtext: "Remaining benefit at age 85" },
                { label: "CDA Credit", value: "~ $8.98M", subtext: "100% of death benefit less ACB" },
                { label: "Tax-Free to Family", value: "~ $8.98M", subtext: "Zero personal tax impact" }
            ]
        },
        summary: [
            "Reduces long-term tax exposure",
            "Creates tax-free CDA credit for heirs",
            "Preserves corporate liquidity",
            "Shields the family from estate tax risk",
            "Builds a stable, compounding asset inside the corporation",
            "Transforms trapped retained earnings into a powerful tax-free wealth engine."
        ]
    },
    {
        id: '2',
        slug: 'ifa-case-study',
        title: 'IFA Case Study',
        subtitle: 'Male Age 45, Non-Smoker',
        heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
        contentImage: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2000&auto=format&fit=crop',
        overview: [
            "A 45-year-old male, non-smoker, establishes a corporate-owned participating life insurance program with annual premiums of $100,000 for 20 years, providing an initial death benefit of $2.6 million.",
            "To maintain corporate liquidity, the company uses an Immediate Financing Arrangement (IFA). After paying each year’s premium, the corporation assigns the policy as collateral and borrows back the premium at Prime, allowing retained earnings to remain available for business operations or investment."
        ],
        painPoints: [],
        solution: {
            title: "The IFA Process",
            description: "This structure preserves cash flow, creates long-term tax-efficient growth, and generates significant CDA credit.",
            components: [
                {
                    title: "Insurance Approval",
                    description: "The corporation applies for and is approved for a corporate-owned participating life insurance policy."
                },
                {
                    title: "Premium Payment",
                    description: "The corporation pays the annual premium of $100,000."
                },
                {
                    title: "Collateral Assignment",
                    description: "The policy is assigned to a lending bank as collateral."
                },
                {
                    title: "Bank Loan Advance",
                    description: "After approval, the bank advances a loan—typically covering most or all of the premium—returning liquidity back to the corporation."
                },
                {
                    title: "Invest & Deduct",
                    description: "The corporation pays interest at Prime. If funds are used for income-producing purposes, interest is tax-deductible."
                }
            ]
        },
        outcome: {
            title: "Outcomes by Age 85",
            description: "Total Interest Cost ≈ $540,000. Beginning in year 21, additional IFA loan advances can fund ongoing interest.",
            stats: [
                { label: "Total Net Estate", value: "≈ $6.26M", subtext: "Reflecting long-term dividend growth" },
                { label: "CDA Credit", value: "≈ $8.98M", subtext: "Available for tax-free distribution" },
                { label: "Tax-Free to Family", value: "≈ $8.98M", subtext: "Efficient intergenerational transfer" }
            ]
        },
        summary: [
            "Maintains corporate liquidity through annual IFA loans",
            "Creates long-term tax-efficient growth inside the corporation",
            "Total interest cost $540K vs Net Estate $6.26M",
            "Expected tax-free legacy ≈ $8.98M"
        ]
    },
    {
        id: '3',
        slug: 'medical-professional',
        title: 'Medical Professional',
        subtitle: 'Annual Income $600,000',
        heroImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
        contentImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2000&auto=format&fit=crop',
        overview: [
            "Physicians earning $500K–$700K annually face one of the highest lifetime tax burdens in Canada. For incorporated doctors, optimizing corporate structures and building long-term tax-efficient wealth is essential for financial independence.",
            "A corporate-owned participating whole life policy is one of the most effective tools available. It provides stable, tax-deferred growth, supports retirement planning, and functions as a superior alternative—or complement—to traditional RRSP strategies."
        ],
        painPoints: [
            {
                title: "RRSP Limitations",
                description: "RRSP room is based on earned income and capped annually. A $600K income physician can contribute only about $30,780. Withdrawals are 100% taxable."
            },
            {
                title: "Need for Lower Tax Rates",
                description: "Corporate tax (12.2%–26.5%) is significantly lower than personal tax (up to 53.53%). Physicians need to retain more profit inside the corporation."
            }
        ],
        solution: {
            title: "Corporate Par vs. RRSP",
            description: "Corporate Par policies provide no contribution limits, tax-deferred growth, and tax-free access in retirement via policy loans.",
            components: [
                {
                    title: "Flexibility in Income Timing",
                    description: "Physicians can control when and how they take money out—optimal for maternity/paternity leave, part-time transitions, or early retirement."
                },
                {
                    title: "Enhanced Retirement",
                    description: "Corporate structures allow physicians to use corporate-owned insurance and access CDA tax-free distributions."
                },
                {
                    title: "Ideal Policy Design",
                    description: "Example: Annual premium $100k-$200k funded from retained earnings. 10 or 20 pay period. Retirement access via bank/policy loans."
                }
            ]
        },
        outcome: {
            title: "Long-Term Outcomes",
            description: "By age 65: Strong, tax-deferred cash value inside the corporation. Reduction in personal taxable withdrawals.",
            stats: [
                { label: "At Death", value: "Tax-Free", subtext: "Large insurance payout" },
                { label: "CDA Credits", value: "100%", subtext: "Tax-free distribution to heirs" },
                { label: "Liquidity", value: "High", subtext: "Fund estate taxes without forced sale" }
            ]
        },
        summary: [
            "Predictable, tax-efficient long-term growth",
            "Superior retirement planning compared to RRSP alone",
            "Tax-free intergenerational wealth transfer",
            "Significant lifetime tax reduction",
            "Stable, low-volatility asset inside professional corporation"
        ]
    },
    {
        id: '4',
        slug: 'family-business-transition',
        title: 'Family Business Transition',
        subtitle: 'Estate Freeze & Succession',
        heroImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        contentImage: 'https://images.unsplash.com/photo-1529156069896-8208544ec918?q=80&w=2000&auto=format&fit=crop',
        overview: [
            "A family-owned business preparing to transition to the son (or next generation) requires careful, professional planning. Without a structured approach, significant tax exposure, liquidity shortages, or family conflicts may arise.",
            "Combining an estate freeze with corporate-owned participating life insurance allows the family to lock in tax liabilities, shift growth to the next generation, and build a substantial tax-free legacy."
        ],
        painPoints: [
            {
                title: "Unchecked Growth of Tax Liability",
                description: "Without a freeze, the business continues to grow in value, increasing the tax burden upon death. This can create a liquidity crisis."
            }
        ],
        solution: {
            title: "The Estate Freeze + Insurance Solution",
            description: "Locks in the current value of the business shares for the parents and funds the tax liability.",
            components: [
                {
                    title: "Estate Freeze",
                    description: "Locks in today's value for parents (Preferred Shares) and shifts future growth to the next generation (Common Shares)."
                },
                {
                    title: "Funds Tax Liability",
                    description: "Corporate Par Insurance creates tax-free death benefit to pay capital gains tax, probate fees, and legal costs."
                },
                {
                    title: "Credits the CDA",
                    description: "The death benefit flows into the Capital Dividend Account, allowing the company to distribute money to the son tax-free."
                }
            ]
        },
        outcome: {
            title: "Illustrative Outcome (Parents Age 85)",
            description: "Family business valued at $4M. $100K annual premium for 10 years.",
            stats: [
                { label: "Death Benefit", value: "~ $4.49M", subtext: "Paid to corporation" },
                { label: "CDA Credit", value: "~ $4.25M", subtext: "Created for tax-free extraction" },
                { label: "To Son", value: "~ $4.25M", subtext: "Tax-free distribution" }
            ]
        },
        summary: [
            "Smooth, tax-efficient business transition",
            "Protection of the company’s long-term value",
            "Zero forced sale of assets",
            "Tax-free capital to support the next generation"
        ]
    },
    {
        id: '5',
        slug: 'high-income-lawyer',
        title: 'High-Income Lawyer',
        subtitle: 'Annual Income $300,000+',
        heroImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop',
        contentImage: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop',
        overview: [
            "Lawyers in Ontario earning $300K+ annually often face high personal tax rates and limited retirement planning options. When operating through a Professional Corporation (PC), retained earnings can become 'trapped' and are fully taxable when paid out personally.",
            "A corporate-owned participating whole life insurance strategy provides a tax-efficient solution that helps the lawyer build long-term wealth and create tax-free retirement and estate value."
        ],
        painPoints: [
            {
                title: "High Personal Tax Rate",
                description: "Marginal tax rates up to 53%. Dividend withdrawals in retirement are taxed heavily."
            },
            {
                title: "Trapped Retained Earnings",
                description: "Money grows inside the PC but triggers personal tax upon withdrawal."
            },
            {
                title: "Passive Investment Income Limits",
                description: "Passive income in a corporate account can trigger high corporate tax and loss of the Small Business Deduction (SBD)."
            }
        ],
        solution: {
            title: "Corporate-Owned Par Strategy",
            description: "The PC owns and pays for the policy. This creates tax-deferred growth, asset protection, and CDA credits.",
            components: [
                {
                    title: "Tax-Deferred Growth",
                    description: "Avoids annual corporate tax on passive investment income."
                },
                {
                    title: "Corporate Dollars Efficiency",
                    description: "Premiums funded with corporate after-tax dollars (taxed lower than personal income)."
                },
                {
                    title: "Tax-Free Retirement Access",
                    description: "Access cash value through policy loans or bank collateral loans without triggering personal income tax."
                }
            ]
        },
        outcome: {
            title: "Illustrative Structure",
            description: "Annual premium $30K–$45K. PC is owner/beneficiary.",
            stats: [
                { label: "Growth", value: "Tax-Deferred", subtext: "Inside the PC" },
                { label: "Retirement", value: "Tax-Free Access", subtext: "Via loans" },
                { label: "Estate", value: "High CDA", subtext: "Tax-free to heirs" }
            ]
        },
        summary: [
            "Stable tax-deferred growth inside the PC",
            "Tax-free access to funds in retirement",
            "Avoidance of passive investment tax erosion",
            "Large tax-free CDA payout to heirs at death"
        ]
    }
];
