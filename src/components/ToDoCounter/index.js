import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css";

function ToDoCounter(){
    const {totalTodos, completedTodos} = React.useContext(ToDoContext);

    return (
        <h2 className="ToDoCounter">Has completado {completedTodos} de {totalTodos} ToDo's</h2>
    )
}

export {ToDoCounter};