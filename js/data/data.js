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
    buttons: [
      {
        url: 'https://apple.com',
        type: 'apple',
      },
      {
        url: 'https://google.com',
        type: 'google',
      },
    ],
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
    buttonText: 'Order a consultation',
  },
  clients: {
    name: 'clients',
    clients: [
      {
        source: './img/clients/light/brand1.svg',
        alternate: 'rosegal',
      },
      {
        source: './img/clients/light/brand2.svg',
        alternate: 'gearbest',
      },
      {
        source: './img/clients/light/brand3.svg',
        alternate: 'allegro',
      },
      {
        source: './img/clients/light/brand4.svg',
        alternate: 'aliexpress',
      },
      {
        source: './img/clients/light/brand5.svg',
        alternate: 'booking',
      },
      {
        source: './img/clients/light/brand6.svg',
        alternate: 'mediamarkt',
      },
      {
        source: './img/clients/light/brand7.svg',
        alternate: 'rtveuroagd',
      },
      {
        source: './img/clients/light/brand8.svg',
        alternate: 'groupon',
      },
    ],
  },
  footer: {
    name: 'footer',
    columns: [
      { 
        title: {
          data: 'Learn',
          priority: 3,
        },
        links: [
          {
            data: 'Help center',
            url: 'https://ya.ru/',
          },
          {
            data: 'Join ZEN team',
            url: 'https://ya.ru/',
          },
          {
            data: 'Privacy Policy',
            url: 'https://ya.ru/',
          },
          {
            data: 'Cookies',
            url: 'https://ya.ru/',
          },
          {
            data: 'Terms of use',
            url: 'https://ya.ru/',
          },
        ],
      },
      {
        title: {
          data: 'Discover',
          priority: 3,
        },
        links: [
          {
            data: 'For developers',
            url: '#',
          },
          {
            data: 'Apple Pay',
            url: '#',
          },
          {
            data: 'Google Pay',
            url: '#',
          },
        ],
      },
      {
        title: {
          data: 'Offer',
          priority: 3,
        },
        links: [
          {
            data: 'Business',
            url: '#',
          },
          {
            data: 'Personal',
            url: '#',
          },
        ],
      },
      {
        title: {
          data: 'Language',
          priority: 3,
        },
        links: [
          {
            data: 'English',
            url: '#',
          },
          {
            data: 'Polish',
            url: '#',
          },
        ],
      },
      {
        title: {
          data: 'Follow us',
          priority: 3,
        },
        links: [
          {
            data: 'img/icons/in.svg',
            url: '#',
          },
        ],
      },
      {
        title: {
          data: 'Contact',
          priority: 3,
        },
        links: [
          {
            data: 'hello@zen.com',
            url: 'hello@zen.com',
          },
        ],
      },
    ],
    info: {
      footerLogo : {
        source: 'img/icons/footer_logo.svg',
        alterante: 'Brand Zen Company',
      },
      texts: [
        'ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
        'Registration number of the company 304749651, VAT ID LT100011714916.',
        'License of electronic money institutions number LB000457.',
        'Share capital 2.185.000,00 EUR.',
        'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
        'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.',
      ],
      copyright: {
        url: 'https://ya.ru',
        source: 'img/icons/copyright.svg',
        alternate: 'copyright',
      },
    },
  },
};

export default data;