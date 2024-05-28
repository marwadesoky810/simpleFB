import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
import postModel from "./post.model.js";
import userModel from "./user.model.js";
// &==========================================================================

const  commentModel = sequelize.define("comment",{
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
})
// &==========================================================================

export default commentModel;
// &==========================================================================

commentModel.belongsTo(postModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
postModel.hasMany(commentModel)
// &==========================================================================

userModel.hasMany(commentModel)
commentModel.belongsTo(userModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
