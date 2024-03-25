import mongoose from "mongoose";
import connection from "../../lib/db"
import instrument  from "../../lib/modal/instrument"
import { NextResponse } from "next/server"

const user={
    'name':"Joe",
    'password':"1234",
     'order':[
        [

        ],
        [

        ]
     ]
}


export async function POST(req,res){
    const data  =await req.json()
    console.log(data)
    // if(!data.name || !data.description){
        
    //     return NextResponse.json({"status":"error"})
    // }

    // const val=await mongoose.connect(connection.connection)
    // // console.log(process.env.MONGODB_connection)
    // // console.log("product",usertry);
    

   
    // const resdata=await instrument.create({"name":data.name,"description":data.description,"image":data.image,"status":data.status});
    // await mongoose.connection.close();
    // console.log(resdata);

    user.order[0].push(data);
    console.log(user.order[0],"hiii");

    

    return NextResponse.json({"status":"success"})
}

export async function GET() {
    return Response.json(user);
}