import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

import mainRouter from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(express.json());


//use main router with /api prefix
app.use('/api', mainRouter);



//connect to database
connectDB();

//start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
