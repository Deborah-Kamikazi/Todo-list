
import './App.css'
import {useState} from 'react'
import Cards from './Cards'
// import Cards from './Cards'
function App() {
  const[formData, setformData]= useState("")
  const [displyed,setdisplyed]= useState([])
  function handle(event){
    setformData(event.target.value)
  }
  
  const addTodo = ()=>{
    let id= 1;
    if(displyed.length>0){
      id= displyed[0].id+1
    }
    let todo ={
      id:id,
      text:formData,
      completed: false
    }
    let newTodos = [todo,...displyed]
    setdisplyed(newTodos)
    setformData("")
  }
  function remove (){
    
  }
  
  return (
    <>
    <section className='flex flex-col items-center '>
    <p className='text-5xl font-bold text-gray-300'>todos</p>
     <input type="text"
      placeholder=' Add todo..'
      name="todo"
      onChange= {handle}
      value= {formData}
      className=' w-[40rem] h-14 rounded-xl drop-shadow-lg relative'
      />
 <button className="fa-solid fa-plus absolute top-16 right-[30rem] bg-green-400 text-white h-6 w-6 rounded-full " onClick={addTodo}></button>    
     {displyed.map(todo =>(
      < Cards key={todo.id} text={todo.text} remove={remove}/>
     ))}
     
  
    </section>
       
    
    </>
  )
}

export default App
