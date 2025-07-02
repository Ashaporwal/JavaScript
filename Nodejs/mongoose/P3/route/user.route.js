import express from "express";

import { createUser,updateUser,deleted } from "../controller/user.controller.js";


const router = express.Router();

router.post('/',createUser);
router.put('/',updateUser);
router.delete('/:id',deleted);

export default router;