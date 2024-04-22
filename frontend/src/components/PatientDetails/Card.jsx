import React, { useState } from 'react'

const Card = ({_id,firstName,lastName,age,gender}) => {

    const [name, setName] = useState(firstName);

    if(name === undefined)      setName("NA");

    function ClickHandler(){
        console.log(`Clicked on ${_id}`);

    }

  return (
    <div>
        <div className=' w-full bg-slate-200 h-fit p-2 rounded-md hover:shadow-md' onClick={ClickHandler}>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Id: </span>{_id}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Name: </span>{name} {lastName}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Age: </span>{age}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Gender: </span>{gender}</p>
        </div>
      
    </div>
  )
}

export default Card
