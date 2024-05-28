import userModel from '../../../db/models/user.model.js';
import postModel from './../../../db/models/post.model.js';

// &=======================readingPosts====================
export const getPosts = async(req, res, next) =>{
   const posts = await postModel.findAll()
   res.status(200).json({msg:"Done" , posts})

}
// & ========================creatingPost=======================
export const addPosts= async(req,res,next)=>{
    const {title,content,auther} = req.body;
    const userId= req.body.userId;
const posts = await postModel.create({title,content,auther,userId});
res.status(201).json({msg:"Done" , posts});
}
// &====================updatePost=================================
export const updatePost= async(req,res,next)=>{
    const {title,content} = req.body;
    const {id} = req.params;
    const post = await postModel.update({title,content},
  {  
    where:{
        id
    }
})
if (!post[0]) {
    return res.status(400).json({msg:"Post Not Exists"});
}
res.status(201).json({msg:"Done"});
}
// &====================deletePost=================================
export const deletePost= async(req,res,next)=>{
    const {id} = req.params;
    
   const post = await postModel.destroy(
  {  
    where:{
        id
    }
})
if (!post) {
    return res.status(400).json({msg:"Post not Exists"});
} 
res.status(201).json({msg:"Done"});
}
// &==========================================================================
export const getPostWithAuther= async(req, res, next)=>{
    const {postId} = req.params;
    const post = await postModel.findOne({
        where:{id:postId },
        include:[{
            model:userModel,
            attributes:["id","email"]
        }]
    });
    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }

    res.status(200).json({ post });

};




