import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/test2")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    const todo = new Todo({title:"Hey my first class",desc:"Descriiption of theis todo",
        isDone:false})
        todo.save()

    res.send("hello World")
})

app.listen(port,()=>{
    console.log("Server started...")
});