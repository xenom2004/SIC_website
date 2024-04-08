import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connection from "../../lib/db"

export async function POST(req){
    const {name,roll}=await req.json();
    const val=await mongoose.connect(connection.connection)
    const data=await usertry.create({name,roll});
    await mongoose.connection.close();
    console.log(data);
    return NextResponse.json({result:data})    
} 