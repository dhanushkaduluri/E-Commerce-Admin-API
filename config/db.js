import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const url='mongodb+srv://dhanushkaduluri:630356Dk@cluster0.fbxouqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// connect to mongoDB Atlas
export const connectToDB=async()=>{
    try {
        mongoose.connect(url);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
}