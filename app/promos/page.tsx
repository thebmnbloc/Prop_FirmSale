// app/promos/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Percent, Clock, Copy, Check, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import allPromos from '@/constants/allPromos';


export default function PromosPage() {
 const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getFormattedDate = () => {
    if (!mounted) return 'Loading...';
    
    const date = new Date();
    // Use a consistent format that won't mismatch between server/client
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      timeZone: 'UTC'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
      <main className="min-h-screen bg-blue-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Promotions</span>
            </h1>
            <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
              Hand-verified discount codes updated daily. Save big on your prop firm evaluations.
            </p>
          </motion.div>

          {/* Promo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPromos.map((promo, index) => (
              <motion.div
                key={`${promo.code}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group rounded-2xl bg-blue-900/40 border ${promo.best ? 'border-cyan-500/50' : 'border-blue-800/50'} p-6 hover:border-blue-600/50 transition-all duration-300`}
              >
                {promo.best && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      Best Deal
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{promo.firm}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${promo.color} text-white`}>
                      {promo.discount}
                    </span>
                  </div>
                  <Percent className="w-6 h-6 text-blue-400" />
                </div>

                <p className="text-blue-200/80 mb-4">{promo.description}</p>

                <div className="flex items-center gap-2 text-sm text-blue-400 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>{promo.expiry}</span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => copyToClipboard(promo.code)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-950 border border-blue-700 rounded-xl text-white font-mono font-semibold hover:bg-blue-900/50 transition-all group/code"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <span>{promo.code}</span>
                        <Copy className="w-4 h-4 text-blue-400 group-hover/code:text-white" />
                      </>
                    )}
                  </button>

                  <Link
                    href={promo.link}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-800/50 hover:bg-blue-800 text-blue-200 hover:text-white rounded-xl transition-all text-sm font-medium"
                  >
                    View Firm Details <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-blue-400 text-sm">
              Last updated: {getFormattedDate()} • Codes verified working
            </p>
          </motion.div>
        </div>
      </main>
)};
      