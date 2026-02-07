const tptData = {
  name: 'Take Profit Trader',
  rating: 4.5,
  reviews: 1243,
  description: 'The fastest path to funding with 1-step evaluation, no time limits, and instant account upgrades upon passing.',
  affiliateLink: 'https://takeprofittrader.com/ref/propfirmsale',
  promos: [
    { code: 'TPT10', discount: '10% OFF', details: 'All account sizes', expires: 'Never expires' },
    { code: 'PROFIT15', discount: '15% OFF', details: 'Pro account only', expires: 'Limited time' }
  ],
  features: [
    '1-step evaluation only',
    'No time limits',
    'Instant funding upon pass',
    '90% profit split',
    'Daily payouts available',
    'Free retry if failed'
  ],
  accounts: [
    { size: '$25K', price: '$150', target: '$1,500', drawdown: '$1,500' },
    { size: '$50K', price: '$200', target: '$3,000', drawdown: '$2,500' },
    { size: '$100K', price: '$350', target: '$6,000', drawdown: '$3,500' },
    { size: '$150K', price: '$500', target: '$9,000', drawdown: '$5,000' }
  ],
  rules: [
    'Pass 1-step evaluation',
    'No daily loss limit',
    'Trade minimum 5 days',
    'No weekend holding',
    'Consistency rule applies'
  ]
};

export default tptData;