import React, { useState } from 'react'

const Counter = () => {

  const [history, setHistory] = useState([0])

  return (
    <div className='bg-red-500'>
      <h1>Counter with Undo/Redo</h1>
    </div>
  )
}

export default Counter