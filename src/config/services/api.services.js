const axios = require('axios');

const api = axios.create({
  baseURL: process.env.APP_URL || 'http://localhost:3333',
});

module.exports = api;
