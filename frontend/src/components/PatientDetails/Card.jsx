import React, { useState } from 'react'

const Card = ({id,name,age,gender}) => {

    const [Name, setName] = useState(name);

    if(Name === undefined)      setName("NA");

    function ClickHandler(){
        console.log(`Clicked on ${id}`);

    }

  return (
    <div>
        <div className=' w-full bg-slate-200 h-fit p-2 rounded-md hover:shadow-md' onClick={ClickHandler}>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Id: </span>{id}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Name: </span>{Name}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Age: </span>{age}</p>
            <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Gender: </span>{gender}</p>
        </div>
      
    </div>
  )
}

export default Card
