import { useEffect, useState } from "react";
import type { ITask } from "../App";

interface IProps {
    tasks: ITask[];
    toggleTask: (id: number) => void;
    clearComplete: () => void;
    deleteTask: (task: number) => void;
    editTask: (taskId: number, newText: string) => void
}

const TaskTabsComponent = ({ tasks, toggleTask, clearComplete, deleteTask, editTask }: IProps) => {
    const statusList = ['All', 'Active', 'Completed']
    const [status, setStatus] = useState(0)
    const [filterTasks, setFilterTasks] = useState<ITask[]>([]);
    const [taskCompleted, setTaskCompleted] = useState(0)

    useEffect(() => {
        setTaskCompleted(filterTasks.filter(t => !t.completed).length)
        switch (status) {
            case 1: setFilterTasks(tasks.filter(item => item.completed))
                break;
            case 2: setFilterTasks(tasks.filter(item => !item.completed))
                break;
            default: setFilterTasks(tasks)
        }
    }, [tasks, status])

    const handleStatus = (status: number) => {
        setStatus(status)
    }

    const handleDeleteTask = (taskId: number) => {
        const taskToDelete = tasks.find(t => t.id === taskId);
        if (confirm(`Are you sure you want to delete "${taskToDelete?.text}"? This action is destructive and cannot be undone immediately.`)) {
            deleteTask(taskId);
        }
    }

    const handleEditTask = (taskId: number) => {
        const taskToEdit = tasks.find(t => t.id === taskId);

        const newText = prompt(`Nhập thông tin thay đổi cho task:`, taskToEdit?.text);

        if (newText && newText.trim() !== '') {
            editTask(taskId, newText)
        }
    };

    return (
        <div className="tabsTask">
            <div className="tabsTask__heading">
                {statusList.map((item, index) => {
                    return (
                        <div className={index == status ? 'active' : ''} onClick={() => handleStatus(index)}>{item}</div>
                    )
                })}
            </div>
            <div className="tabsTask__list">
                {filterTasks && filterTasks.length === 0 && (
                    <div className="tabsTask__list-item">
                        <p style={{ fontSize: '1em', textAlign: 'center', width: '100%', color: '#777' }}>
                            No content ...
                        </p>
                    </div>
                )}

                {filterTasks && filterTasks.map((item) => (
                    <div key={item.id} className={`tabsTask__list-item ${item.completed ? 'active' : ''}`}>
                        <div>
                            <input type="checkbox" checked={item.completed} onClick={() => toggleTask(item.id)} />
                            <p>{item.text}</p>
                        </div>

                        <div className="tabsTask__list-action">
                            <div onClick={() => handleEditTask(item.id)}><i className="fa-solid fa-pen"></i></div>
                            <div onClick={() => handleDeleteTask(item.id)}><i className="fa-regular fa-trash-can"></i></div>
                        </div>
                    </div>
                ))}

                <div >
                    <p>{taskCompleted} items left</p>
                    <p style={{ cursor: 'pointer' }} onClick={clearComplete}>Clear completed</p>
                </div>
            </div>
        </div>
    )
}

export default TaskTabsComponent;