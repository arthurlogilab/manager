const guidesRoot = 'https://docs.ovh.com';
const helpRoot = 'https://help.ovhcloud.com';

export default {
  EU: {
    guides: {
      home: {
        CZ: `${guidesRoot}/cz/cs/`,
        DE: `${guidesRoot}/de/`,
        ES: `${guidesRoot}/es/`,
        FI: `${guidesRoot}/fi/`,
        FR: `${guidesRoot}/fr/`,
        GB: `${guidesRoot}/gb/en/`,
        IE: `${guidesRoot}/ie/en/`,
        IT: `${guidesRoot}/it/`,
        LT: `${guidesRoot}/lt/`,
        MA: `${guidesRoot}/gb/en/`,
        NL: `${guidesRoot}/nl/`,
        PL: `${guidesRoot}/pl/`,
        PT: `${guidesRoot}/pt/`,
        SN: `${guidesRoot}/gb/en/`,
        TN: `${guidesRoot}/gb/en/`,
      },
    },
    help: {
      DE: `${helpRoot}/de`,
      ES: `${helpRoot}/es-es`,
      FR: `${helpRoot}/fr`,
      GB: `${helpRoot}/en-gb`,
      IE: `${helpRoot}/en-ie`,
      IT: `${helpRoot}/it`,
      MA: `${helpRoot}/fr-ma`,
      NL: `${helpRoot}/nl`,
      PL: `${helpRoot}/pl`,
      PT: `${helpRoot}/pt`,
      SN: `${helpRoot}/fr-sn`,
      TN: `${helpRoot}/fr-tn`,
    },
    tasks: 'http://travaux.ovh.net/',
    expressOrder: {
      DE: 'https://www.ovh.de/order/express/#/new/express/resume',
      EN: 'https://www.ovh.co.uk/order/express/',
      ES: 'https://www.ovh.es/order/express/',
      FR: 'https://www.ovh.com/fr/order/express/#/new/express/resume',
      GB: 'https://www.ovh.co.uk/order/express/',
      IE: 'https://www.ovh.ie/order/express/',
      IT: 'https://www.ovh.it/order/express/',
      MA: 'https://www.ovh.com/ma/order/express/',
      NL: 'https://www.ovh.nl/order/express/',
      PL: 'https://www.ovh.pl/order/express/',
      PT: 'https://www.ovh.pt/order/express/',
      RU: 'https://www.ovh.ie/order/express/',
      SN: 'https://www.ovh.sn/order/express/',
      TN: 'https://www.ovh.com/tn/order/express/',
    },
  },
  CA: {
    guides: {
      home: {
        ASIA: `${guidesRoot}/ca/en/`,
        AU: `${guidesRoot}/ca/en/`,
        CA: `${guidesRoot}/ca/en/`,
        QC: `${guidesRoot}/ca/fr/`,
        SG: `${guidesRoot}/ca/en/`,
        WE: `${guidesRoot}/ca/en/`,
        WS: `${guidesRoot}/ca/en/`,
      },
    },
    help: {
      ASIA: `${helpRoot}/asia`,
      AU: `${helpRoot}/en-au`,
      CA: `${helpRoot}/en-ca`,
      QC: `${helpRoot}/fr-ca`,
      SG: `${helpRoot}/en-sg`,
      WE: `${helpRoot}/en`,
      WS: `${helpRoot}/es`,
    },
    tasks: 'http://travaux.ovh.net/',
    expressOrder: {
      ASIA: 'https://ca.ovh.com/asia/order/express/',
      AU: 'https://ca.ovh.com/au/order/express/',
      CA: 'https://ca.ovh.com/en/order/express/',
      QC: 'https://ca.ovh.com/fr/order/express/',
      SG: 'https://ca.ovh.com/sg/order/express/',
      WE: 'https://us.ovh.com/us/order/express/',
      WS: 'https://us.ovh.com/us/es/order/express/',
    },
  },
  US: {
    guides: {
      home: {
        US: 'https://support.us.ovhcloud.com',
      },
    },
    help: {
      US: 'https://us.ovhcloud.com/support',
    },
    tasks: '',
    expressOrder: 'https://us.ovhcloud.com/order/express/#/express/',
  },
};
