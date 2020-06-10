require('dotenv').config();

const app = require('./config/server');

// DB CONNECTION
require('./database');

// SERVER PORT
app.listen(process.env.PORT || 3333);
