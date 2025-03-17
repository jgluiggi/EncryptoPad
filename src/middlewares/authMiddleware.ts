import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
 const token = req.header('Authorization')?.replace('Bearer ', '');
 if (!token) return res.status(401).send('Access denied. No token provided.');

 try {
   const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
   (req as any).user = decoded;
   next();
 } catch (error) {
   res.status(400).send('Invalid token.');
 }
};
