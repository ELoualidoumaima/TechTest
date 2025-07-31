import { Request, Response } from 'express';
import * as service from '../Services/task.service';

export function getAll(req: Request, res: Response) {
    res.json(service.getTasks());
}

export function create(req: Request, res: Response) {
    const { title, description, status } = req.body;
    const task = service.createTask({ title, description, status });
    res.status(201).json(task);
}

export function remove(req: Request, res: Response) {
    try {
        service.deleteTask(Number(req.params.id));
        res.sendStatus(204);
    } catch (err) {
        if (err instanceof Error) {
            res.status(404).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Erreur inconnue' });
        }
    }
}

export function updateStatus(req: Request, res: Response) {
    try {
        const task = service.updateTaskStatus(Number(req.params.id), req.body.status);
        res.json(task);
    } catch (err) {
        if (err instanceof Error) {
            res.status(404).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Erreur inconnue' });
        }
    }
}
