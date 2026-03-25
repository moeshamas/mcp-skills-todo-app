import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <li className="empty-state">No tasks to display.</li>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;