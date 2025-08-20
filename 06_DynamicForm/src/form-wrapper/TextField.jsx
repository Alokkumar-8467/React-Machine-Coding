import React from 'react'

const TextField = ({label,type,placeholder,value,id,name,error,disabled,readonly}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        disabled={disabled}
        readOnly={readonly}
        name={name}
        value={value}
        type={type} 
        placeholder={placeholder}

      />
    </div>
  )
}

export default TextField