"use client";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("¿Seguro que quieres borrar esta tarea?");
    if (!confirmDelete) return;

    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Borrar
    </button>
  );
}