const alphaData = {
  name: 'Alpha Capital',
  rating: 4.7,
  reviews: 856,
  description: 'Instant funding with no evaluation needed. Start trading live capital immediately with up to 80% profit split.',
  affiliateLink: 'https://alphacapital.com/ref/propfirmsale',
  promos: [
    { code: 'ALPHA25', discount: '25% OFF', details: 'First month subscription', expires: 'New users only' },
    { code: 'ALPHA50', discount: '50% OFF', details: 'Setup fee waiver', expires: 'Limited time' }
  ],
  features: [
    'No evaluation required',
    'Instant live account',
    'Up to 80% profit split',
    'Weekly payouts',
    'Refund on first profit split',
    'Trade forex & gold'
  ],
  tiers: [
    { capital: '$10K', fee: '$200', split: '70%' },
    { capital: '$25K', fee: '$400', split: '75%' },
    { capital: '$50K', fee: '$750', split: '80%' },
    { capital: '$100K', fee: '$1,400', split: '80%' }
  ]
};

export default alphaData;