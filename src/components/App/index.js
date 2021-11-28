import React from 'react';
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoItem } from "../ToDoItem";
import { ToDoForm } from "../ToDoForm";
import { Modal } from "../Modal";
import { Footer } from "../Footer"
import { ToDoLoading } from "../ToDoLoading";
import { TodosError } from "../ToDoError";
import { ToDoEmpty } from "../ToDoEmpty";
import { ToDoHeader } from "../ToDoHeader";
import { useToDos } from "./useToDos";
import { ToDoEmptySearch } from '../ToDoEmptySearch';



function App() {
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
    setSearchValue,
    addToDos,
  } = useToDos();

  return (
    <React.Fragment>
      <ToDoHeader loading={loading}>
        <ToDoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <ToDoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </ToDoHeader>

      <ToDoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError/>}
        onLoading={() => <ToDoLoading/>}
        onEmptyToDos={() => <ToDoEmpty />}
        onEmptySearchResults={(message) => <ToDoEmptySearch searchText={message}/>}
        // render={todo => (
        //   <ToDoItem 
        //     key={todo.id.toString()}
        //     text={todo.text}
        //     completed={todo.complete}
        //     onComplete={() => completeTodos(todo.id)}
        //     onDelete={() => deleteTodos(todo.id)}
        //   />
        // )}
      >
        {todo => (
          <ToDoItem 
            key={todo.id.toString()}
            text={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodos(todo.id)}
            onDelete={() => deleteTodos(todo.id)}
          />
        )}
      </ToDoList>

      {!!openModal && (
        <Modal>
          <ToDoForm 
            addToDos={addToDos}
            setOpenModal={setOpenModal}
          />
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

export default App;
