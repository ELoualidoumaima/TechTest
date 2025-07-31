import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types/task.types';
import { createTask, deleteTask, getTasks, updateTaskStatus } from './services/taskApi';

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getTasks().then((res) => setTasks(res.data));
    }, []);

    const handleAdd = async (data: Omit<Task, 'id' | 'status'>) => {
        const res = await createTask(data);
        setTasks([...tasks, res.data]);
    };

    const handleDelete = async (id: string | number) => {
        await deleteTask(id);
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const handleToggle = async (id: string | number, newStatus: 'pending' | 'done') => {
        const res = await updateTaskStatus(id, newStatus);
        setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onAdd={handleAdd} />
            <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
        </div>
    );
}
