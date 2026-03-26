import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export  async function GET() {
  const tasks =  await prisma.task.findMany()
  console.log(tasks)


  return NextResponse.json({
    message: "Tareas obtenidas correctamente",
  });
}

export async function POST(request) {
  const data = await request.json();
  await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      userId: String(1), // Asignar un userId fijo para esta tarea
    },
  });
  return NextResponse.json({
    message: "Tarea creada correctamente",
  });
}