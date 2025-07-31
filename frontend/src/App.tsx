import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task, TaskStatus } from "./types/task.types";
import { deleteTask, fetchTasks, updateTask } from "./services/taskApi";
import { Container, Box, Typography, Button, CircularProgress, Snackbar } from '@mui/material';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadTasks = async () => {
            setLoading(true);
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (err) {
                setError('Erreur de chargement des tâches.');
            } finally {
                setLoading(false);
            }
        };
        loadTasks();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteTask(id);
            setTasks((prev) => prev.filter((task) => task.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression de la tâche.');
        }
    };

    const handleToggleStatus = async (task: Task) => {
        const newStatus: TaskStatus = task.status === 'done' ? 'pending' : 'done';
        const updatedTask: Task = { ...task, status: newStatus };
        try {
            await updateTask(updatedTask.id, updatedTask);
            setTasks((prev) =>
                prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
            );
        } catch (err) {
            setError('Erreur lors de la mise à jour du statut.');
        }
    };

    const handleTaskCreated = async () => {
        try {
            const data = await fetchTasks();
            setTasks(data);
        } catch (error) {
            setError('Erreur lors de la récupération des tâches.');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4, backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '20px' }}>
            <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5', fontSize: '32px' }}>
                    📝 Task Manager
                </Typography>
                {/* Description example */}
                <Typography variant="body1" sx={{ fontSize: '18px', color: '#555' }}>
                    Gérez vos tâches et suivez leur statut en un clin d'œil.
                </Typography>
            </Box>

            {loading ? (
                <Box display="flex" justifyContent="center" mb={3}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <TaskForm onTaskCreated={handleTaskCreated} />
                    <Box mt={3}>
                        <TaskList tasks={tasks} onDelete={handleDelete} onToggleStatus={handleToggleStatus} />
                    </Box>
                </>
            )}

            <Snackbar
                open={!!error}
                autoHideDuration={4000}
                onClose={() => setError('')}
                message={error}
            />

            <Box mt={2} textAlign="center">
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setTasks([])} // Clear tasks for testing
                    sx={{
                        width: '100%',
                        padding: '12px 0',
                        fontSize: '16px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        boxShadow: 'none',
                        ':hover': {
                            backgroundColor: '#f44336',
                            color: '#fff',
                        },
                    }}
                >
                    Effacer toutes les tâches
                </Button>
            </Box>
        </Container>
    );
};

export default App;
