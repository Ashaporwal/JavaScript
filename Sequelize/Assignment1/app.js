import sequelize from "./db/dbConfig.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
// import {EmployeeRouter} from "./route/employee.route.js";
// import {IdCard} from "./route/idCard.route.js";
import { IdCardRouter } from "./controller/idCard.controller.js";
import {EmployeeRouter} from "./controller/employee.controller.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/employee",EmployeeRouter);
app.use("/idCard",IdCard);



app.listen(3000,()=>{
    console.log("server Started...");
});