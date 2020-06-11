const express = require('express');
const cors = require('cors');

const routes = require('../../config/routes/routes');
const api = require('../../config/api/version');

const app = express();

// CORS
app.use(cors());

// ENGINE
app.use(express.json());

// PREFIX END-POINTS
app.use(api.prefix, routes);

module.exports = app;
