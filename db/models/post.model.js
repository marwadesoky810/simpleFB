import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
import userModel from "./user.model.js";
// &==========================================================================

const  postModel = sequelize.define("post",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    auther:{
        type:DataTypes.STRING,
        allowNull:false
    },
})
// &==========================================================================

export default postModel;
// &==========================================================================

postModel.belongsTo(userModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
userModel.hasMany(postModel)
