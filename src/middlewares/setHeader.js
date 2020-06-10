const setHeader = (app) => {
  app.use((request, response, next) => {
    response.setHeader('X-API-VERSION', 'v1');
    response.setHeader('X-API-ORIGIN', 'pokemon-api');
    next();
  });
};

module.exports = setHeader;
