// app/take-profit-trader/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink, Star, Zap, Shield, DollarSign } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import tptData from '@/constants/tptData';

export default function TPTPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              T
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{tptData.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(tptData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-blue-800'}`} />
                  ))}
                </div>
                <span className="text-blue-300">{tptData.rating} ({tptData.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-blue-200/80 max-w-3xl">{tptData.description}</p>
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
                <span className="w-2 h-8 bg-cyan-500 rounded-full" />
                Active Promotions
              </h2>
              <div className="space-y-4">
                {tptData.promos.map((promo, index) => (
                  <div key={promo.code} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-blue-950/50 border border-blue-800/30 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl font-bold text-white">{promo.discount}</span>
                        {index === 0 && <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded uppercase">Popular</span>}
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
              <h2 className="text-2xl font-bold text-white mb-6">Account Options</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {tptData.accounts.map((account) => (
                  <div key={account.size} className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/30 hover:border-cyan-500/50 transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-white">{account.size}</h3>
                      <span className="text-cyan-400 font-bold">{account.price}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-blue-300">
                        <span>Profit Target:</span>
                        <span className="text-white">${account.target}</span>
                      </div>
                      <div className="flex justify-between text-blue-300">
                        <span>Max Drawdown:</span>
                        <span className="text-white">${account.drawdown}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Features
                </h2>
                <ul className="space-y-3">
                  {tptData.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-blue-200">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-blue-900/40 border border-blue-800/50"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  Rules
                </h2>
                <ul className="space-y-3">
                  {tptData.rules.map((rule) => (
                    <li key={rule} className="flex items-start gap-2 text-sm text-blue-200">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-4">1-Step Advantage</h3>
              <p className="text-blue-200 text-sm mb-6">
                Unlike other firms requiring 2 phases, Take Profit Trader gets you funded after just one evaluation phase. Faster to profits.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-950/50">
                  <DollarSign className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">90% Profit Split</div>
                    <div className="text-xs text-blue-400">Keep more of what you earn</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-950/50">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="text-white font-semibold">Daily Payouts</div>
                    <div className="text-xs text-blue-400">Request withdrawals daily</div>
                  </div>
                </div>
              </div>

              <a
                href={tptData.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Start 1-Step Eval <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}