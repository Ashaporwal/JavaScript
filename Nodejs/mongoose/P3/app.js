import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./route/user.route.js"

dotenv.config();
const app = express();

app.use(express.json());
 mongoose.connect(process.env.DB_URL)
.then(result=>{
    app.use("/user",UserRouter);

    app.listen(process.env.PORT||3000,()=>{
         console.log("SErver Started...");
    });
}).catch(err=>{
   console.log(err);
   console.log("Database connection failed");
});
