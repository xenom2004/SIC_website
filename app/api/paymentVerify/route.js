import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import shortid from "shortid";
import crypto from "crypto";
import Payment from "../../lib/modal/Payment"
import connection from "../../lib/db";
// import Razorpay from "razorpay";


export async function POST(req,res) {
  await mongoose.connect(connection.connection);
  //  connection.log(req.json, "jdhdsfjkghsdjfghsdjghs");
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  await req.json();
  //  const body = razorpay_order_id + "|" + razorpay_payment_id;

// console.log("sjdkfhsdjkfhsdjkfhskdf", body)
   console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature)

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_APT_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex'); 



const isAuthentic = expectedSignature === razorpay_signature;

console.log("payment verification is here",isAuthentic)
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

}




return NextResponse.json({
    message: "success"
  }, {
    status: 200,
  })

}