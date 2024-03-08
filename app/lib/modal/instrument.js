import mongoose from "mongoose";
// create user collection here.
const productModel=new mongoose.Schema({
    
    name:String,
    description:String,
    image:String,
    status:String
});
const instrument=mongoose.models.instrument || mongoose.model("instrument",productModel)
export default instrument