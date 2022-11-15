import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { categoriesController } from './app/controllers/categoriesController';
import { productsController } from './app/controllers/productsController';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(_req, _file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
  }),
});

// List Categories


router.get('/categories', categoriesController.listCategories);

// Create Category
router.post('/categories', categoriesController.createCategory);

// List Products
router.get('/products', productsController.listProducts);

// Create Product
router.post('/products', upload.single('image'), (req, res) => res.json('test'));

// Get Products By Category
router.post('/categories/:categoryId/products', (req, res) => res.json('test'));

// List Orders
router.get('/orders', (req, res) => res.json('test'));

// Create Order
router.post('/orders', (req, res) => res.json('test'));

// Change Order Status
router.patch('/orders/:orderId', (req, res) => res.json('test'));

// Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => res.json('test'));
