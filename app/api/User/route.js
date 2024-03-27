import mongoose from "mongoose";
import connection from "../../lib/db"
import instrument  from "../../lib/modal/instrument"
import { NextResponse } from "next/server"
import User from "../../lib/modal/user"
let id=0;



export async function POST(req,res){
    console.log("hi11")
    const data  =await req.json()
    console.log(data);
    const new_data={id:id,forms:JSON.parse(data.formData)};
    console.log(new_data);
    let updatedDocument=null;
    try{
    const val=await mongoose.connect(connection.connection)
    // const resdata=await User.find({"name":"Joee"});
    const filter = { "name":data.usersession.name}; // specify the filter to match the document you want to update
    const update = { $push: { order: new_data } }; // specify the update operation
    const options = { new: true }; // optional: returns the modified document instead of the original
    updatedDocument = await User.findOneAndUpdate(filter, update, options);
    // console.log(updatedDocument,"Updated");
    await mongoose.connection.close();}
    catch(err){
        console.log(err,"ERERERRE")
    }

    id+=1;

    

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