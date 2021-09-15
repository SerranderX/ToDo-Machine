import React from "react";
import "./ToDoLoading.css";

function ToDoLoading() {
  
  return (
    <React.Fragment>
      <li className="ToDoItem_Skeleton" >
          <span className="Icon_Skeleton Icon-check_Skeleton"></span>
          <p></p>
          <span className="Icon_Skeleton Icon-delete_Skeleton"></span>
      </li>
      <li className="ToDoItem_Skeleton ToDoItem_Skeleton2" >
          <span className="Icon_Skeleton Icon-check_Skeleton"></span>
          <p></p>
          <span className="Icon_Skeleton Icon-delete_Skeleton"></span>
      </li>
      <li className="ToDoItem_Skeleton ToDoItem_Skeleton3" >
          <span className="Icon_Skeleton Icon-check_Skeleton"></span>
          <p></p>
          <span className="Icon_Skeleton Icon-delete_Skeleton"></span>
      </li>
    </React.Fragment>
  );
}

export { ToDoLoading };
