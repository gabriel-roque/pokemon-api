import { app } from '../config/server';
import { setHeader } from './setHeader';

const middlewares = [setHeader];

export function initMiddlewares() {
  middlewares.forEach((middleware) => middleware(app));
}
