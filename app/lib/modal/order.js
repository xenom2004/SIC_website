const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
    name: String,
    loginType:String,
    form_details: {},
    status:String,
    price:mongoose.Types.Decimal128,
    Date:Date,
    comment:String,
  
});

// Create product model


const Order=mongoose.models.order || mongoose.model('order', productSchema);
export default Order;
