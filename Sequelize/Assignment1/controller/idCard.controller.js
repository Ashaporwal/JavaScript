import express, { response } from "express";

import jwt from "jsonwebtoken";
import db from "../db/dbConfig.js";
import IdCard from "../model/idCard.mode.js";


export const createCard = async(request,response,next)=>{
    try{
        let {id} = request.params;
        if(!id){
            return response.status(500).json({error:"Not a "})
        }
        let result = await IdCard.findByPk(id);
        if(!result){
     return response.status(201).json({messsage:"user id not found"});
        }
        const {cardNumber,issueDate,expiryadate} = request.body;

        const card = await IdCard.create(cardNumber,issueDate,expiryadate);
        return response.status(201).json({messsage:"cared craeted successfully..."});
   
    }catch(err){
        console.log(err);
        return response.status(500).json({messsage:"Internal Server error"});
    }
}


export const getAllCardByID = async(request,response,next)=>{
    try{
        let result = request.body;
        if(!result) {
            return response.status(401).json({messsage:"card not found"});
        }
        return response.status(200).json({messsage:"user found successfully"});
        
    }catch(err){
        console.log(err);
        return response.status(500).json({messsage:"Internal Server error"});
    }
}

export const updateById = async(request,response,next)=>{
    try{
        const {id} = request.params;
        if(!id){
               return response.status(401).json({messsage:"card not found"});
        }
        const {cardNumber,issueDate,expiryDate}=request.body;
        const result = await IdCard.update({cardNumber,issueDate,expiryDate},{where:{id}});
        return response.status(200).json({messsage:"user update successfully"});
    }catch(err){
        console.log(err);
        return response.status(500).json({messsage:"Internal Server error"});
    }
}


export const deleteById = async(request,response,next)=>{
    try{
        const {id} = request.params;
        if(!id){
               return response.status(401).json({messsage:"cardId not found"});
        }
         const result = await IdCard.destroy({where:{id}});
         if(result===0){
           return response.status(400).json({messsage:"id not not found"});  
         }
        return response.status(200).json({messsage:"user delete successfully"});
    }catch(err){
        console.log(err);
        return response.status(500).json({messsage:"Internal Server error"});
    }
}
