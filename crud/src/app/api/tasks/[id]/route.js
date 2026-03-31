import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, context) {
    try {
      const { id } = await context.params;
  
      console.log("RAW ID:", id);
  
      const taskId = parseInt(id, 10);
  
      console.log("PARSED ID:", taskId);
  
      if (isNaN(taskId)) {
        return NextResponse.json(
          { message: "Invalid ID" },
          { status: 400 }
        );
      }
  
      const task = await prisma.task.findUnique({
        where: { id: taskId },
      });
  
      if (!task) {
        return NextResponse.json(
          { message: "Task not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(task);
  
    } catch (error) {
      console.error("ERROR:", error);
  
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }

  export async function PUT(request, context) {
    const { id } = await context.params;
    const body = await request.json();
  
    try {
      const updatedTask = await prisma.task.update({
        where: { id: Number(id) },
        data: {
          title: body.title,
          description: body.description,
          completed: body.completed,
        },
      });
  
      return NextResponse.json(updatedTask);
  
    } catch (error) {
      console.error("UPDATE ERROR:", error);
  
      return NextResponse.json(
        { message: "Error updating task" },
        { status: 500 }
      );
    }
  }

  export async function DELETE(request, context) {
    const { id } = await context.params;
    const parsedId = Number(id);
  
    if (isNaN(parsedId)) {
      return NextResponse.json(
        { message: "Invalid ID" },
        { status: 400 }
      );
    }
  
    try {
      await prisma.task.delete({
        where: { id: parsedId },
      });
  
      return NextResponse.json({
        message: "Task deleted",
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Error deleting task" },
        { status: 500 }
      );
    }
  }