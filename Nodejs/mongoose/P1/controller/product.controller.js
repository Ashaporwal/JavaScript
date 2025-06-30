import db from "../db/db.Config.js";

export const save = async(request,response,next)=>{
    try{
        db.collection("products").insertOne(request.body)
        .then(result=>{
            return response.status(201).json({message:"Product saved"});
        }).catch(err=>{
            return response.status(500).json({error:"Internal Server Error"});
        })
    }catch(err){
   console.log("something error...");
    }
}

export const list = (request,response,next)=>{
    db.collection("products").aggregate().toArray()
    .then(result=>{
        return response.status(200).json({products:result});
    }).catch(err=>{
        return response.status(500).json({error:"Internal SErver Error"});
    })
}