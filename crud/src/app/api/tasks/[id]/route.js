import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;

    return NextResponse.json({
        message: "GET request received " + id
    });
}

export async function PUT(request, { params }) {
    const { id } = await params;

    return NextResponse.json({
        message: "PUT request received " + id
    });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    return NextResponse.json({
        message: "DELETE request received " + id
    });
}