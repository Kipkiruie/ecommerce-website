class ProductsController {

    async getProducts(req, res) {
        // get products logic
        res.send('Products route');
    }

    async getProductById(req, res) {
        // get product by id logic
        res.send('get product by id route');
    }

    async getCategories(req, res) {
        // get categories logic
        res.send('get categories route');
    }

    async getProductsByCategory(req, res) {
        // get products by category logic
        res.send('get products by category route');
    }

    async searchProducts(req, res) {
        // search products logic
        res.send('search products route');
    }

    async getProductReviews(req, res) {
        // get product reviews logic
        res.send('get product reviews route');
    }

}
export default new ProductsController(); // Path: server/controllers/productsController.js
