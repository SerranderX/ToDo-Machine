import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({totalTodos, completedTodos, loading}){
    const message = (loading) ? "Cargando... Por favor espere.": `Has completado ${completedTodos} de ${totalTodos} ToDo's`; 

    return (
        <h2 className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}>{message}</h2>
    )
}

export {ToDoCounter};