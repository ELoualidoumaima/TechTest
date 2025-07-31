import express from 'express';
import taskRoutes from "./Routes/task.routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;

app.use('/tasks', taskRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});