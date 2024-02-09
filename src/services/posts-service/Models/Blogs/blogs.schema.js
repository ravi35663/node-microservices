const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        required:true,
    },
    title:{
        type:String,
        min:4,
        required:true,
    },
    description:{
        type: String,
        optional:true,
    },
    is_deleted:{
        type:Boolean,
        default:false,
    },

},{timestamps:true});

const BlogModel = mongoose.model('Blog',BlogSchema);
module.exports = BlogModel;