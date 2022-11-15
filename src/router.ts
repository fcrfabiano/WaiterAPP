import { Router } from 'express';
import { categoriesController } from './app/controllers/categoriesController';
import { productsController } from './app/controllers/productsController';

export const router = Router();

// List Categories


router.get('/categories', categoriesController.listCategories);

// Create Category
router.post('/categories', categoriesController.createCategory);

// List Products
router.get('/products', productsController.listProducts);

// Create Product
router.post('/products', (req, res) => res.json('test'));

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
