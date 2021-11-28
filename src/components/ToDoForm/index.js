import React from 'react';
import './ToDoForm.css';

function ToDoForm({
        addToDos,
        setOpenModal
    }){
    const [textTodoVal, setTextTodoVal] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    }

    const añadirToDo = (event) => {
        event.preventDefault();
        if(textTodoVal){
            addToDos(textTodoVal);
            setOpenModal(false);
        }
    }

    const onChangeTextToDoVal = (event) => {
        setTextTodoVal(event.target.value);
    }

    return (
        <form className="form-box" onSubmit={añadirToDo}>
            <h2>Escribe tu nuevo ToDo</h2>
            <textarea 
            value={textTodoVal}
            onChange={onChangeTextToDoVal}
            placeholder="Nombre de la tarea a realizar"></textarea>
            <div className="form-box_div">
                <button type="button" className="cancel-btn" onClick={onCancel}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Cancelar
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" className="submit-btn">
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