import mongoose from "mongoose";
import connection from "../../../lib/db"
import Order  from "../../../lib/modal/order"
import { NextResponse } from "next/server"


export async function POST(req) {

  
  const data=await req.json();
  console.log(data,"l");
  await mongoose.connect(connection.connection)
  const filter = { "_id":data.id}; // specify the filter to match the document you want to update
  const update = { $set: {status:"Payment Complete"}}; // specify the update operation
  const options = { new: true }; // optional: returns the modified document instead of the original
  const updatedDocument = await Order.findOneAndUpdate(filter, update, options);



  return Response.json({status:"success"});
}

// export async function POST(req,{params}) {

  
//   const data=await req.json();
//   // console.log(data);
//   await mongoose.connect(connection.connection)
//   const filter = { "_id":params.orderID}; // specify the filter to match the document you want to update
//   const update = { $set: {status:data.status,comment:data.comment}}; // specify the update operation
//   const options = { new: true }; // optional: returns the modified document instead of the original
//   const updatedDocument = await Order.findOneAndUpdate(filter, update, options);
//   // console.log(updatedDocument,"Updated");


//   return Response.json({status:"success"});
// }




  
  // export async function GET() {
  //     return Response.json(order);
  // }