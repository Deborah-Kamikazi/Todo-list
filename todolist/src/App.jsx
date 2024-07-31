import "./App.css";
import { useState } from "react";
import Cards from "./Cards";
import {nanoid} from "nanoid";  
// import Cards from './Cards'


function App() {
  const [formData, setformData] = useState("");
  const [displyed, setdisplyed] = useState([]);
  function handle(event) {
    setformData(event.target.value);
  }

  const addTodo = () => {
    let todo = {
      ids: nanoid(),
      text: formData,
      completed:false,
    };
    let newTodos = [todo, ...displyed];
    setdisplyed(newTodos);
    setformData("");
  };
  function remove(id) {    
    setdisplyed(displyed.filter((todo) => todo.ids !== id));
  }
  function complete(id){
    setdisplyed(displyed.map((todo) => todo.ids === id? {...todo, completed: !todo.completed } : todo));
    console.log("completed");
  }

  return (
    <>
      <section className="flex flex-col items-center ">
        <p className="text-5xl font-bold text-gray-300">todos</p>
        <input
          type="text"
          placeholder=" Add todo.."
          name="todo"
          onChange={handle}
          value={formData}
          className=" w-[40rem] h-14 rounded-xl drop-shadow-lg relative"
        />
        <button
          className="fa-solid fa-plus absolute top-16 right-[30rem] bg-green-400 text-white h-6 w-6 rounded-full "
          onClick={addTodo}
        ></button>
        {displyed.map((todo) => (
          <Cards
            key={todo.id}
            text={todo.text}
            remove={() => remove(todo.ids)}
            complete={() => complete(todo.ids)}
            className={todo.completed ? "underlined" : ""}
          />
        ))}
      </section>
    </>
  );
}

export default App;
