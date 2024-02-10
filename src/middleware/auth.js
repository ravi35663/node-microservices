const {GET} = require('../helpers/methods/index');
const auth_base_url = `${process.env.AUTH_BASE_URL}/profile`;

const isValidUser = async (req,res,next)=>{
    try {
        const response = await GET(auth_base_url,req);
        if(response && response.data){
            req.user = response.data.data;
        }
        next();
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
}

module.exports = {isValidUser}