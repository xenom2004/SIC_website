import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import shortid from "shortid";
import crypto from "crypto";
import Payment from "../../lib/modal/Payment"
import connection from "../../lib/db";
import { jwtDecode } from "jwt-decode";
// import Razorpay from "razorpay";


export async function POST(req,res) {
  // console.log("popo")
  await mongoose.connect(connection.connection);
 
  //  connection.log(req.json, "jdhdsfjkghsdjfghsdjghs");
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature ,sessionname,token} =
  await req.json();
  let decoded=null;
  if(token!=null){
    // console.log("1")
      decoded = jwtDecode(token);
  }

  if(decoded && decoded.username===sessionname){
    
  
  //  const body = razorpay_order_id + "|" + razorpay_payment_id;

// console.log("sjdkfhsdjkfhsdjkfhskdf", body)
  //  console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature,"UIEGIUEGFYUI")

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_APT_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex'); 



const isAuthentic = expectedSignature === razorpay_signature;

// console.log("payment verification is here",isAuthentic)
 if (isAuthentic) {
  try{
      // console.log(Payment)


  // console.log(val,"connecttodb");

   await Payment.create({
     razorpay_order_id,
     razorpay_payment_id,
     razorpay_signature,
   });
  }
  catch(e){
    console.log(e,"error mes");
    return NextResponse.json({messaeg:"fail"},{status:500});
  }

  //  return NextResponse.redirect(new URL('/paymentsuccess', req.url));

} else {
    return NextResponse.json({
        message: "fail"
      }, {
        status: 400,
      })

}}
else{
  return NextResponse.json({
    message: "fail"
  })
}




return NextResponse.json({
    message: "success"
  }, {
    status: 200,
  })

}