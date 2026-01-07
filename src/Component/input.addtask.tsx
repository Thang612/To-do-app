import { useState, type KeyboardEvent } from "react"

interface IProps {
    addTask: (task: string) => void
}

const InputAddTaskComponent = ({ addTask }: IProps) => {
    const [task, setTask] = useState('')

    const handleAddTask = () => {
        if (task.trim() === '') {
            alert("Not content to add task")
        } else {
            addTask(task)
            setTask('')
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTask()
        }
    }

    return (<>
        <div className="addTask">
            <i className="fa-solid fa-circle-plus" onClick={handleAddTask}></i>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => { handleKeyDown(e) }} autoFocus placeholder="Add a new task..." />
        </div>
    </>)
}

export default InputAddTaskComponent;