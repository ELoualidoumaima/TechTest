import { randomUUID } from 'crypto';
import {Task} from "../Types/task.types";

let tasks: Task[] = [];

export const getTasks = () => tasks;

export const createTask = ({ title, description }: { title: string; description: string }) => {
    const newTask: Task = {
        id: randomUUID(),
        title,
        description,
        status: 'pending',
    };
    tasks.push(newTask);
    return newTask;
};

export const deleteTask = (id: string) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
};

export const updateTaskStatus = (id: string, status: 'pending' | 'done') => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return null;
    task.status = status;
    return task;
};
