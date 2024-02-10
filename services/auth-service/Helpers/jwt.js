const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const JWT_EXPIRED_IN = process.env.JWT_EXPIRED_IN

const verifyToken = (token)=>{
    return jwt.verify(token,JWT_SECRET_KEY);
}

const generateJWT = (payload)=>{
    return jwt.sign(payload,JWT_SECRET_KEY,{expiresIn:JWT_EXPIRED_IN});
}

module.exports = {verifyToken,generateJWT};