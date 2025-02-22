import mongoose from "mongoose";
import connection from "../../lib/db";
import Instrument from "../../lib/modal/instrument";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    // Access the JSON data directly from req.body
    const data = await req.json();

    // Check if the required fields are present
    // if (!data.name || !data.info || !data.image || !data.status) {
    //     return NextResponse.json({ status: "error", message: "Missing required fields" }, { status: 400 });
    // }
    console.log(data);

    // Connect to MongoDB
    await mongoose.connect(connection.connection);

    // Create a new instrument document
    // Create a new instrument document
    // Here, we're creating a new Instrument object using the Instrument model (defined in app/lib/modal/instrument.js) with the provided data.
    // The spread operator (...) is used to spread the properties of the data object into the new Instrument object.
    // This allows us to pass in all the properties of the data object into the new Instrument object, without having to explicitly list each one.
    // We also provide default values for the charges and application array in case they are not provided in the data object.
    const newInstrument = new Instrument({
      name: data.name,
      info: data.info,
      image: data.image,
      status: data.status,
      charge: data.charge || 0, // If data.charge is undefined or null, use 0
      commercial_charge: data.commercial_charge || 0, // If data.commercial_charge is undefined or null, use 0
      academic_charge: data.academic_charge || 0, // If data.academic_charge is undefined or null, use 0
      application: data.application || [], // If data.application is undefined or null, use an empty array
    });

    // Save the instrument to the database
    await newInstrument.save();

    // Close the MongoDB connection
    await mongoose.connection.close();

    // Return success response
    return NextResponse.json({
      status: "success",
      message: "Instrument added successfully",
    });
  } catch (error) {
    console.error("Error adding instrument:", error);
    // Return error response
    return NextResponse.json(
      { status: "error", message: "Failed to add instrument" },
      { status: 500 }
    );
  }
}
