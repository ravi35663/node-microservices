const { verifyToken } = require("../Helpers/jwt");
const { errorResponse } = require("../Helpers/response");

const isValidUser = (req,res,next)=>{
    try {
        const {authorization} = req.headers;
        if(!authorization){
            return res.status(401).send(errorResponse('Unauthorized user',401,{}));
        }
        const user = verifyToken(authorization);
        if(!user){
            return res.status(401).send(errorResponse('Unauthorized user',401,{}));
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).send(errorResponse(error.message,500,{}));
    }
}

module.exports = {isValidUser};