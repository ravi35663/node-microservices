const {POST,GET} = require('../../helpers/methods/index');
const blog_base_url = `${process.env.BLOG_BASE_URL}`;

const createBlogHandle = async (req,res)=>{
    try {
        const response = await POST(`${blog_base_url}/create`,req);
        return res.status(response.status).send(response.data);
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
}

const fetchAllBlogs = async (req,res)=>{
    try {
        const response = await GET(blog_base_url,req);
        return res.status(response.status).send(response.data);
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
}

const fetchBlogsByUser = async (req,res)=>{
    try {
        const response = await GET(`${blog_base_url}/get-by-user`,req); 
        return res.status(response.status).send(response.data);
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
}

module.exports = {fetchBlogsByUser,fetchAllBlogs,createBlogHandle};