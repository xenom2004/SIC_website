import mongoose from "mongoose";
import bcrypt from "bcrypt";
import connection from "../../lib/db";
import User from "../../lib/modal/user";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const data = await req.json();
    // console.log(data, "dataaa");

    if (!data.username || !data.password) {
        return NextResponse.json({ "status": "error", "message": "Username and password are required" });
    }

    try {
        // Check if user with the given username already exists
        await mongoose.connect(connection.connection);
        const existingUser = await User.findOne({ "name": data.username });
        if (existingUser) {
            return NextResponse.json({ "status": "error", "message": "Username is already taken" });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Create a new user with the hashed password
        const newUser = await User.create({"profileName": data.username,  "name": data.username, "password": hashedPassword, "order": data.order, "loginType": "Academic" });

        // console.log(newUser, "created user", data);

        return NextResponse.json({ "status": "success" });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ "status": "error", "message": "Internal server error" });
    } finally {
        // Close the database connection
        await mongoose.connection.close();
    }
}
