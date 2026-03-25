import { useMemo, useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    const trimmedTask = taskText.trim();

    if (!trimmedTask) {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: trimmedTask,
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setTaskText('');
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  return (
    <div className="app">
      <div className="todo-card">
        <h1>MCP Skills To-Do App</h1>
        <p className="subtitle">
          A small React to-do app for the assignment workflow.
        </p>

        <TaskInput
          taskText={taskText}
          setTaskText={setTaskText}
          addTask={addTask}
        />

        <FilterBar filter={filter} setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;