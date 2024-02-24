import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import { connectToDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectToDB();
});
 
