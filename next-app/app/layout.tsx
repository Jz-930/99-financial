import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
    title: '99 Financial Inc. | Wealth Strategies',
    description: 'Tax-Efficient Corporate Planning for Canadian Entrepreneurs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body className="font-sans text-slate-700 antialiased bg-white flex flex-col min-h-screen">
                <Header />
                <main className="pt-24 flex-grow">
                    {children}
                </main>
                <Footer />
                <div className="fixed bottom-6 right-6 z-40">
                    <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-brand-gold text-white rounded-full shadow-2xl hover:bg-brand-blue transition duration-300 border-2 border-white transform hover:scale-110">
                        <i className="fa-solid fa-comments text-xl"></i>
                    </a>
                </div>
            </body>
        </html>
    )
}
