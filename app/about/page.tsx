// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Shield, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To make funded trading accessible by negotiating the best discounts with top prop firms.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Over 10,000 traders trust our codes to save money on their evaluation fees.'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: "We've helped traders save over $2M in evaluation costs since 2023."
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We only partner with firms that have proven payout histories and fair rules.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blue-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Prop Firm Sale</span>
          </h1>
          <p className="text-xl text-blue-200/80 leading-relaxed">
            We're traders ourselves. We know how expensive evaluation fees can get when you're trying to prove yourself. 
            That's why we partnered with the best prop firms to get you exclusive discounts.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 p-8 rounded-2xl bg-blue-900/30 border border-blue-800/50"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <div className="space-y-4 text-blue-200/80 leading-relaxed">
            <p>
              Prop Firm Sale started in 2023 when a group of futures and forex traders realized we were all paying full price 
              for prop firm challenges. We reached out to Apex, MFFU, and other major firms to negotiate bulk discounts for our community.
            </p>
            <p>
              Today, we're the largest independent prop firm affiliate, helping thousands of traders save 10-50% on evaluation costs. 
              We don't charge traders anything – we earn a small commission from the firms when you use our codes.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="p-6 rounded-xl bg-blue-900/20 border border-blue-800/30 hover:border-blue-700/50 transition-all"
            >
              <value.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-blue-300/80 text-sm">{value.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-950 border border-blue-800/50"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="" >Have a promo code to share? Want to partner with us?</p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="mailto:contact@propfirmsale.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800/50 hover:bg-blue-800 text-white rounded-full transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
            <a
              href="https://twitter.com/propfirmsale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800/50 hover:bg-blue-800 text-white rounded-full transition-all"
            >
              <Twitter className="w-4 h-4" />
              Follow Us
            </a>
          </div>
        </motion.div>

        {/* Affiliate Disclosure */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-sm text-blue-400/60"
        >
          <p>
            Disclosure: Prop Firm Sale is an affiliate partner with the firms listed on this site. 
            We earn a commission when you purchase through our links, at no extra cost to you.
          </p>
        </motion.div>
      </div>
    </main>
  );
}