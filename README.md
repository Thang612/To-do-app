📌 Overview

The Todo List Application is a simple frontend project that allows users to manage daily tasks.
This project focuses on practicing core frontend concepts such as state management, event handling, UI updates, and handling edge cases using JavaScript (or React).

🎯 Purpose
Practice frontend thinking for Fresher / Junior developers
Understand the flow: User Action → State Change → UI Update
Improve skills in DOM manipulation / component-based architecture
Handle common UI edge cases in real-world applications

⚙️ Features
➕ Add new todos
✏️ Edit existing todos
🗑️ Delete todos
☑️ Mark todos as completed
🚫 Input validation (prevent empty todos)
⌨️ Keyboard support (Enter / Esc)
📭 Empty state handling when no todos exist

🧠 Implementation Logic
Each todo item has a unique id (index is not used)
Todo list is managed in a centralized state
Editing is allowed for only one todo at a time
State is never mutated directly
UI automatically re-renders when state changes
🧩 Data Structure Example
{
  id: number,
  text: string,
  completed: boolean
}

🌱 Optional Enhancements
Filter todos: All / Active / Completed
Persist data using localStorage
Display remaining todo count
Undo delete action
Responsive design for mobile devices

🚀 Technologies Used
JavaScript (ES6+)
HTML / CSS
(or React / Next.js if implemented with a framework)

📚 Notes
This project is built for learning purposes, with a focus on logic, structure, and user experience rather than complex UI design.

📸 Demo
<img width="1920" height="1093" alt="image" src="https://github.com/user-attachments/assets/740d6d24-c8ae-436a-9cee-af0d29f2b64c" />
