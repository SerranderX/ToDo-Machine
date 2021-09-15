import React from 'react';
import './ToDoForm.css';
import { ToDoContext } from '../ToDoContext';

function ToDoForm(){
    const [textTodoVal, setTextTodoVal] = React.useState('');

    const {
        addToDos,
        setOpenModal
    } = React.useContext(ToDoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const añadirToDo = (event) => {
        event.preventDefault();
        addToDos(textTodoVal);
        setOpenModal(false);
    }

    const onChangeTextToDoVal = (event) => {
        setTextTodoVal(event.target.value);
    }

    return (
        <form class="form-box" onSubmit={añadirToDo}>
            <h2>Escribe tu nuevo ToDo</h2>
            <textarea 
            value={textTodoVal}
            onChange={onChangeTextToDoVal}
            placeholder="Nombre de la tarea a realizar"></textarea>
            <div class="form-box_div">
                <button type="button" class="cancel-btn" onClick={onCancel}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Cancelar
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" class="submit-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {ToDoForm};