
import './App.css'
import {useState} from 'react'

function App() {
  const[formData, setformData]= useState("")
  const [displyed,setdisplyed]= useState("")
  function handle(event){
  setformData(event.target.value)
  }
  const handleclick = () =>{
    setdisplyed(formData)
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
 <button className="fa-solid fa-plus absolute top-16 right-[30rem] bg-green-400 text-white h-6 w-6 rounded-full " onClick={ handleclick}></button>    
    </section>
    {displyed&& 
  <div><p className='px-20'>{displyed}</p></div>}
       
    
    </>
  )
}

export default App
