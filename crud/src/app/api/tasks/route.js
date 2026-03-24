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

export function POST() {
    return NextResponse.json({
      message: "subido correctamente",
    });
  }