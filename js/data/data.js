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
  },
};

export default data;