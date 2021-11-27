import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}) {

    const onChangeValueChange = (event) => {
        setSearchValue(event.target.value);
    };


    return [
        <input 
            className="ToDoSearch" 
            placeholder="Buscar ToDo"
            value={searchValue}
            onChange={onChangeValueChange}
        />
    ]
}

export {ToDoSearch};