import express from "express";
import employee from "../model/employee.model.js";
import { createUser,getAllUser,getUserById,deleteById } from "./controller/employee.controller.js";
const router = express.Router();



router.post("/",createUser);
router.get("/",getAllUser);
router.get("/:id",getUserById);
router.delete("/:id",deleteById);


export default router;