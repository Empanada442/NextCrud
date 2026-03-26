import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
    const { id } = await params;

    const tasksGet = await prisma.task.findUnique({
        where: { id: Number(id) },
    });

    console.log(tasksGet);
    return NextResponse.json({
        message: "GET request received " + id
    });
}

export async function PUT(request, { params }) {
    const { id } = await params;
    const body = await request.json();

    const updatedTask = await prisma.task.update({
        where: { id: Number(id) },
        data: {
            title: body.title,
            description: body.description,
            completed: body.completed,
            user: {
                connect: { id: body.userId }
            }
        },
    });

    return NextResponse.json({
        message: "Task updated successfully",
        task: updatedTask,
    });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    const tasksDelete = await prisma.task.delete({
        where: { id: Number(id) },
    });

    console.log(tasksDelete);
    return NextResponse.json({
        message: "DELETE request received " + id
    });
}