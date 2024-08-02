import { Request, Response, NextFunction } from 'express';

const middlewareLogger = (req: Request, res: Response, next: NextFunction) => {

  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
  });

  next();
};

export default middlewareLogger;
