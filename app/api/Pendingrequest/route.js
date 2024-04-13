import mongoose from "mongoose";
import connection from "../../lib/db";
import Order from "../../lib/modal/order";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const val = await mongoose.connect(connection.connection);
    // console.log(connection);
    try {
        const activeOrders = await Order.find({ status: { $in: ['Pending', 'Payment Incomplete','Payment Complete'] } });

        // console.log(activeOrders)
        return NextResponse.json(activeOrders);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to retrieve orders' }, { status: 500 });
    }
}
