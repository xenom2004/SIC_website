import mongoose from "mongoose";
import connection from "../../lib/db"
import instrument  from "../../lib/modal/instrument"
import { NextResponse } from "next/server"
import User from "../../lib/modal/user"
import Order from "../../lib/modal/order"
const gst=parseFloat(process.env.GST);
const find_cost=(inst,order_form,type)=>{
    // console.log(order_form,"llllllllllllll");
    let ty="academic_charge";
    if(type=="Commercial"){
      ty="commercial_charge";
  
    }
    let amt=0;
    for(let i=0;i<inst.length;i++){
  
      if(order_form[inst[i].id]!=undefined){
      amt=amt+order_form[inst[i].id].quantity*inst[i][ty]*(1+gst);}
    }
  
    return amt;
    
  
  
  }

  const areRequiredFieldsFilled = (profileData) => {
    // List of required fields
    const requiredFields = ["profileName", "phone", "institute", "email", "gst_number","loginType","cover_image"];
    if(profileData.loginType==="Academic"){
      requiredFields.push("supervisorName", "supervisorEmail", "studentDesignation");}
    else{
      requiredFields.push("Designation");
    }  
  
    // Check if all required fields are filled
    return requiredFields.every(field => profileData[field]);
  };

export async function POST(req,res){
    // console.log("hi11")
    const data  =await req.json()
    
    // console.log(data);
    const forms=JSON.parse(data.formData);
    await mongoose.connect(connection.connection);
    const Userdetails=await User.find({"name":data.usersession.name});

    console.log(Userdetails,"user");
    if(!areRequiredFieldsFilled(Userdetails[0])){
      // console.log("opop")

      return NextResponse.json({status:"fail"})


    }









    const inst=await instrument.find(); 
    // const new_data={id:id,forms:JSON.parse(data.formData)};
    const new_order={"name":data.usersession.name ,
        loginType:Userdetails[0].loginType,
        form_details: forms,
        status:"Pending",
        price:find_cost(inst,forms,Userdetails[0].loginType),
        Date:new Date(),
    }
    // console.log(new_order);
    const val=await mongoose.connect(connection.connection);
    const create=await Order.create(new_order);
    // console.log(create._id,"op")
    const getcreate=await Order.find(create._id);
    // console.log(getcreate)
    
    const newID=getcreate[0]._id;
    





    

    
    let updatedDocument=null;
    try{
    
   
    // const resdata=await User.find({"name":"Joee"});
    const filter = { "name":data.usersession.name}; // specify the filter to match the document you want to update
    const update = { $push: { order: newID} }; // specify the update operation
    const options = { new: true }; // optional: returns the modified document instead of the original
    updatedDocument = await User.findOneAndUpdate(filter, update, options);
    // console.log(updatedDocument,"Updated");
    }
    catch(err){
        console.log(err,"ERERERRE")
    }


    

    return NextResponse.json({"status":"success"})
}

export async function GET() {
    // console.log("jjjjjjj")
    await mongoose.connect(connection.connection)
    const user=await User.find({"name":"Joee"});
    await mongoose.connection.close();
    // console.log(user,"kkk");

    return Response.json(user);
}