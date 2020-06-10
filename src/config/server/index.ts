import express from 'express';
import cors from 'cors';

import routes from '../../config/routes/routes';
import { api } from '../../config/api/version';

import { initMiddlewares } from '../../middlewares';

const app = express();

// ENGINE
app.use(express.json());

// CORS
app.use(cors());

// MIDDLESWARES
initMiddlewares();

// PREFIX END-POINT
app.use(api.prefix, routes);

export { app };
