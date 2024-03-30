import mongoose from "mongoose";
const productModel2=new mongoose.Schema({
    name:String
    
});
export const Prod=mongoose.models.prod || mongoose.model("prod",productModel2)