// components/Footer.tsx
'use client';

import Link from 'next/link';
import { Twitter, Mail, AlertTriangle } from 'lucide-react';

export default function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 border-t border-blue-900/50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-white">
                Prop Firm<span className="text-cyan-400">Sale</span>
              </span>
            </Link>
            <p className="text-blue-400 text-sm max-w-sm mb-6">
              Helping traders save money on prop firm evaluations with exclusive discount codes and verified promotions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/promos" className="text-blue-400 hover:text-white transition-colors">All Promos</Link></li>
              <li><Link href="/about" className="text-blue-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/promos/apex" className="text-blue-400 hover:text-white transition-colors">Apex</Link></li>
              <li><Link href="/promos/mffu" className="text-blue-400 hover:text-white transition-colors">MFFU</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Prop Firms</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/promos/alpha" className="text-blue-400 hover:text-white transition-colors">Alpha Capital</Link></li>
              <li><Link href="/promos/tpt" className="text-blue-400 hover:text-white transition-colors">Take Profit Trader</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-500 text-sm">
              © {currentYear} Prop Firm Sale. All rights reserved.
            </p>

          <div>
            <Link href={'https://x.com/thebmnbloc'}>
              <span className='text-sm text-blue-400'>
                Developed by {' '}
                <span className='text-cyan-400'>
                  Bloc
                </span>
              </span>
            </Link>
          </div>


            <div className="flex items-center gap-2 text-xs text-blue-600">
              <AlertTriangle className="w-4 h-4" />
              <span>Risk Warning: Trading involves significant risk of loss</span>
            </div>
          </div>
          <p className="text-center text-xs text-blue-600/60 mt-4 max-w-2xl mx-auto">
            Disclosure: Prop Firm Sale contains affiliate links. We earn a commission when you purchase through our links at no extra cost to you. 
            All codes are verified working at time of publication.
          </p>
        </div>
      </div>
    </footer>
  );
}