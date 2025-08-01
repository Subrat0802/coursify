import React from 'react'

const InputTag = ({placeholder, className, type, value, name, onChange}) => {
  return (
    <input autocomplete="off"
    autocorrect="off"
    spellcheck="false" className={`placeholder:text-white/20 font-semibold
       text-white py-3 px-2 rounded-lg bg-[#1c1c1c] border-b-2 border-white/10 focus:outline 
       focus:outline-1 focus:outline-gray-700 ${className}`}
    placeholder={placeholder} type={type} 
    value={value}
    name={name}
    onChange={onChange}
    />
  )
}

export default InputTag