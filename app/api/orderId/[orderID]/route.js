import mongoose from "mongoose";
import connection from "../../../lib/db"
import Order  from "../../../lib/modal/order"
import { NextResponse } from "next/server"
import User from "../../../lib/modal/user";

const order = [
  {
    "name":"siddhesh",
    "formDetails":"hi",
    "status":"active"
  },

  
];

export async function GET(req,{params}) {

  // console.log(params)
  // const data=params;
  // console.log(data);
  await mongoose.connect(connection.connection)
  const ordergot=await Order.findById(params.orderID);
  const userdetail=await User.find({"name":ordergot.name});

  // const o=await Order.find({"name":"ab"});
  console.log(ordergot);
  // await mongoose.connection.close();


  return Response.json({order:ordergot,profiledata:userdetail});
}

export async function POST(req,{params}) {

  
  const data=await req.json();
  // console.log(data);
  await mongoose.connect(connection.connection)
  const filter = { "_id":params.orderID}; // specify the filter to match the document you want to update
  const update = { $set: {status:data.status,comment:data.comment}}; // specify the update operation
  const options = { new: true }; // optional: returns the modified document instead of the original
  const updatedDocument = await Order.findOneAndUpdate(filter, update, options);
  // console.log(updatedDocument,"Updated");


  return Response.json({status:"success"});
}




  
  // export async function GET() {
  //     return Response.json(order);
  // }