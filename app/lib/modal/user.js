const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
    name: String,
    password: String,
    email:String,
    order: [{}]
});

// Create product model


// Export the Product model
const User=mongoose.models.user || mongoose.model('user', productSchema);
export default User;