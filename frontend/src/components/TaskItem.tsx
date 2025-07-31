import React from 'react';
import { Task } from "../types/task.types";

type Props = {
    task: Task;
    onDelete: () => void;
    onToggleStatus: () => void;
};

const TaskItem: React.FC<Props> = ({ task, onDelete, onToggleStatus }) => {
    const isDone = task.status === 'done';

    return (
        <div style={{
            padding: '1rem',
            border: '1px solid gray',
            marginBottom: '1rem',
            backgroundColor: isDone ? '#e0ffe0' : '#fff'
        }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Status:</strong> {isDone ? 'Terminée' : 'En cours'}</p>
            <button onClick={onToggleStatus}>
                {isDone ? 'Marquer comme en cours' : 'Marquer comme terminée'}
            </button>
            <button onClick={onDelete} style={{ marginLeft: '1rem', color: 'red' }}>
                Supprimer
            </button>
        </div>
    );
};

export default TaskItem;
