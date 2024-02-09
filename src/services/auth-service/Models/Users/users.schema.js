const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        min:8
    },
    password:{
        type: String,
        required:true,
        min:8
    },
    full_name:{
        type: String,
        required:true,
        min:2,
        trim:true
    },
    is_verified:{
        type:Boolean,
        default:false
    },
    is_deleted:{
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        enum:['user','admin'],
        default: 'user'
    }

},{timestamps:true});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;