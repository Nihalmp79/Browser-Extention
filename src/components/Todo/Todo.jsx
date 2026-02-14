import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css"

export const Todo = () => {


    const [todo, setTodo] = useState();
    const [todoList, setTodoList] = useState([]);

    const handleTodoInputChange = (event) => {
        setTodo(event.target.value);
    }

    const handleTodoEnterKey = (event) => {
        if(event.key === "Enter"){
            const updatedTodoList = [...todoList, {_id: uuidv4(), todo, isCompleted: false}];
            setTodoList(updatedTodoList);
            setTodo("");
            localStorage.setItem("todoList", JSON.stringify(todoList));
        }
    }
    console.log("todolist",todoList);

   return(
    <div className="todo-container absolute">
        <div className="todo-input-container">
            <input value={todo} className="todo-input" onChange={handleTodoInputChange} onKeyPress={handleTodoEnterKey}/>
            <div className="todo-list"></div>
        </div>
    </div>
   ) 
}