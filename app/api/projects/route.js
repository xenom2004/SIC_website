import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connection from "../../lib/db"
import usertry  from "../../lib/modal/usertry"
import {Prod} from "../../lib/modal/prod"
// const { MongoClient } = require('mongodb');
// export async function GET(){
//     // {console.log("goooooooooooo",connection.connection)}
//     // const val=await mongoose.connect(connection.connection)
//     // console.log(process.env.MONGODB_connection)
//     const client = new MongoClient(process.env.MONGODB_connection);
    
//     // await client.connect();
//     const database = client.db('sic_base');
//  const collection = database.collection('usertry');

//   const r = await collection.findOne({"name":"abhi"});
//   const data=r;

   
//     // const data=await Product.find();
//     // await mongoose.connection.close();
//     console.log(data);
//     // return NextResponse.json({result:data})}
    
//     return NextResponse.json({result:data})

    
// } 



export async function GET(){
    // {console.log("goooooooooooo",connection.connection)}
    const val=await mongoose.connect(connection.connection)
    // console.log(process.env.MONGODB_connection)
    // console.log("product",Product);
    

   
    const data=await usertry.find();
    await mongoose.connection.close();
    console.log(data);
    // return NextResponse.json({result:data})}
    
    return NextResponse.json({result:data})

    
} 