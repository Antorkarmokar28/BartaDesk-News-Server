import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsynch = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsynch;
