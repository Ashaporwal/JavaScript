import express, { response } from "express";


import {User} from "../model/user.model.js";

export const createUser = async(request,response,next)=>{
    try{
      let {name,email,password} = request.body;
      let result = await User.create({name,email,password});
      
      return response.status(201).json({message:"User created",user:result});
    }catch(err){
        console.log(err);
        return response.status(500).json({message:"Internal server error"});
    }
}

export const updateUser = async(request,response,next)=>{
    try{
        let {id} = request.params;
        let {name,email} = request.body;
        let result = await User.updateOne({_id:id},{$set:{name,email}});
        
        return response.status(200).json({message:"User updated SUccessfully.."});

    }catch(err){
         console.log(err);
         return response.status(500).json({message:"Internal server error"});
    }
}

export const deleted = async(request,response,next)=>{
    try{
        let {id} = request.params;
        let result = await User.deleteOne({_id:id});

        return response.status(200).json({message:"successfullly deleted.."});
    }catch(err){
        console.log(err);
        return response.status(500).json({message:"Internal server error"});
    }
}