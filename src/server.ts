require('dotenv').config();

import { app } from './config/server';

// SERVER PORT
app.listen(process.env.PORT || 3333);
