import { handleRequests, init, handleResponses } from "express-oas-generator";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/allroutes.js";

dotenv.config()

const app = express();
handleResponses(app, {});

app.use(express.json())


init(
    app,
    function(spec) { return spec; },
    '/swagger.json',
    60 * 1000,
    'api-docs',
    modelNames,
    ['users'],
    ['production'],
    true,
  )


  app.use(router)
  handleRequests();


  
const PORT = process.env.PORT ||7000
const modelNames = mongoose.modelNames();


app.listen(PORT, () => {
    console.log(`onyx portfolio api is running${PORT}`);
    
});


