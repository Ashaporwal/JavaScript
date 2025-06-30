// let express = require("express")
//bodydata,query=>,params=>dynmaic (dynamic value ) data hoga
//query parameter searching me jaayda kam aata hh
//param :- when you want to use 
import express from 'express';


let app = express()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send({status:1,msg:'HomePage Api'})
})

app.get('/news',(req,res)=>{
    res.send(
      {
        status:1,
        msg:"news Api"})
})

app.get('/products',(req,res)=>{
  res.send({status:1,msg:"product Api"})
})

app.get("/news/:id",(req,res)=>{
  let currentId = req.params.id
  res.send("News details Api "+currentId)
})


app.post("/login",(req,res)=>{
      // console.log(req.body) //data comes in object form
        console.log(req.body)
        req.status(200).json({
        status:1,
        msg:"Login Api",
        bodyData:req.body,
        queryData:req.query
    
    }    )
    
      // res.send(
      //   {
      //     status:1,
      //     msg:"Login Api",
      //    bodyData:req.body,
      //    queryData:req.query
      //   })
})
app.listen ("8000")