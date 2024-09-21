import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ title: "sample todo", id: uuidv4() , isDone : false}]);
  let [newTodo, setNewTodo] = useState("");

  let addTodo = () => {
    setTodos((prevtodo) => {
      return [...prevtodo, { title: newTodo, id: uuidv4() , isDone : false }];
    });
    setNewTodo("");
  };

  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevtodo) => {
      return todos.filter((prevtodo) => prevtodo.id != id);
    });
  };

  let uperCase = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          title: todo.title.toUpperCase(),
        };
      })
    );
  };

let markDone = (id) => {
    setTodos(    todos.map((todo) => {
      if(todo.id == id){
        return {...todo , isDone : true}
      }else{
        return todo;
      }
    }));
}

  let btnstyle = {
    fontSize: "15px" 
  }

  return (
    <div>
      <h1> TO DO List </h1>
      <input
        type="text"
        style={{ height: "23px" , fontSize: "15px" }}
        onChange={updateTodo}
        value={newTodo}
      />
      <br />
      <br />
      <button onClick={addTodo}> Add Todo ! </button>
      <hr />
      <h3> All Todos </h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li style={{ marginTop: "10px", fontSize: "20px" }} key={todo.id}>
              <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}> {todo.title} </span> &nbsp; &nbsp;
              <button
                onClick={() => deleteTodo(todo.id)}
                style={btnstyle}
              >
                {" "}
                Delete{" "}
              </button> &nbsp; &nbsp; 
               <button style={btnstyle} onClick={() => markDone(todo.id)}> Mark As Done </button>
            </li>
          );
        })}
      </ul>

      <button onClick={uperCase}> UperCase All </button>
    </div>
  );
}
