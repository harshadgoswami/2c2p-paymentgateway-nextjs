import { generateToken, verifyToken } from "@/lib/utils/jwt";
import { NextResponse } from "next/server";
import axios from 'axios';

export async function GET(reqest: Request) {

    const message = "welcome";

    const payload = generateToken({
        "merchantID": "JT01",
        "invoiceNo": "1523153662",
        "description": "item 1",
        "amount": 1000.00,
        "currencyCode": "SGD",
        backendReturnUrl: process.env.TWOC2PBACKENDRETURNURL
    });

    try {
        const res = await axios.post(process.env.TWOC2P_API_URL as string, { payload });

        const response = verifyToken(res.data.payload);

        return NextResponse.json({ message, response });

    } catch (err) {

        console.log(err);
        return NextResponse.json({ message: "error" });
    }

}