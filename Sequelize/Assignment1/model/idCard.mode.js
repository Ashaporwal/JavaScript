import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const IdCard = sequelize.define("idCard", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cardnumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    issueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expiryDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    employeeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"user",
            key:"id",
        },
        onDelete:"CASCADE"
    }
});

export default IdCard;