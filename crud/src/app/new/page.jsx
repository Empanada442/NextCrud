"use client";
import { useState } from "react";

export default function NewPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      // opcional: limpiar form
      setForm({ title: "", description: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
        onSubmit={onSubmit}
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Tarea:
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
            required
            className="w-full p-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Descripción:
          </label>
          <textarea
            rows={3}
            name="description"
            value={form.description}
            onChange={onChange}
            required
            className="w-full p-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}