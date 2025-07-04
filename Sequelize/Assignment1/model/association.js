import db from "../db/dbConfig.js";
import Employee from "./employee.model.js";
import IdCard from "./idCard.mode.js";


Employee.hasOne(IdCard,{foreignKey:"employeeId",onDelete:"CASCADE"});
IdCard.belongsTo(Employee,{foreignKey:"employeeId"});

