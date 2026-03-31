"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ task }) {
    const [form, setForm] = useState({
        title: task.title || "",
        description: task.description || "",
        completed: task.completed ?? false,
      });

  const router = useRouter();

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    router.push("/viewtasks");
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        name="title"
        value={form.title}
        onChange={onChange}
        className="w-full border p-2"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={onChange}
        className="w-full border p-2"
      />

      <button className="bg-blue-500 text-white p-2 rounded">
        Actualizar
      </button>
    </form>
  );
}