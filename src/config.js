module.exports = {
  siteTitle: 'Praneeth Reddy Penugonda | Graduate student | full stack developer',
  siteDescription:
    'Praneeth Reddy Penugonda is a Graduate student at san jose state university, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Praneeth Reddy Penugonda, Praneeth Reddy, software developer, software engineer, summer internship, full stack developer,',
  siteUrl: 'https://penugondapraneethreddy.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Praneeth Reddy Penugonda',
  location: 'San Jose, United States',
  email: 'praneethreddypenugonda@gmail.com',
  github: 'https://github.com/PenugondaPraneethReddy',
  twitterHandle: '@thepenugonda',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/PenugondaPraneethReddy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/praneeth-reddy-penugonda-89055b17b/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/chandrikadeb7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/the_penugonda/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/the_penugonda',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
