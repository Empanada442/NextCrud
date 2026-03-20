"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <section className="max-w-2xl w-full bg-white shadow-md rounded-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-gray-800">
          Sobre Nosotros
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Esta es una aplicación CRUD pensada para gestionar datos de forma
          simple, rápida y eficiente.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Está diseñada como una base para aprender, experimentar y construir
          proyectos más complejos.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            ¿Qué puedes hacer aquí?
          </h2>

          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Crear, leer, actualizar y eliminar datos</li>
            <li>Explorar una estructura de proyecto organizada</li>
            <li>Practicar desarrollo con buenas bases</li>
          </ul>
        </div>

        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Volver al inicio
        </button>

      </section>
    </main>
  );
}