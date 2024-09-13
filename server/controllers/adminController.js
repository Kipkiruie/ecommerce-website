import { OrderedBulkOperation } from "mongodb";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

class AdminController {

    async addProduct(req, res) {
        try {
            // Ensure user is an admin
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.userId);

            if (user.role !== 'admin') {
                return res.status(403).json({ message: 'Access denied. Admins only.' });
            }

            // Proceed with adding the product
            const { name, description, price, category, stock } = req.body;

            let categoryObj = await Category.findOne({ name: category });
            if (!categoryObj) {
                categoryObj = await Category.create({ name: category });
            }

            const newProduct = await Product.create({
                name,
                description,
                price,
                category: categoryObj._id,
                stock,
            });

            res.status(201).json({ message: 'Product added successfully', product: newProduct });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding product', details: error });
        }
    }
    async updateProduct(req, res) {
        // update product logic
        try {
            const { productId } = req.params;
            const updates = req.body;

            const updateProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
            if (!updateProduct) {
                return res.status(400).json({ error: 'Product not found' });
            }
            res.status(200).json({ message: 'Product updated successfully', product: updateProduct });
        } catch (error) {
            res.status(500).json({ error: 'Error updating product', details: error });
        }

    } 

    async deleteProduct(req, res) {
        // delete product logic
        try {
            const { productId } = req.params;
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (!deletedProduct) {
                return res.status(400).json({ error: 'Product not found' });
            }
            res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting product', details: error });
        }
    }

    async getAllOrders(req, res) {
        // get all orders logic
        try {
            const orders = await Order.find();
            res.status(200).json({
                message: 'Orders retrieved successfully',
                orders,
            });
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving orders', details: error });
        }
    }
}

export default new AdminController; // Path: server/routes/adminRoutes.js
