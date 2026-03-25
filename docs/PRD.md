# Product Requirements Document (PRD)

## 1. Product Overview

The MCP Skills To-Do App is a small React-based web application developed as part of an assignment focused on demonstrating software development workflow using MCPs and AI-assisted skills.

The application allows users to manage simple tasks by adding, completing, deleting, and filtering tasks. The project intentionally keeps a minimal scope to emphasize workflow, testing, and architecture rather than product complexity.

---

## 2. Goals

The main goals of this project are:

- Build a small, functional React application
- Demonstrate a complete development workflow using MCPs and required skills
- Provide a clear structure for generating GitHub Issues
- Enable easy testing of core features using TDD
- Support later improvements through codebase architecture refinement
- Keep the application simple and easy to demonstrate in a video walkthrough

---

## 3. Non-Goals

The following features are intentionally excluded:

- User authentication or login
- Backend or database integration
- Cloud storage or deployment requirements
- Task editing functionality
- Categories, tags, or prioritization
- Drag-and-drop functionality
- Notifications or reminders
- Advanced UI/UX features or animations

---

## 4. Target User

The target user is:

- A student or instructor reviewing the assignment
- Someone who wants to quickly create and manage a simple list of tasks
- A user interacting with a minimal and intuitive interface

---

## 5. Functional Requirements

The application must support the following functionality:

### Task Management
- Users can add a new task using a text input field
- Users cannot add empty or whitespace-only tasks
- New tasks appear immediately in the task list

### Task Completion
- Users can mark tasks as completed using a checkbox
- Completed tasks should be visually distinct (e.g., strikethrough text)

### Task Deletion
- Users can delete tasks from the list
- Deleted tasks are permanently removed from the UI

### Task Filtering
- Users can filter tasks by:
  - All
  - Active (not completed)
  - Completed

---

## 6. Acceptance Criteria

The project will be considered complete when:

### Add Task
- Entering valid text and clicking "Add Task" adds a new task
- Pressing Enter also adds a task
- Empty or whitespace-only input does not create a task

### Complete Task
- Clicking the checkbox toggles the completed state
- Completed tasks display with visual distinction

### Delete Task
- Clicking "Delete" removes the task from the list

### Filter Tasks
- "All" shows all tasks
- "Active" shows only incomplete tasks
- "Completed" shows only completed tasks

### UI Behavior
- The UI updates immediately after every action
- If no tasks exist for a filter, an empty state message is shown

---

## 7. Technical Notes

- Built using React (Vite setup)
- Uses functional components and React hooks (`useState`, `useMemo`)
- State is managed locally within the application
- No external APIs or backend services are used
- Styling is handled using basic CSS
- Code is intentionally kept simple and will later be improved using architecture-focused refactoring

---

## 8. Out-of-Scope Items

The following will not be implemented in this project:

- Persistent storage (localStorage or database)
- API integrations
- Authentication systems
- Responsive design beyond basic usability
- Accessibility optimizations beyond default HTML behavior
- Performance optimization for large datasets