import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();
const developTag = '{ Powered by: SerranderX }';

function ToDoProvider(props) {
    const {item: todos,
        saveItem: saveTodos,
        loading,
        error} 
    = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.complete).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    
    if(!searchValue.length > 0){
    searchedTodos = todos;
    } else {
    searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });
    }

    const completeTodos = (id) => {
        const todoIndex = todos.findIndex( todo =>  todo.id === id );
        const todosMemory = [...todos];
        todosMemory[todoIndex].complete = (todosMemory[todoIndex].complete) ? false : true ;
        saveTodos(todosMemory);
    };

    const addToDos = (text) => {
        const todosMemory = [...todos];
        const idIncrement = (todosMemory.length > 0) ? todosMemory[todosMemory.length - 1].id + 1 : 1;
        todosMemory.push({
            id: idIncrement,
            text,
            complete: false,
        });
        saveTodos(todosMemory);
    };

    const deleteTodos = (id) => {
        const todoIndex = todos.findIndex( todo => todo.id === id );
        const todosMemory = [...todos];
        todosMemory.splice(todoIndex, 1);
        saveTodos(todosMemory);
    };

    return (
        <ToDoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            addToDos,
            setOpenModal,
            developTag,
        }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export {ToDoContext, ToDoProvider};