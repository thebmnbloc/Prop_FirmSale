// app/apex/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink, Star, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import apexData from '@/constants/apexData';

export default function ApexPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="min-h-screen bg-blue-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link href="/" className="text-blue-400 hover:text-white transition-colors text-sm">
            ← Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{apexData.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(apexData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-blue-800'}`} />
                  ))}
                </div>
                <span className="text-blue-300">{apexData.rating} ({apexData.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-blue-200/80 max-w-3xl">{apexData.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Promos & CTA */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Promos */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-orange-500 rounded-full" />
                Active Promotions
              </h2>
              <div className="space-y-4">
                {apexData.promos.map((promo, index) => (
                  <div key={promo.code} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-blue-950/50 border border-blue-800/30 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl font-bold text-white">{promo.discount}</span>
                        {index === 0 && (
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded uppercase">Best</span>
                        )}
                      </div>
                      <p className="text-blue-300 text-sm">{promo.details}</p>
                      <p className="text-blue-500 text-xs mt-1">Expires: {promo.expires}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => copyToClipboard(promo.code)}
                        className="px-4 py-2 bg-blue-900 border border-blue-700 rounded-lg text-white font-mono font-semibold hover:bg-blue-800 transition-all flex items-center gap-2"
                      >
                        {copiedCode === promo.code ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        {promo.code}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Account Sizes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Account Sizes</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-blue-400 border-b border-blue-800/50">
                      <th className="pb-3 font-medium">Size</th>
                      <th className="pb-3 font-medium">Price</th>
                      <th className="pb-3 font-medium">Profit Target</th>
                      <th className="pb-3 font-medium">With 20% OFF</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-200">
                    {apexData.accountSizes.map((account) => (
                      <tr key={account.size} className="border-b border-blue-800/30 last:border-0">
                        <td className="py-4 font-semibold text-white">{account.size}</td>
                        <td className="py-4">${account.price}</td>
                        <td className="py-4">${account.target}</td>
                        <td className="py-4 text-cyan-400 font-semibold">
                          ${(parseInt(account.price) * 0.8).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Apex?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {apexData.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-200">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Rules & CTA */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-4">Trading Rules</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-blue-400 block mb-1">Profit Target</span>
                  <span className="text-white font-medium">{apexData.rules.profitTarget}</span>
                </div>
                <div>
                  <span className="text-blue-400 block mb-1">Max Drawdown</span>
                  <span className="text-white font-medium">{apexData.rules.maxDrawdown}</span>
                </div>
                <div>
                  <span className="text-blue-400 block mb-1">Time Limit</span>
                  <span className="text-white font-medium">{apexData.rules.timeLimit}</span>
                </div>
                <div>
                  <span className="text-blue-400 block mb-1">Min Trading Days</span>
                  <span className="text-white font-medium">{apexData.rules.minDays}</span>
                </div>
              </div>

              <a
                href={apexData.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Funded Now <ExternalLink className="w-4 h-4" />
              </a>

              <p className="mt-4 text-xs text-center text-blue-300/60">
                Use code APEX20 at checkout
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-300">
                Apex Trader Funding is a leading futures prop firm. Make sure to read their 
                <a href="#" className="text-cyan-400 hover:underline ml-1">risk disclosure</a> before trading.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}