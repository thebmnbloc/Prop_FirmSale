// app/alpha/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink, Star, Wallet, Clock } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import alphaData from '@/constants/alphaData';

export default function AlphaPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="min-h-screen bg-blue-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-white transition-colors text-sm">← Back to Home</Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
              α
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{alphaData.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(alphaData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-blue-800'}`} />
                  ))}
                </div>
                <span className="text-blue-300">{alphaData.rating} ({alphaData.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-blue-200/80 max-w-3xl">{alphaData.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-emerald-500 rounded-full" />
                Active Promotions
              </h2>
              <div className="space-y-4">
                {alphaData.promos.map((promo, index) => (
                  <div key={promo.code} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-blue-950/50 border border-blue-800/30 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl font-bold text-white">{promo.discount}</span>
                        {index === 0 && <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded uppercase">Best Value</span>}
                      </div>
                      <p className="text-blue-300 text-sm">{promo.details}</p>
                      <p className="text-blue-500 text-xs mt-1">Expires: {promo.expires}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(promo.code)}
                      className="px-4 py-2 bg-blue-900 border border-blue-700 rounded-lg text-white font-mono font-semibold hover:bg-blue-800 transition-all flex items-center gap-2"
                    >
                      {copiedCode === promo.code ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      {promo.code}
                    </button>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Instant Funding Tiers</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-blue-400 border-b border-blue-800/50">
                      <th className="pb-3 font-medium">Capital</th>
                      <th className="pb-3 font-medium">Monthly Fee</th>
                      <th className="pb-3 font-medium">Profit Split</th>
                      <th className="pb-3 font-medium">With 25% OFF</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-200">
                    {alphaData.tiers.map((tier) => (
                      <tr key={tier.capital} className="border-b border-blue-800/30 last:border-0">
                        <td className="py-4 font-semibold text-white">{tier.capital}</td>
                        <td className="py-4">{tier.fee}</td>
                        <td className="py-4 text-emerald-400 font-semibold">{tier.split}</td>
                        <td className="py-4 text-cyan-400 font-semibold">
                          ${(parseInt(tier.fee.replace(/\D/g,'')) * 0.75).toFixed(0)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                    <Wallet className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">1. Pay Fee</h3>
                  <p className="text-sm text-blue-300">Choose your capital tier and pay the monthly subscription</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">2. Trade Live</h3>
                  <p className="text-sm text-blue-300">Get instant access to live capital, no evaluation period</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">3. Get Paid</h3>
                  <p className="text-sm text-blue-300">Request payouts weekly, keep up to 80% of profits</p>
                </div>
              </div>
            </motion.section>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-4">Why Instant Funding?</h3>
              <ul className="space-y-3 mb-6">
                {alphaData.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-blue-200">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={alphaData.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                Get Instant Funding <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}