const { verifyPassword, generateHash } = require('../../Helpers/bcrypt');
const { generateJWT } = require('../../Helpers/jwt');
const { errorResponse, successResponse } = require('../../Helpers/response');
const { transformUser } = require('../../Helpers/transformer');
const UserModel = require('../../Models/Users/users.schema');
const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(401).send(errorResponse("Invalid credentials",401,{}));
        }
        if(!verifyPassword(user.password,password)){
            return res.status(401).send(errorResponse("Invalid credentials",401,{}));
        }
        const token = generateJWT({id:user._id,full_name:user.full_name,email:user.email}); 
        let trans_user = transformUser(user);
        delete trans_user.password;
        return res.status(200).send(successResponse('Success',200,{user:trans_user,token}));
    }catch(err){
        return res.status(500).send(errorResponse(err.message,500,{}));
    }
}

const signup = async (req,res)=>{
    try {
        let {full_name,email,password,confirm_password} = req.body;
        if(!full_name || !email || !password){
            return res.status(422).send(errorResponse('full_name, email and password cannot be empty',422,{}));
        }
        let user = await UserModel.findOne({email});
        if(user){
           return res.status(422).send(errorResponse('User already exists with this email id',422,{})); 
        }
        if(confirm_password!=password){
            return res.status(422).send(errorResponse("Password and confirm password does not match",422,{}));
        }
        const hashedPassword = generateHash(password);
        const payload = {email,password:hashedPassword,full_name};
        const token = generateJWT(payload);
        user = await UserModel.create(payload);
        user = transformUser(user);
        delete user.password;
        return res.status(201).send(successResponse("User created successfully!!!",201,user));
    } catch (error) {
        console.log("Error is ",error);
        return res.status(500).send(errorResponse(error.message,500,{}));
    }
}

const userProfile = async (req,res)=>{
    try {
        const _id = req.user.id;
        let user = await UserModel.findById(_id);
        if(!user){
            return res.status(401).send(errorResponse("User does not exists",401,{}));
        }
        user = transformUser(user);
        delete user.password;
        return res.status(200).send(successResponse('Success',200,user));
    } catch (error) {
        return res.status(500).send(errorResponse(error.message,500,{}));
    }
}

module.exports = {login,signup,userProfile};
