async function loadTasks() {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });
  
    return res.json();
  }
  
  export default async function Page() {
    const tasks = await loadTasks();
  
    return (
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    );
  }