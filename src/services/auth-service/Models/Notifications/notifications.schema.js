const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NotificationSchema = new Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'
    },
    otp:{
        type:String,
        required:true,
    },
    expired:{
        type: Boolean,
        default: false,
    },
    otp_for:{
        required:true,
        type: String,
    }
},{timestamps:true});

const NotificationModel = mongoose.model('Notification',NotificationSchema);
module.exports = NotificationModel;