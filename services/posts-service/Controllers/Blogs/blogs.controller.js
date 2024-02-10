const { errorResponse, successResponse } = require('../../Helpers/response');
const BlogModel = require('../../Models/Blogs/blogs.schema');

const create = async (req,res)=>{
    try{
        const user_id = req.user.id;
        const {title,description} = req.body;
        const blog = await BlogModel.create({title,description,user_id});
        return res.status(200).send(successResponse('Success',200,blog));
    }catch(err){
        return res.status(500).send(errorResponse(err.message,500,{}));
    }
}

const fetchBlogsByUser = async (req,res)=>{
    try{
        const user_id = req.user.id;
        const blogs = await BlogModel.find({user_id});
        return res.status(200).send(successResponse('Success',200,blogs));
    }catch(err){
        return res.status(500).send(errorResponse(err.message,500,{}));
    }
}


const fetchAllBlogs = async (req,res)=>{
    try {
        const blogs = await BlogModel.find({is_deleted:false}).select({user_id:0});
        return res.status(200).send(successResponse('Success',200,blogs)); 
    } catch (error) {
        return res.status(500).send(errorResponse(error.message,500,{}));
    }
}

module.exports = {create,fetchBlogsByUser,fetchAllBlogs};
