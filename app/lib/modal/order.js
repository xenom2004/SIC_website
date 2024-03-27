const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
    name: String,
    loginType:String,
    form_details:String,
    status:String,
    price:mongoose.Types.Decimal128,
  
});

// Create product model


// Export the Product model
const User=mongoose.models.user || mongoose.model('user', productSchema);
export default User;