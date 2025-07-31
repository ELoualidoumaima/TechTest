import { Task } from '../Types/task.types';

export let tasks: Task[] = [];
let currentId = 1;

export const getNextId = (): number => {
    return currentId++;
};