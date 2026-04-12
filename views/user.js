import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    username:String,
    userpassword:String
});
export default mongoose.model("User",userschema);