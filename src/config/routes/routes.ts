import { Router } from 'express';

const routes = Router();

import RootController from '../../app/controllers/root.controller';
const rootController = new RootController();

routes.get('/', rootController.index);

export default routes;
