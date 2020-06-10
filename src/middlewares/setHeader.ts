import { Request, Response, NextFunction, Express } from 'express';

export const setHeader = (app: Express) => {
  app.use((request: Request, response: Response, next: NextFunction) => {
    response.setHeader('X-API-VERSION', 'v1');
    response.setHeader('X-API-ORIGIN', 'pokemon-api');
    next();
  });
};
