import express from 'express';

import { z } from 'zod';
import {createTask, deleteTask, getTasks, updateTaskStatus} from "../Services/task.service";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(getTasks());
});

const taskSchema = z.object({
    title: z.string(),
    description: z.string(),
});

router.post('/', (req, res) => {
    const parse = taskSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Invalid task data' });
    }
    const newTask = createTask(parse.data);
    res.status(201).json(newTask);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const success = deleteTask(id);
    if (!success) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    if (status !== 'pending' && status !== 'done') {
        return res.status(400).json({ error: 'Invalid status' });
    }
    const updated = updateTaskStatus(id, status);
    if (!updated) return res.status(404).json({ error: 'Task not found' });
    res.json(updated);
});

export default router;
