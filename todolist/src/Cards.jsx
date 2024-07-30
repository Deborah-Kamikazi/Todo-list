function Cards(prop){

   return (
    <div className=" bg-gray-300 w-[30rem] h-[3rem] mt-4 flex items-center rounded-xl drop-shadow-lg justify-between">
       <p className="px-8">{prop.text}</p> 
       <button className="px-5"onClick={prop.remove} ><i className="fa-solid fa-trash text-red-500"></i></button> 
    </div>
   )
}
export default Cards;