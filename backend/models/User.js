import mongoose from "mongoose";    

const userSchema=new mongoose.Schema({
    firstname:{
        type:String 
    },
    lastname:{
        type:String 
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
},{timestamps:true});

const UserModels=mongoose.model('user',userSchema);
export default UserModels;