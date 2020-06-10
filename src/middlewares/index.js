const setHeader = require('./setHeader');

const middlewares = [setHeader];

function initMiddlewares(app) {
  middlewares.forEach((middleware) => middleware(app));
}

module.exports = initMiddlewares;
