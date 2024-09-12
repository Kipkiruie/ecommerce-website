import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

class ProductsController {

    async getProducts(req, res) {
        // get products logic
        try {
            const products = await Product.find().populate('category', 'name description');
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Server error', details: error });
        }
    }

    async getProductById(req, res) {
        // get product by id logic
        try {
            const product = await Product.findById(req.params.id).populate('category', 'name description');
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Server error', details: error });
        }
    }

    async getCategories(req, res) {
        // get categories logic
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Server error', details: error });
        }
    }

    async getProductsByCategory(req, res) {
        // get products by category logic
        try {
            const category = await Category.findOne({ name: req.params.categoryName });
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            const products = await Product.find({ category:category._id }).populate('category', 'name description');
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Server error', details: error });
        }
    }

    async searchProducts(req, res) {
        try {
            const searchQuery = req.query.q;
            const products = await Product.find({
                $or: [
                    { name: { $regex: searchQuery, $options: 'i' } },
                    { description: { $regex: searchQuery, $options: 'i' } },
                ]
            }).populate('category', 'name description');
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // Get product reviews
    async getProductReviews(req, res) {
        try {
            const product = await Product.findById(req.params.id).select('reviews');
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product.reviews);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
}
export default new ProductsController(); // Path: server/controllers/productsController.js
