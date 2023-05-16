/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Blush Nail Bar & Spa',
    position: 'Web Manager',
    url: 'https://blushnailbarandspa.com',
    startDate: '2020-02-01',
    // summary: ``,
    highlights: [
      'Designed and executed a website redesign project that increased website traffic by 30% and improved user experience, resulting in a 25% increase in online sales.',
      "Developed and managed a content marketing strategy that increased the website's organic search ranking, leading to a 55% increase in website visitors from search engines.",
      'Implemented a website personalization strategy that improved customer engagement and loyalty, resulting in a 15% increase in repeat purchases.',
      'Launched a successful email marketing campaign that increased open and click-through rates by 30% and generated $50,000 in additional revenue.',
      "Developed and managed an SEO strategy that improved the website's search engine visibility, resulting in a 20% increase in organic search traffic.",
    ],
  },
  {
    name: 'The Hunger Games MTG',
    position: 'Owner',
    url: 'https://shop.tcgplayer.com/sellerfeedback/c451e38d',
    startDate: '2020-02-01',
    endDate: '2021-11-01',
    // summary: ``,
    highlights: [
      'Provided excellent customer service, resulting in a high rate of repeat business and positive online reviews (99.9% positive rating).',
      'Established and grew an online trading card store, resulting in a 25% increase in sales year-over-year.',
      'Developed and implemented a successful marketing strategy, including email campaigns and social media advertising, to reach target customers and drive sales.',
      'Conducted market research and analysis to stay current on industry trends and adjust the business strategy as needed.',
      'Managed inventory, ensuring the availability of popular trading cards while minimizing overstock and waste.',
    ],
  },
  {
    name: 'Passport Inc.',
    position: 'IT Operations Analyst',
    url: 'https://www.passportinc.com/',
    startDate: '2018-12-01',
    endDate: '2020-02-01',
    // summary: ``,
    highlights: [
      'Implemented and managed a disaster recovery plan, reducing downtime by 50% during critical system failures.',
      'Automated manual processes, resulting in a 20% increase in productivity and a reduction in errors.',
      'Conducted regular security audits and identified potential threats, implementing measures to improve network security and prevent data breaches.',
      'Conducted network performance analysis, identified bottlenecks, and implemented solutions to increase network speed by 20%.',
      'Trained and mentored junior IT staff on best practices for operations and incident management.',
    ],
  },
  {
    name: 'Intelligys',
    position: 'Implementations Manager',
    url: '',
    startDate: '2018-12-01',
    endDate: '2020-02-01',
    // summary: ``,
    highlights: [
      'Managed multiple implementation projects, delivering all projects on time and within budget while exceeding customer expectations.',
      'Developed and maintained project plans, including schedules, budgets, and resource allocation, to ensure project success.',
      'Collaborated with cross-functional teams to ensure seamless integration of new systems and processes into existing infrastructure.',
      'Trained and onboarded new team members, resulting in a 70% increase in productivity and a reduction in ramp-up time.',
      'Provided exceptional customer service, resulting in a high rate of customer referrals and repeat business.',
    ],
  },
];

export default work;
