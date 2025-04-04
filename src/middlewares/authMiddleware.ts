import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const authMiddleware = (req: any, res: any, next: any) => {
 const token = req.header('Authorization')?.replace('Bearer ', '');
 if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

 try {
   const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
   (req as any).user = decoded;
   next();
 } catch (error) {
   return res.status(400).json({ error: 'Invalid token.' });
 }
};
