import { Request, Response } from 'express';
import { listProducts } from '../useCases/products/listProducts';

export const productsController = {
  listProducts: async (req: Request, res: Response) => {
    const products = await listProducts();

    return res.status(200).json(products);
  },
};