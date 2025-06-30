import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Practice")
.then(result=>{
    console.log("Database is connected...");
}).catch(err=>{
    console.log(err);
});

const db = mongoose.connection;

export default db;