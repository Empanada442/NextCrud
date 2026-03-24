import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { userId } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await res.json();

    console.log("User data:", data);

    return NextResponse.json(data);
}