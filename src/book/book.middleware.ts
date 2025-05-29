import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const protocol = req.protocol;
    const host = req.get('host');
    const url = req.originalUrl;
    const method = req.method;
    const date = new Date().toLocaleString();

    const log = `${protocol}://${host}${url}  ${method}  ${date}\n`;

    console.log(log);

    // Create logs directory if it doesn't exist
    const logDir = path.join(__dirname, '..', '..', 'logs');
    const logPath = path.join(logDir, 'request.log');

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    // Append log to request.log
    fs.appendFile(logPath, log, (err) => {
      if (err) {
        console.error('Failed to write request log:', err);
      }
    });

    next();
  }
}
