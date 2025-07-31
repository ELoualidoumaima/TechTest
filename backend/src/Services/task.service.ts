import { Task } from '../Types/task.types';
import { tasks, getNextId } from '../Models/task.model';

export function getTasks(): Task[] {
    return tasks;
}

export function createTask(data: Omit<Task, 'id'>): Task {
    const newTask: Task = { ...data, id: getNextId() }; // Utilisation de la fonction
    tasks.push(newTask);
    return newTask;
}

export function deleteTask(id: number): void {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) throw new Error('Tâche non trouvée');
    tasks.splice(index, 1);
}

export function updateTaskStatus(id: number, status: Task['status']): Task {
    const task = tasks.find(t => t.id === id);
    if (!task) throw new Error('Tâche non trouvée');
    task.status = status;
    return task;
}