import React from "react";
import "./ToDoList.css";


function ToDoList(props){
    
    return (
        <section className="ToDoList">
            <ul>
            {props.children}
            </ul>
        </section>
    )
}

export {ToDoList};