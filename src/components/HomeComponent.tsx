import { useEffect, useState } from "react"
import { fetAllTodos } from "../service/TodoService";
import type { TodoDto } from "../ds/TodoDto";


export default function HomeComponent() {
    const [todos, setTodos] = useState<TodoDto[]>([]);

    useEffect(() => {
         fetAllTodos()
        .then(response => {
            setTodos(response.data);
        })
        .catch(error => {
            console.error("Error fetching todos:", error);
        });
    }, []);

    // const getAllTodos = () =>{
      
    // }

    console.log("Todos:", todos);

  return (
    <div>HomeComponent</div>
  )
}
