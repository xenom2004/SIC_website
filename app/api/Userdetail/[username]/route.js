import mongoose from "mongoose";
import connection from "../../../lib/db"
import instrument  from "../../../lib/modal/instrument"
import { NextResponse } from "next/server"
import User from "../../../lib/modal/user"
// import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
let id=0;



export async function GET(req,{params}) {

    const myses= req.headers.get('session');
    const data=params;
    let decoded=null;
    if(myses!=null){
        decoded = jwtDecode(myses);
    }

    if(decoded!=null && decoded.username===data.username ){
        // console.log("hu",decoded)
        await mongoose.connect(connection.connection);
    const user=await User.find({"name":data.username});
    return Response.json({status:"success",details:user[0]});

    }
    else{
        return Response.json({status:"fail"});
    }

}

