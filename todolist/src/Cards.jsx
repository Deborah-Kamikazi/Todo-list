

// eslint-disable-next-line react/prop-types
function Cards({ text, remove, complete, className }){

   return (
      <div className={`bg-gray-300 w-[30rem] h-[3rem] mt-4 flex items-center rounded-xl drop-shadow-lg justify-evenly ${className}`}>
      <input type="checkbox"  className="px-6" onClick={complete}/>
       <p className="">{text}</p> 
       <button className="px-9"onClick={remove} ><i className="fa-solid fa-trash text-red-500"></i></button> 
    </div>
   )
}
export default Cards;