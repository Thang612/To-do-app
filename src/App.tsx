import { useEffect, useState } from 'react'
import './App.css'
import InputAddTaskComponent from './Component/input.addtask';
import TaskTabsComponent from './Component/tasks.tab';

export interface ITask {
  id: number,
  text: string,
  completed: boolean
}



function App() {
  const [date, setDate] = useState('')
  const [tasksData, setTasksData] = useState<ITask[]>([])

  useEffect(() => {
    const d = new Date();
    const weekday = d.toLocaleDateString('en-US', { weekday: 'long' });
    const month = d.toLocaleDateString('en-US', { month: 'short' });
    const day = d.getDate();

    setDate(`${weekday}, ${month} ${day}`);
  }, [])

  const addTask = (text: string) => {
    setTasksData((prevTasks) => [
      { id: Date.now(), text, completed: false },
      ...prevTasks
    ]);
  };

  const toggleTask = (id: number) => {
    setTasksData(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  const clearComplete = () => {
    setTasksData(prev => prev.filter(item => !item.completed))
  }

  const deleteTask = (taskId: number) => {
    setTasksData(prev => prev.filter(item => item.id !== taskId))
  }

  const editTask = (taskId: number, newText: string) => {
    setTasksData(prevTasks =>
      prevTasks.map(task => task.id === taskId ? { ...task, text: newText.trim() } : task)
    );
  }

  return (
    <>
      <div style={{ textAlign: "left" }} className='container'>
        <div className='heading'>
          <h1 >Hello You!!!</h1>
          <p>{date}</p>
        </div>
        <InputAddTaskComponent addTask={addTask} />
        <TaskTabsComponent editTask={editTask} deleteTask={deleteTask} clearComplete={clearComplete} toggleTask={toggleTask} tasks={tasksData} />
      </div>

    </>
  )
}

export default App
