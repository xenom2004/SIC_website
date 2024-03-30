import mongoose from "mongoose";
import connection from "../../../lib/db"
import instrument  from "../../../lib/modal/instrument"
import { NextResponse } from "next/server"
import User from "../../../lib/modal/user"
import Order from "../../../lib/modal/order"


export async function GET(req,{params}) {
    // console.log("jjjjjjj",params.username)
    await mongoose.connect(connection.connection)
    const order_details=await Order.find({"name":params.username});

    // console.log(order_details,"kkk");

    return Response.json({"status":"success","details":order_details});
}