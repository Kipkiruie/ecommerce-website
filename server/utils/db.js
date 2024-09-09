//handles mongodb database connection

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Mongodb connected successfully');

    } catch (error) {
        console.error('Mongodb connection error', error);
        process.exit(1);
    }
};
export default connectDB; // Path: server/utils/db.js
