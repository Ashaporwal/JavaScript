import { Sequelize } from "sequelize";


let sequelize = new Sequelize ("sdb","root","",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate()
.then(result=>{
    console.log("db connected..");
}).catch(err=>{
console.log(err);
});

export default sequelize;