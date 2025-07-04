import express from "express";
import employee from "../model/idCard.mode.js";
import {createCard, } from "./controller/employee.controller.js";
import { createCard } from "../controller/idCard.controller.js";
const router = express.Router();



router.post("/",createCard);
router.get("/",getAllCardByID);
router.put("/:id",updateById);
router.delete("/:id",deleteById);


export default router;