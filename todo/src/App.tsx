import React,{useState} from 'react';
import './App.css';

function App() {
  const [inputValue,setInputValue]=useState("");
  const [todos,setTodos]=useState<Todo[]>([]);


  type Todo={
    inputValue:string;
    id:number;
    checked: boolean;
  };
  
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setInputValue(e.target.value);
  }

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    //新しいtodo
    const newTodo:Todo={
      inputValue:inputValue,
      id:todos.length,
      checked:false,
    };

    setTodos([newTodo,...todos]);
    setInputValue("");
  }

  const handleEdit=(id:number,inputvalue:string)=>{
    const newTodos=todos.map((todo)=>{
      if(todo.id===id){
        todo.inputValue=inputvalue;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleChecked=(id:number,check:boolean)=>{
    const newTodos=todos.map((todo)=>{
      if(todo.id===id){
        todo.checked=!check;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const hadleDelete=(id:number)=>{
    const newTodos=todos.filter((todo)=>todo.id !==id);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <div>
        <h2>TODOリスト with Typesctipt</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input 
          type="text" 
          onChange={(e)=>handleChange(e)} 
          className="inputText"/>
          <input 
          type="submit" 
          value="作成" 
          className='submitButton' />
        </form>
        <ul className='todoList'>
          {todos.map((todo)=>(
            <li key={todo.id}>
              <input 
                type="text" 
                onChange={(e)=>handleEdit(todo.id,e.target.value)} 
                className="inputText" 
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input 
                type="checkbox" 
                onChange={(e)=>handleChecked(todo.id,todo.checked)}   
              />
              <button onClick={()=>hadleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
