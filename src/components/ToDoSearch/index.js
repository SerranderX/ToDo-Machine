import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch() {
    const {searchValue, setSearchValue} = React.useContext(ToDoContext);

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