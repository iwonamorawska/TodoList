import React from 'react';
import './App.css';
import Todo from './Todo'
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = React.useState([
    { 
      text: "Do Laundry",
      isCompleted:false
     },
    { text: "Clean litter box",
      isCompleted:false 
     },
    { text: "Cry",
    isCompleted:false
   }
  ]);
  const addTodo=text=>{
    const newTodos=[todos,{text}];
    setTodos(newTodos);
  };
  
  const completeTodo= index=> {
    const newTodos=[...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  };
  const removeTodo=index=> {
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
