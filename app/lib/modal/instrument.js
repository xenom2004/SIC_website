import mongoose from "mongoose";
// create user collection here.
const productModel=new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    info: String,
    status: String,
    charge: Number,
    commercial_charge: Number,
    academic_charge: Number,
    application: [String]
});
const instrument=mongoose.models.instrument || mongoose.model("instrument",productModel)
export default instrument