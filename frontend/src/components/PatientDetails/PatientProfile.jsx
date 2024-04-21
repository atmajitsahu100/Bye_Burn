import React from 'react'

const PatientProfile = () => {
  return (
    <div>
        <div>
            {/* left part */}
            
            <div  className=' w-full bg-slate-200 h-fit p-2 rounded-md hover:shadow-md' >
                <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Id: </span> 1 </p>
                <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Patient Name: </span> ABC </p>
                <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Age: </span> 20 </p>
                <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Gender: </span> M </p>
                <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Weight: </span> 63 </p>
                <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Contact: </span> 9234802085 </p>
                <p className=' text-2xl text-gray-600'><span className=' font-bold text-black'>Grade: </span> Medium </p>
            </div>

            {/* right part */}
            <div>
                {/* for image */}
                <div>
                    hello
                </div> 

                {/* for buttons (edit, preview, upload) */}
                <div>
                    <button>Preview</button>
                    <button>Edit</button>
                    <button>Update</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientProfile