import express from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();


app.use(express.json())


const PORT = process.env.PORT ||7000





app.listen(PORT, () => {
    console.log("onyx portfolio api is running");
});