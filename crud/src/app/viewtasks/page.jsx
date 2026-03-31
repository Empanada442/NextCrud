import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";

async function loadTasks() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const tasks = await loadTasks();

  return (
    <div className="p-6 space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border p-4 rounded flex justify-between items-center"
        >
          <div>
            <h2 className="font-bold">{task.title}</h2>
            <p>{task.description}</p>
          </div>

          <div className="flex gap-2">
            {/* EDITAR */}
            <Link
              href={`/tasks/${task.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Editar
            </Link>

            {/* BORRAR */}
            <DeleteButton id={task.id} />
          </div>
        </div>
      ))}
    </div>
  );
}