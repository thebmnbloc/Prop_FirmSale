const apexData = {
  name: 'Apex Trader Funding',
  rating: 4.8,
  reviews: 2847,
  description: 'Industry leader in futures prop trading with no daily drawdown limits and bi-weekly payouts.',
  affiliateLink: 'https://apextraderfunding.com/member/aff/go/propfirmsale',
  promos: [
    { code: 'APEX20', discount: '20% OFF', details: 'All evaluation accounts', expires: 'Limited time' },
    { code: 'APEX50', discount: '50% OFF', details: 'Reset fees only', expires: 'Weekends' },
    { code: 'APEX80', discount: '80% OFF', details: 'Evaluation + resets (New Year Special)', expires: 'Jan 31' }
  ],
  features: [
    'No daily drawdown limit',
    'Bi-weekly payouts',
    'Trade full-sized contracts',
    'Keep 100% of first $25,000',
    '90/10 profit split after threshold',
    'Trade on Tradovate/NinjaTrader'
  ],
  accountSizes: [
    { size: '$25K', price: '$147', target: '$1,500' },
    { size: '$50K', price: '$167', target: '$3,000' },
    { size: '$100K', price: '$187', target: '$6,000' },
    { size: '$150K', price: '$357', target: '$9,000' },
    { size: '$300K', price: '$657', target: '$20,000' }
  ],
  rules: {
    profitTarget: 'Varies by account size',
    maxDrawdown: 'Trailing max drawdown',
    timeLimit: 'No time limit',
    minDays: 'No minimum trading days'
  }
};

export default apexData;