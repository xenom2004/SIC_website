import { NextResponse } from "next/server";
const Razorpay = require('razorpay');
import shortid from "shortid";
import mongoose from "mongoose";
import connection from "../../../../lib/db"
import Order from "../../../../lib/modal/order"
import instrument from "../../../../lib/modal/instrument"
const gst=parseFloat(process.env.GST);
import { jwtDecode } from "jwt-decode";
const transformedForms = {
  2: { name: "PowderXRD", price: 20 },
  3: { name: "XAFS", price: 20 },
  1: { name: "SingleCrystalXRay", price: 20 },
  25: { name: "BET", price: 20 },

  13: { name: "UVVISNIR", price: 20 },
  12: { name: "UVVis", price: 20 },
  18: { name: "FluorescenceMicroscopy", price: 20 },
  9: { name: "ChemicalData", price: 20 },
  14: { name: "SFM", price: 20 },
  8: { name: "FTIR", price: 20 },
  20: { name: "HPLC", price: 20 },

  15: { name: "PL", price: 20 },
  27: { name: "Elemental_analyser", price: 20 },
};
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
  });

const find_cost=(inst,order_form,type)=>{
  // console.log(order_form,"llllllllllllll");
  let ty="academic_charge";
  if(type=="Commercial"){
    ty="commercial_charge";

  }
  let amt=0;
  for(let i=0;i<inst.length;i++){

    if(order_form[inst[i].id]!=undefined){
    amt=amt+order_form[inst[i].id].quantity*inst[i][ty]*(1+gst);}
  }

  return amt;
  


}
export async function GET(req,{params}) {
    // console.log("niug")
    try{
    const id=params.orderID
    // console.log(id,"opo");
    await mongoose.connect(connection.connection);
    const order_details=await Order.findById(id);
    const inst=await instrument.find(); 

    let decoded=null;
  if(params.token!=null){
      decoded = jwtDecode(params.token);
  }
    // console.log(order_details,"order details");
    
    // console.log(inst,"order inst");

if(decoded && decoded.username===order_details.name){


    const payment_capture = 1;
    const amount = find_cost(inst,order_details.form_details,order_details.loginType) * 100 // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
        amount: (amount).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
        notes: {
            // These notes will be added to your transaction. So you can search it within their dashboard.
            // Also, it's included in webhooks as well. So you can automate it.
            paymentFor: "testingDemo",
            userId: "100",
            productId: 'P100'
        }
    };
    // console.log(options.receipt,"my receipt")
    // console.log("here",process.env.RAZORPAY_API_KEY,process.env.RAZORPAY_APT_SECRET)
    try{
      const order = await instance.orders.create(options);
      // console.log(order,"Orders")
      return NextResponse.json({ msg: "success", order });
    }
    catch(err){
      return NextResponse.json({ msg: "failure",err });
    }}
    else{

      return NextResponse.json({ msg: "failure" });
    }

}
    catch(err){
      return NextResponse.json({ msg: "failure",err });
    }
   

}


export async function POST(req) {
  const body = await req.json();


  return NextResponse.json({ msg: body });
}