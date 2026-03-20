import { NextResponse } from "next/server";


  // query databasee
  // params
  //communite with other back end 

  export async function GET() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }
  
      const users = await res.json();
  
      return NextResponse.json({
        message: "Usuarios obtenidos correctamente",
        data: users,
      });
  
    } catch (error) {
      return NextResponse.json(
        {
          message: "Error al obtener usuarios",
          error: error.message,
        },
        { status: 500 }
      );
    }
  }


export async function POST() {
    return NextResponse.json({
    message: "Usuario subido correctamente",
  });
}

export async function PUT() {
    return NextResponse.json({
    message: "Usuario atualizado correctamente",
  });
}

export async function DELETE() {
    return NextResponse.json({
    message: "Usuario borrado correctamente",
  });
}