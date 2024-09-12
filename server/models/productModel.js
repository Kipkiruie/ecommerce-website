import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, min: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  image: { type: String },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String },
    rating: { type: Number, required: true, min: 1, max: 5 },
  }],
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  });

  const Product = mongoose.model('Product', productSchema);
  export default Product;
  