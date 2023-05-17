import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('reqeuest....', req.url, req.method);
    next();
  }
}
