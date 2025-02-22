import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connection from "../../lib/db"
import User from "../../lib/modal/user"
import { jwtDecode } from "jwt-decode";
export  async function POST(req, res) {
 
  try{
  const  data  = await req.json();
  
  let decoded=null;

  if(data.accessToken!=null){
      decoded = jwtDecode(data.accessToken);
      // console.log(decoded,"gewuiegf",data)
  }
  if(decoded && decoded.username===data.name){
    // console.log(data,"on server");
    await mongoose.connect(connection.connection);
    const filter = { "name":data.name}; // specify the filter to match the document you want to update
    const update = { $set: { profileName: data.profileName,cover_image: data.cover_image, image: data.image, loginType: data.loginType,gst_number: data.gst_number,
        institute: data.institute,phone: data.phone,supervisorName: data.supervisorName,supervisorEmail: data.supervisorEmail,
    Designation: data.Designation,studentDesignation: data.studentDesignation,email: data.email} }; // specify the update operation
    const options = { new: true }; // optional: returns the modified document instead of the original
    const updatedDocument = await User.findOneAndUpdate(filter, update, options);
    // console.log(updatedDocument,"Updated");

  
  
    return NextResponse.json({result:data})


  }
  else{
    return NextResponse.json({result:"fail"})
  }}
  catch(error){
    // console.log(error,"error")
    return NextResponse.json({result:"fail"})}
    
  }