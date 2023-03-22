import {Request, Response, NextFunction} from 'express';

export type controller = {
    [k: string]: (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
};
export type errorObject = {
    log: string;
    status: number;
    message: {
        err: string;
    };
};

export type ServerError = {
    log: string;
    status: number;
    message: {
      err: string;
    };
  };