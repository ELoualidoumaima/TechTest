import React from 'react';
import { Task } from "../types/task.types";
import TaskItem from "./TaskItem";

type Props = {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggleStatus: (task: Task) => void;
};

const TaskList: React.FC<Props> = ({ tasks, onDelete, onToggleStatus }) => {
    if (tasks.length === 0) {
        return <p>Aucune tâche pour le moment.</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={() => onDelete(task.id)}
                    onToggleStatus={() => onToggleStatus(task)}
                />
            ))}
        </div>
    );
};

export default TaskList;
