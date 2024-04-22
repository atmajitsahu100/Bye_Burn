import React, { useState } from 'react'

const Card = ({id, name, image}) => {

  const [Id, setId] = useState(id);

    function clickHandler(){
      setId(id);
      console.log( `${Id} Image selected`);
    }
  return (
      <div className='flex flex-col justify-center items-center p-2 w-fit h-fit' onClick={clickHandler}>
          <label className='text-2xl font-semibold m-1 text-center'>
            <img src={image} alt='' className='w-fit h-fit rounded-md'/> 
            <input
            type='radio'
            name='image'
            id={Id}
            className=' size-6 mt-2'/>
            {name}
          </label>
      </div>
  )
}

export default Card
