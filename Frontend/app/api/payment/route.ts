import { NextResponse } from "next/server";
import Razorpay from "razorpay"

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_KEY_ID!,
});

export async function POST() {
    try {
        const order = await razorpay.orders.create({
            amount: 1000 * 100,
            currency: "INR",
            receipt: "receipt_" + Math.random().toString(36).substring(3),
        });
        return NextResponse.json({orderId: order.id},{ status: 200});
    } catch(error){
        console.error("Error creating order: ", error);
        return NextResponse.json(
            {error: "Error creating order"},
            {status: 500}
        )
    }
    
}