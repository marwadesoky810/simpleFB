import commentModel from "../../../db/models/comment.model.js";
import postModel from "../../../db/models/post.model.js";
import userModel from "../../../db/models/user.model.js";
import bcrypt from 'bcrypt';

// & ====================getUsers=====================================
// export const getUsers = async (req, res, next) => {
//     const user = await userModel.findAll();
//     res.status(200).json({msg:"Done", user})
// };
// &============================Registration====================================
export const signUp = async (req, res, next) => {
    const saltRounds = 10;
    const {username,email,password} = req.body;

const userExist = await userModel.findOne({where:{email}});
if (userExist) {
    return res.status(400).json({ msg: 'Email already exists' });
}
const hashedPassword = await bcrypt.hash(password, saltRounds);

const user = await userModel.create({username,email,password:hashedPassword})

res.status(201).json({msg:"Done"});
};

// &============================logIn====================================
export const logIn = async (req, res, next) => {
    const {id} = req.params;
    const user= await userModel.findOne({
        attributes:[["username","UrName"],["email","Ur-Email"]],
        where:{
            id
        }
    })
    if (!user) {
        return res.status(401).json({ msg: 'Invalid User' });
    }
    res.status(200).json({msg:"Wellcome To Ur Account", user})

};
// &============================logOut====================================
export const logOut = async (req, res, next) => {
    res.status(200).json({msg: 'Log Out'});
};
// &==========================SpecialEndpoint===================
export const specialEndpoint = async (req, res, next) => {
    const {userId , postId} = req.params;
    const user = await userModel.findOne({
        where:{id: userId},
        include:[{
            model:postModel,
            where:{id:postId},
            include:[{
                model:commentModel,
                include:[{
                    model:userModel,
                    attributes:['username','email']
                }]
            }]
        }]
    });
    if (!user) {
        return res.status(404).json({ msg: 'User or Post not found' });
    }
    res.status(200).json({ user });
}

















