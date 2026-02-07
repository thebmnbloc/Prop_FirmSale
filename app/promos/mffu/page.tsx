// app/mffu/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink, Star, AlertCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import mffuData from '@/constants/mffuData';

export default function MFFUPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
              M
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{mffuData.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(mffuData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-blue-800'}`} />
                  ))}
                </div>
                <span className="text-blue-300">{mffuData.rating} ({mffuData.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-blue-200/80 max-w-3xl">{mffuData.description}</p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-12 p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{mffuData.stats.totalFunded}</div>
            <div className="text-sm text-blue-400">Total Funded</div>
          </div>
          <div className="text-center border-x border-blue-800/50">
            <div className="text-2xl font-bold text-white">{mffuData.stats.avgPayout}</div>
            <div className="text-sm text-blue-400">Avg Payout</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{mffuData.stats.successRate}</div>
            <div className="text-sm text-blue-400">Pass Rate</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-purple-500 rounded-full" />
                Active Promotions
              </h2>
              <div className="space-y-4">
                {mffuData.promos.map((promo, index) => (
                  <div key={promo.code} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-blue-950/50 border border-blue-800/30 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl font-bold text-white">{promo.discount}</span>
                        {index === 1 && <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded uppercase">Hot</span>}
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
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Available Plans</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {mffuData.plans.map((plan) => (
                  <div key={plan.name} className={`relative p-4 rounded-xl border ${plan.popular ? 'border-purple-500/50 bg-purple-500/10' : 'border-blue-800/50 bg-blue-950/30'}`}>
                    {plan.popular && (
                      <span className="absolute -top-2 left-4 px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded">Popular</span>
                    )}
                    <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <p className="text-sm text-blue-300 mb-4">{plan.target}</p>
                    <div className="text-xs text-blue-400">Starting price</div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {mffuData.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-200">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border border-purple-500/30 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-4">Scaling Plan</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Initial</span>
                  <span className="text-white font-semibold">$10,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">After 4 payouts</span>
                  <span className="text-white font-semibold">$20,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Maximum</span>
                  <span className="text-cyan-400 font-bold">$2,000,000</span>
                </div>
              </div>
              
              <a
                href={mffuData.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Start Evaluation <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-xl bg-blue-900/30 border border-blue-800/50"
            >
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Pro Tip</h4>
                  <p className="text-sm text-blue-300">
                    The Rapid plan is best for experienced traders. Skip the 2-phase evaluation and get funded faster with a one-time 20% target.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}