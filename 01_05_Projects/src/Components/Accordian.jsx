import React, { useState } from 'react'
import accordian_item from "../assets/accordian_item.js"

const Accordian = () => {
    
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen( open == index ? null : index)
  }

  return (
    <div>
      <h1>Accordian</h1>
      <div className='w-full'>
        {accordian_item.map((item, index) => 
        <div key={index} className='bg-amber-200 p-4 w-full'>
          <button onClick={() => handleToggle(index)} className=' text-start'>{item.title}</button>
          {
            open === index && <div className='bg-amber-100 p-2'>{item.code}</div>
          }
        </div>)}
      </div>
    </div>
  )
}

export default Accordian;