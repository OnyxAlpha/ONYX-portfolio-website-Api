import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = express();


app.use(express.json())


const PORT = process.env.PORT ||8000

const mongoURI =process.env.MONGO_URI


mongoose.connect(mongoURI).then(()=>{
    console.log('Database is connected')
}).catch((error)=> console.log(error))




app.listen(PORT, () => {
    console.log("onyx portfolio api is running");
});