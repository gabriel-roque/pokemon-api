const axios = require('axios');
const { app_url } = require('../api/version');

const api = axios.create({
  baseURL: app_url || 'http://localhost:3333',
});

module.exports = { api };
