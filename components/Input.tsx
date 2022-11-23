import React from 'react'

interface InputProps {
    id:string
    name:string
    label:string
    placeholder:string
}
const Input = ({id, name, label, placeholder, ...props}: InputProps) => {
  return (
    <div className='mb-3 '>
        <label className='block text-lg' htmlFor=''>{label}</label>
        <input autoComplete='off' type='text' id={id} name={name} placeholder={placeholder} className="text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md w-80 md:w-96 focus:ring-2 focus:ring-purple-500" {...props} />
    </div>
  )
}

export default Input