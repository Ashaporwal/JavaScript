import { DataTypes, Sequelize } from "sequelize";
import db from "../db/dbConfig.js"
import sequelize from "../db/dbConfig.js";
const Employee = sequelize.define("Employee",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
     type:DataTypes.STRING,
     allowNull:false
    },
    email:{
     type:DataTypes.STRING,
     allowNull:false,
     unique:true
    },
    designation:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        isAlpha:true
    },
    },
    joiningdate:{
       type:DataTypes.DATE,
       allowNull:false,
       
    }
});

export default Employee;