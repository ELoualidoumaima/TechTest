import axios from "axios";
import { Task } from "../types/task.types";

const BASE_URL = "http://localhost:3001"; // Corrigé l'espace en trop

export const fetchTasks = async (): Promise<Task[]> => {
    const res = await axios.get(`${BASE_URL}/tasks`); // Assure-toi que l'endpoint soit correct
    return res.data;
};

export const createTask = async (data: Omit<Task, "id" | "createdAt">): Promise<Task> => {
    const res = await axios.post(`${BASE_URL}/tasks`, data);
    return res.data;
};

export const updateTask = async (id: number, data: Partial<Task>): Promise<Task> => {
    const res = await axios.patch(`${BASE_URL}/tasks/${id}`, data);
    return res.data;
};

export const deleteTask = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/tasks/${id}`);
};