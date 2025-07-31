import axios from 'axios';
import {Task} from "../types/task.types";

const api = axios.create({
    baseURL: 'http://localhost:3001/tasks',
});

export const getTasks = () => api.get<Task[]>('/');
export const createTask = (data: Omit<Task, 'id' | 'status'>) => api.post<Task>('/', data);
export const deleteTask = (id: string | number) => api.delete(`/${id}`);
export const updateTaskStatus = (id: string | number, status: 'pending' | 'done') => api.patch(`/${id}`, { status });