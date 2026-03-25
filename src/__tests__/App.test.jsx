import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('To-Do App', () => {
  test('adds a task', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Enter a task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);

    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  test('prevents empty task submission', () => {
    render(<App />);

    const button = screen.getByText('Add Task');
    fireEvent.click(button);

    expect(screen.getByText('No tasks to display.')).toBeInTheDocument();
  });

  test('marks a task as completed', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Enter a task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test('deletes a task', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Enter a task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Task delete' } });
    fireEvent.click(button);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(screen.getByText('No tasks to display.')).toBeInTheDocument();
  });

  test('filters tasks correctly', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Enter a task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Active Task' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Completed Task' } });
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    fireEvent.click(screen.getByText('Completed'));

    expect(screen.getByText('Completed Task')).toBeInTheDocument();
  });
});