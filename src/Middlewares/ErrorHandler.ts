import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(error: Error, _req: Request, res: Response, next: NextFunction) {
    switch (error.name) {
      case 'CastError':
        res.status(422).json({ message: 'Invalid mongo id' });
        next();
        break;
      case 'NotFoundError':
        res.status(404).json({ message: 'Not found' });
        next();
        break;
      default:
        res.status(500).json({ message: error.message });
        next();
        break;
    }
    next();
  }
}

export default ErrorHandler;