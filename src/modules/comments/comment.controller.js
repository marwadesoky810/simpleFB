import commentModel from './../../../db/models/comment.model.js';

// &=======================readingComment====================
export const getComment = async(req, res, next) =>{
   const comment = await commentModel.findAll()
   res.status(200).json({msg:"Done" , comment})

}
// & ========================creatingComment=======================
export const addComment= async(req,res,next)=>{
    const {content} = req.body;
    const postId= req.body.postId;
const comment = await commentModel.create({content,postId});
res.status(201).json({msg:"Done" , comment});
}
// &====================updateComment=================================
export const updateComment= async(req,res,next)=>{
    const {content} = req.body;
    const {id} = req.params;
const comment = await commentModel.update({content},
  {  
    where:{
        id
    }
})
if (!comment[0]) {
    return res.status(400).json({msg:"Comment Not Exists"});
}
res.status(201).json({msg:"Done"});
}
// &====================deleteComment=================================
export const deleteComment= async(req,res,next)=>{
    const {id} = req.params;
   const comment = await commentModel.destroy(
  {  
    where:{
        id
    }
})
if (!comment) {
    return res.status(400).json({msg:"Comment not Exists"});
} 
res.status(201).json({msg:"Done"});

}

// &==========================================================================




