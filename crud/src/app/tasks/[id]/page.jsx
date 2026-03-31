import EditForm from "@/components/EditForm";

async function getTask(id) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Page({ params }) {
  const { id } = await params;
  const task = await getTask(id);

  return (
    <div className="p-10">
      <EditForm task={task} />
    </div>
  );
}