import { Request, Response } from 'express';
import { AppError } from '../errors/AppError';

export function handleErrors(err: Error, _req: Request, res: Response) {
  if (err instanceof AppError) return res.status(err.code).json({ message: err.message });

  return res.status(500).json({ message: `Internal Server Error: ${err.message}` });
}