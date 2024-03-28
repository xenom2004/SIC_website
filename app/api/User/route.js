import mongoose from "mongoose";
import connection from "../../lib/db"
import instrument  from "../../lib/modal/instrument"
import { NextResponse } from "next/server"
import User from "../../lib/modal/user"
import Order from "../../lib/modal/order"




export async function POST(req,res){
    // console.log("hi11")
    const data  =await req.json()
    
    // console.log(data);
    const forms=JSON.parse(data.formData);
    // const new_data={id:id,forms:JSON.parse(data.formData)};
    const new_order={"name":data.usersession.name ,
        loginType:"Academic",
        form_details: forms,
        status:"Pending",
        price:200,
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
    console.log("jjjjjjj")
    await mongoose.connect(connection.connection)
    const user=await User.find({"name":"Joee"});
    await mongoose.connection.close();
    console.log(user,"kkk");

    return Response.json(user);
}