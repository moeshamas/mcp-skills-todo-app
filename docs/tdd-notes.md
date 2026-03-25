# TDD Notes

## Prompt Used
Help me implement this small React to-do app using TDD. I need tests for adding a task, marking a task completed, deleting a task, and filtering tasks.

## Summary
- Testing tools were installed and configured with Vitest, Testing Library, jsdom, and jest-dom.
- A test setup file was added so matchers like `toBeInTheDocument` and `toBeChecked` work correctly.
- Core features were tested:
  - add task
  - prevent empty task submission
  - mark a task as completed
  - delete a task
  - filter tasks

## Key Decisions
- Keep tests focused on the core assignment features only.
- Use a simple single test file for clarity.
- Fix the Vitest setup using a setup file for jest-dom matchers.
- Keep the test cases aligned with the PRD acceptance criteria.