import mongoose from "mongoose";
import connection from "../../../lib/db"
import Order  from "../../../lib/modal/order"
import { NextResponse } from "next/server"

const order = [
  {
    "name":"siddhesh",
    "formDetails":"hi",
    "status":"active"
  },

  
];

export async function GET(req,{params}) {

  console.log(params)
  // const data=params;
  // console.log(data);
  await mongoose.connect(connection.connection)
  const ordergot=await Order.findById('6604606f2e666f73eab8c6bb');
  // const o=await Order.find({"name":"ab"});
  console.log(ordergot);
  // await mongoose.connection.close();


  return Response.json(ordergot);
}


  
  // export async function GET() {
  //     return Response.json(order);
  // }