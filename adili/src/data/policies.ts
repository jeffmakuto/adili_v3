export const policies = [
  {
    id: '1',
    title: 'Integrity Code (IC)',
    description: 'Sign up to the',
    embedSrc: process.env.NEXT_PUBLIC_IC_EMBED_SRC || '#',
    icon: '/images/integrity-code.JPG',
  },
  {
    id: '2',
    title: 'Partner Code of Conduct (PCC)',
    description: 'Standards and expectations for maintaining transparency, fairness, and ethical practices with our business partners.',
    embedSrc: process.env.NEXT_PUBLIC_PCC_EMBED_SRC || '#',
    icon: '/images/business-partner.jpg',
  },
  {
    id: '3',
    title: 'Ethics Charter (EC)',
    description: 'Guiding framework for decision-making and behavior, ensuring that all members adhere to a shared set of values',
    embedSrc: process.env.NEXT_PUBLIC_EC_EMBED_SRC || '#',
    icon: '/images/ethics-charter.jpg',
  },
];
