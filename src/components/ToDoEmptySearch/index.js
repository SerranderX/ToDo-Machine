import React from "react";
import "./ToDoEmptySearch.css"

function ToDoEmptySearch(props){

    return (
        <p className="EmptyResultMessage">No existen resultados para la busqueda '{props.searchText}'.</p>
    )
}

export {ToDoEmptySearch}