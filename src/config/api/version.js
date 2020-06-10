const VERSION = 'v1';

let api = {
  version: VERSION,
  prefix: `/${VERSION}/api`,
  app_url: '',
  body: {
    version: VERSION,
    origin: 'pokemon-api',
  },
};

api.app_url = `${process.env.APP_URL}${api.prefix}`;

module.exports = api;
