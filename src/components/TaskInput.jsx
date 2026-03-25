function TaskInput({ taskText, setTaskText, addTask }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="task-input-row">
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;