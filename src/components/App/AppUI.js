import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoItem } from "../ToDoItem";
import { ToDoContext } from "../ToDoContext";
import { ToDoForm } from "../ToDoForm";
import { Modal } from "../Modal";
import { Footer } from "../Footer"
import { ToDoLoading } from "../ToDoLoading";
import { TodosError } from "../ToDoError";
import { ToDoEmpty } from "../ToDoEmpty";
import { ToDoHeader } from "../ToDoHeader";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    developTag,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
      <ToDoHeader>
        <ToDoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <ToDoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </ToDoHeader>

      <ToDoList>
        {error && <TodosError/> }
        {loading && <ToDoLoading />}
        {!loading && !searchedTodos.length && <ToDoEmpty />}

        {searchedTodos.map(todo => (
          <ToDoItem 
            key={todo.id.toString()}
            text={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodos(todo.id)}
            onDelete={() => deleteTodos(todo.id)}
          />))}
          
      </ToDoList>

      {!!openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}

      <CreateToDoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      <Footer developTag={developTag}/>
    </React.Fragment>
  );
}

export { AppUI };
