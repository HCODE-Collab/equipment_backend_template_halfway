
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        (req as any).user = user;
        next();
    });

}