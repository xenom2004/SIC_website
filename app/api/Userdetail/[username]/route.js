import mongoose from "mongoose";
import connection from "../../../lib/db"
import instrument  from "../../../lib/modal/instrument"
import { NextResponse } from "next/server"
import User from "../../../lib/modal/user"
let id=0;



export async function GET(req,{params}) {

    // console.log(req.headers,"header")
    const data=params;
    // console.log(data.username);
    await mongoose.connect(connection.connection)
    const user=await User.find({"name":data.username});
    // console.log(user)
    // await mongoose.connection.close();
  

    return Response.json({status:"success",details:user[0]});
}

