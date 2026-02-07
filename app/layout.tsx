// layout.tsx - Root layout with Navbar
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prop Firm Sale | Exclusive Prop Trading Discounts',
  description: 'Get exclusive discounts on top prop firms including Apex, MFFU, Alpha, and Take Profit Trader. Start your funded trading journey today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-blue-950 antialiased`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}