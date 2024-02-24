import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController=new ProductController();


router.post('/create', productController.addProduct);
router.get('/', productController.listProducts);
router.delete('/:id', productController.deleteProduct);
router.post('/:id/update_quantity', productController.updateQuantity);

export default router;
