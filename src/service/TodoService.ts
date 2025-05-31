import axios from "axios";
import type { TodoDto } from "../ds/TodoDto";

const TODO_BACKEND_URL = 'http://localhost:8080/api/todos';

export const fetAllTodos = () => 
    axios.get<TodoDto[]>(TODO_BACKEND_URL);