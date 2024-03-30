import mongoose from "mongoose";
// create user collection here.
const productModel=new mongoose.Schema({
    
    name:String,
    roll:String
});
const usertry=mongoose.models.userry || mongoose.model("userry",productModel)
export default usertry