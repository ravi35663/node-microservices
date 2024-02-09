const { errorResponse } = require("../Helpers/response");

const isValidUser = (req,res,next)=>{
    try {
        const user_id = req.user.id
        if(!user_id){
            return res.status(401).send(errorResponse("Unauthorized user",401,{}));
        }
        next();
    } catch (error) {
        res.status(500).send(errorResponse(error.message,500,{}));
    }
}

module.exports = {isValidUser};