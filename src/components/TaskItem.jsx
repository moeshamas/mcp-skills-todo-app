function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className="task-item">
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span className={task.completed ? 'completed-task' : ''}>
          {task.text}
        </span>
      </label>
      <button
        className="delete-button"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;