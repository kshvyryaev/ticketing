import { Request, Response, NextFunction } from 'express';
import { NotAuthenticatedError } from '../errros/not-authenticated-error';

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.currentUser) {
        throw new NotAuthenticatedError();
    }

    next();
};