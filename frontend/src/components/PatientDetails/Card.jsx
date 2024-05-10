import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Card = ({_id,firstName,lastName,age,gender}) => {

    const [name, setName] = useState(firstName);
    const [Fav, setFav] = useState(false);
    
    if(name === undefined)      setName("NA");
    const shortenId = (id) => {
      return id.substring(0, 6); // Change 6 to the desired length
  };
    function ClickHandler(){
        console.log(`Clicked on ${_id}`);
    }

    function changeHandler(){
      setFav(!Fav);
    }

  return (
    <div className=' w-full bg-slate-200 h-fit p-2 rounded-md hover:shadow-md' >
        <div onClick={ClickHandler}>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Id: </span>{shortenId(_id)}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Name: </span>{name} {lastName}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Age: </span>{age}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Gender: </span>{gender}</p>
        </div>
        <div className='flex flex-row items-end justify-end text-gray-600 gap-3 mr-2'>
          <MdDelete className=' size-10 hover:text-black' />
          {/* {
            Fav === false ? 
            (<FaRegStar className='size-10 hover:text-black' onClick={changeHandler}/>) : 
            (<FaStar className='size-10 text-black' onClick={changeHandler}/>)
          } */}
        </div>
      
    </div>
  )
}

export default Card
