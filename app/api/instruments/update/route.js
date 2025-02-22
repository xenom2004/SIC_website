
import mongoose from "mongoose";
import connection from "../../../lib/db"  
import instrument from "../../../lib/modal/instrument";
export const dynamic = 'force-dynamic'
export async function POST(req) {
    try {
        const data = await req.json();
        // console.log(data, "here am i");

        await mongoose.connect(connection.connection);
        const filter = { "name": data.instrument.name }; // specify the filter to match the document you want to update
        const update = { $set: { status: data.updatedstatus } }; // specify the update operation
        const options = { new: true }; // optional: returns the modified document instead of the original

        const updatedDocument = await instrument.findOneAndUpdate(filter, update, options);
        // console.log(updatedDocument, "Updated");

        return Response.json({ status: "success" });
    } catch (error) {
        console.error(error);
        return Response.json({ status: "failure" });
    }
}