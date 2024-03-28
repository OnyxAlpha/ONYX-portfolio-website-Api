import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./routes/allroutes.js";
import { handleRequests, init, handleResponses } from "express-oas-generator";
import cors from "cors"

dotenv.config()
const app = express();

const modelNames = mongoose.modelNames();

handleResponses(app, {});

app.use(express.json());
app.use(cors());

handleResponses(app);

app.use(express.json());


const PORT = process.env.PORT ||8000

const mongoURI =process.env.MONGO_URI


mongoose.connect(mongoURI).then(()=>{
    console.log('Database is connected')
}).catch((error)=> console.log(error))


app.use(router);


app.listen(PORT, () => {
    init(
        app,
        (spec) => {
          spec.info = {
            title: "Onyx Portfolio API Documentation",
            description: "API Documentation for Onyx Portfolio website",
          };
          spec.host = "onyx-portfolio-website-api-1.onrender.com";
          spec.schemes = ["http", "https"];
    
          return spec;
        },
        "/swagger.json",
        60 * 1000,
        "api-docs",
        modelNames,
        ["users"],
        ["development"],
        true
      );
    
      console.log(
        `Server Listening on  8080, Open http://localhost:8080/api-docs/`
      );
    });
    
    app.use(router);
    
    handleRequests();
    console.log("onyx portfolio api is running");