import mongoose from "mongoose";
import connection from "../../lib/db"
import instrument  from "../../lib/modal/instrument"
import { NextResponse } from "next/server"
export async function POST(req,res){
    const data  =await req.json()
    console.log(data)
    if(!data.name || !data.description){
        
        return NextResponse.json({"status":"error"})
    }

    const val=await mongoose.connect(connection.connection)
    // console.log(process.env.MONGODB_connection)
    // console.log("product",usertry);
    

   
    const resdata=await instrument.create({"name":data.name,"description":data.description,"image":data.image,"status":data.status});
    await mongoose.connection.close();
    console.log(resdata);



    

    return NextResponse.json({"status":"success"})
}