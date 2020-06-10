const express = require('express');
const cors = require('cors');

const routes = require('../../config/routes/routes');
const api = require('../../config/api/version');
const initMiddlewares = require('../../middlewares');

const app = express();

// ENGINE
app.use(express.json());

// CORS
app.use(cors());

// MIDDLESWARES
// initMiddlewares(app);

// PREFIX END-POINT
app.use(api.prefix, routes);

module.exports = app;
