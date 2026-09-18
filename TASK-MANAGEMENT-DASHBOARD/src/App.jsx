import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React useState",
      completed: false,
    },
    {
      id: 2,
      title: "Build a React project",
      completed: true,
    },
    {
      id: 3,
      title: "Practice JavaScript",
      completed: false,
    },
  ]);

  const [filter, setFilter] = useState("all");

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;

  const remainingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <>
      <Navbar />

      <main className="dashboard">
        <div className="container">
          <section className="dashboard-header">
            <p className="section-label">Productivity</p>
            <h1>Task Dashboard</h1>
            <p>
              Manage your tasks and keep track of your progress.
            </p>
          </section>

          <TaskForm onAddTask={addTask} />

          <TaskStats
            total={tasks.length}
            completed={completedTasks}
            remaining={remainingTasks}
          />

          <TaskFilter
            filter={filter}
            onFilterChange={setFilter}
          />

          <TaskList
            tasks={filteredTasks}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        </div>
      </main>
    </>
  );
}

export default App;