import React from "react";
import "./ToDoList.css";


function ToDoList(props){
    const rendeRFunc = props.render || props.children;
    
    return (
        <section className="ToDoList-container">
            
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyToDos()}
            
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            <ul>
                {(!props.loading && !props.error) && props.searchedTodos.map(rendeRFunc)}
            </ul>
        </section>
    )
}

export {ToDoList};