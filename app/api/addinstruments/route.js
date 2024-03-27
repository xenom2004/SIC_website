import mongoose from "mongoose";
import connection from "../../lib/db";
import Instrument from "../../lib/modal/instrument";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        // Access the JSON data directly from req.body
        const data= await req.json() 
       
        // Check if the required fields are present
        // if (!data.name || !data.info || !data.image || !data.status) {
        //     return NextResponse.json({ status: "error", message: "Missing required fields" }, { status: 400 });
        // }
        console.log(data)
      
        // Connect to MongoDB
        await mongoose.connect(connection.connection);

        // Create a new instrument document
        const newInstrument = new Instrument({
            name: data.name,
            info: data.info,
            image: data.image,
            status: data.status,
            charge: data.charge || 0,
            commercial_charge: data.commercial_charge || 0,
            academic_charge: data.academic_charge || 0,
            application: data.application || []
        });

        // Save the instrument to the database
        await newInstrument.save();

        // Close the MongoDB connection
        await mongoose.connection.close();

        // Return success response
        return NextResponse.json({ status: "success", message: "Instrument added successfully" });
    } catch (error) {
        console.error("Error adding instrument:", error);
        // Return error response
        return NextResponse.json({ status: "error", message: "Failed to add instrument" }, { status: 500 });
    }
}
