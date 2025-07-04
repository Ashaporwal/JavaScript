import express, { response } from "express";

import jwt from "jsonwebtoken";
import db from "../db/dbConfig.js";
import Employee from "../model/employee.model.js";





export const createUser = async(request,response,next)=>{
    try{
        let{name,email,designation,joiningdate} = request.body;
        const result= await Employee.create(name,email,designation,joiningdate);
        return response.status(201).json({message:"user created successfully..."});

    }catch(err){
        console.log(err);
        return response.status(500).json({err:"Internal server rerror"});
    }
}


export const getAllUser = async(request,response,next)=>{
    try{
        // let {}
        const result = await Employee.findAll();
        if(!result){
            return response.status(401).json({message:"No user found"});
        }
        return response.status(200).json({message:"All Empolyee found successfully.."});
    }catch(err){
        console.log(err);
        return response.status(500).json({err:"Internal server error"});
    }
}



export const getUserById = async(request,response,next)=>{
    try{
let {id} = request.params;
if(!id){
    return response.status(401).json({message:"User id is not valid"});
}
let result = await Employee.findOne(id);
return response.status(200).json({message:"User found successfully"});
    }catch(err){
        console.log(err);
        return response.status(500).json({err:"Internal server error"});
    }
}

export const updated = async(request,response,next)=>{
    try{
// let {id} = request.params;
let {name,email,designation,joiningdate} = request.body;
if(!id){
    return response.status(401).json({message:"User id is not valid"});
}
let result = await Employee.update({name,email,designation,joiningdate},{where:id.request.params});
return response.status(200).json({message:"User updated successfully"});
    }catch(err){
        console.log(err);
        return response.status(500).json({err:"Internal server error"});
    }
}

export const deleteById = async(request,response,next)=>{
    try{
let {id} = request.params;
if(!id){
    return response.status(401).json({message:"User id is not valid"});
}
let result = await Employee.destroy({where:{id}});
return response.status(200).json({message:"User deleted successfully"});
    }catch(err){
        console.log(err);
        return response.status(500).json({err:"Internal server error"});
    }
}


