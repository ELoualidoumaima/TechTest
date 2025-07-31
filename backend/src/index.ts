import express from 'express';
import taskRoutes from './Routes/task.routes'; // Assure-toi que le chemin est correct
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json()); // Pour que Express puisse analyser le JSON dans les requêtes
app.use('/tasks', taskRoutes); // Toutes les routes liées aux tâches seront maintenant préfixées par /tasks

// Route de test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Serveur backend fonctionne !'); // Affiche un message si la racine est appelée
});

app.listen(3001, () => {
    console.log('Serveur backend à http://localhost:3001');
});
