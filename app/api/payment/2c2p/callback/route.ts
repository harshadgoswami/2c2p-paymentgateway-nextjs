import { generateToken, verifyToken } from "@/lib/utils/jwt";
import { NextResponse } from "next/server";
import axios from 'axios';

export async function POST(request: Request) {

    const message = "payment done";

    try {
        const res = await request.json();
        const response = verifyToken(res);

        return NextResponse.json({ message, response });

    } catch (err) {

        console.log(err);
        return NextResponse.json({ message: "error" });
    }

}