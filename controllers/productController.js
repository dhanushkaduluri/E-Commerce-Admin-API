import Product from '../models/productModel.js';

export default class ProductController {
  async addProduct(req, res) {
    try {
      const { name, quantity } = req.body;
      const product = new Product({ name, quantity });
      await product.save();
      res.status(201).json({ product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async listProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.json({ message: 'Product deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateQuantity(req, res) {
    try {
      const { id } = req.params;
      const { number } = req.query;
      const product = await Product.findByIdAndUpdate(
        id,
        { $inc: { quantity: Number(number) } },
        { new: true }
      );
      res.json({ product, message: 'Updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}


