import React from 'react';
import {Task} from "../types/task.types";

type Props = {
    tasks: Task[];
    onDelete: (id: string | number) => void | Promise<void>;
    onToggle: (id: string | number, newStatus: 'pending' | 'done') => void | Promise<void>;
};

const TaskList: React.FC<Props> = ({ tasks, onDelete, onToggle }) => {
    return (
        <div style={{ maxWidth: 600, margin: '20px auto', padding: 20, borderRadius: 10, background: '#f9f9f9', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center' }}>Liste des tâches</h2>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: 8,
                        padding: 16,
                        marginBottom: 12,
                        background: task.status === 'done' ? '#e0ffe0' : '#fff'
                    }}
                >
                    <h3 style={{ margin: '0 0 8px 0' }}>{task.title}</h3>
                    <p style={{ margin: '0 0 12px 0', color: '#555' }}>{task.description}</p>
                    <p style={{ fontStyle: 'italic', color: task.status === 'done' ? 'green' : 'orange' }}>
                        Statut : {task.status === 'done' ? 'Terminée' : 'En attente'}
                    </p>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <button
                            onClick={() => onToggle(task.id, task.status === 'done' ? 'pending' : 'done')}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }}
                        >
                            Changer statut
                        </button>
                        <button
                            onClick={() => onDelete(task.id)}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#dc3545',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }}
                        >
                            Supprimer
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
