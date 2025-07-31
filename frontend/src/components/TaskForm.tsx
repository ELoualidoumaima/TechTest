import React, { useState } from 'react';
import { createTask } from "../services/taskApi";

type Props = {
    onTaskCreated: () => void; // Callback à appeler après la création
};

const TaskForm: React.FC<Props> = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createTask({ title, description, status: 'pending' });
            onTaskCreated(); // Rafraîchissement de la liste après création
            setTitle('');
            setDescription('');
        } catch (err) {
            setError('Erreur lors de la création de la tâche');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{
                    fontSize: '16px',  // Taille du texte à l'intérieur du champ
                    height: '40px',    // Hauteur du champ d'entrée
                    padding: '8px',    // Espacement à l'intérieur du champ
                    marginBottom: '12px', // Espacement en bas
                    width: '100%'      // Prend toute la largeur disponible
                }}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                    fontSize: '16px',  // Taille du texte à l'intérieur de la zone de texte
                    height: '100px',   // Hauteur de la zone de texte
                    padding: '8px',    // Espacement à l'intérieur de la zone de texte
                    width: '100%',     // Prend toute la largeur disponible
                    marginBottom: '12px' // Espacement en bas
                }}
            />
            <button type="submit" style={{ fontSize: '16px', padding: '10px 20px', borderRadius: '8px' }}>
                Ajouter
            </button>
        </form>
    );
};

export default TaskForm;
