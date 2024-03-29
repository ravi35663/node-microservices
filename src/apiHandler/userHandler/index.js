const axios  = require('axios');
const {POST,GET} = require('../../helpers/methods/index');
const auth_base_url = `${process.env.AUTH_BASE_URL}`;
const loginHandle = async (req,res)=>{
    try {
        const response = await POST(`${auth_base_url}/login`,req);
        return res.status(response.status).send(response.data);
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
}

const signupHandler = async (req,res)=>{
    try {
        const response = await POST(`${auth_base_url}/signup`,req);
        return res.status(response.status).send(response.data);
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
}

const profileHandler = async (req,res)=>{
    try {
        const response = await GET(`${auth_base_url}/profile`,req); 
        return res.status(response.status).send(response.data);
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
}

module.exports = {loginHandle,signupHandler,profileHandler};