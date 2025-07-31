import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Task} from "../types/task.types";

const fetchTasks = async (): Promise<Task[]> => {
    const res = await axios.get("http://localhost:3001/tasks");
    return res.data;
};

export const useTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: fetchTasks,
    });
};