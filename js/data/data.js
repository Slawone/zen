const data = {
  header: {
    name: 'header',
    navigations: [
      {
        data: 'Download',
        target: 'download',
      },
      {
        data: 'Warranty',
        target: 'warranty',
      },
      {
        data: 'Care',
        target: 'care',
      },
      {
        data: 'Cashback',
        target: 'cashback',
      },
      {
        data: 'Clients',
        target: 'clients',
      },
    ],
  },
  download: {
    name: 'download',
    title: {
      data: 'Peaceful shopping mindful money',
      priority: 1,
    }, 
    texts: [
      'See how we can help with making your shopping experience and money management more ZEN.',
    ], 
    image: {
      source: './img/1.jpg',
      alternate: 'section download',
    },
  },
  warranty: {
    name: 'warranty',
    title: {
      data: '1-year warranty boost',
      priority: 2,
    }, 
    texts: [
      'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
      'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.',
    ], 
    image: {
      source: './img/2.jpg',
      alternate: 'section warranty',
    },
  },
  care: {
    name: 'care',
    title: {
      data: 'ZEN Care',
      priority: 2,
    }, 
    texts: [
      'Shopping online is usually a delightful experience. Until it\'s not.',
      'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
      'But, here comes ZEN Care: a free, built-in shopping protection.',
    ], 
    image: {
      source: './img/3.jpg',
      alternate: 'section care',
    },
  },
  cashback: {
    name: 'cashback',
    title: {
      data: 'and cashback!',
      priority: 2,
    }, 
    texts: [
      'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
      'We gave it a thought and made cashback way more friendly.',
      'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.',
    ],
    button: {
      data: 'Order a consultation',
      type: 'button',
    },
  },
  clients: {
    name: 'clients',
    clients: [
      {
        source: './img/clients/brand1.svg',
        alternate: 'rosegal',
      },
      {
        source: './img/clients/brand2.svg',
        alternate: 'gearbest',
      },
      {
        source: './img/clients/brand3.svg',
        alternate: 'allegro',
      },
      {
        source: './img/clients/brand4.svg',
        alternate: 'aliexpress',
      },
      {
        source: './img/clients/brand5.svg',
        alternate: 'booking',
      },
      {
        source: './img/clients/brand6.svg',
        alternate: 'mediamarkt',
      },
      {
        source: './img/clients/brand7.svg',
        alternate: 'rtveuroagd',
      },
      {
        source: './img/clients/brand8.svg',
        alternate: 'groupon',
      },
    ],
  },
  footer: {
    name: 'footer',
    columns: [
      {
        title: 'Learn',
        links: [
          'Help Center',
          'Join ZEN team',
          'Privacy Policy',
          'Cookies',
          'Terms of use',
        ],
      },
      {
        title: 'Discover',
        links: [
          'For developers',
          'Apple Pay',
          'Google Pay',
        ],
      },
      {
        title: 'Offer',
        links: [
          'Business',
          'Personal',
        ],
      },
      {
        title: 'Language',
        links: [
          'English',
          'Polish',
        ]
      },
    ],
    info: {
      logo: '',
      texts: [
        'ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
        'Registration number of the company 304749651, VAT ID LT100011714916.',
        'License of electronic money institutions number LB000457.',
        'Share capital 2.185.000,00 EUR.',
        'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
        'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.',
      ],
      copyright: '',
    }
  },
};

export default data;