import React from 'react'

const btnType = {
  primary: "rounded-md px-6 py-2 bg-indigo-700  hover:bg-indigo-800 text-white",
  secondary: "rounded-md px-6 py-2 bg-emerald-700  hover:bg-emerald-800 text-white",
  teritory:"border rounded-md border-white/30  py-[5px] px-3",
  forth: "rounded-md px-6 py-2 bg-emerald-700  hover:bg-emerald-800 text-white"
};


const Button = ({text, type, icon, onClick, btn, classStyle}) => {
  return (
    <button type={type} onClick={onClick} className={`${btnType[btn]} 
      flex gap-2 tracking-wide font-sans hover:scale-95 cursor-pointer font-semibold transition-all 
      duration-200 justify-center items-center ${classStyle}`} >
        {text} {icon}
    </button>
  )
}

export default Button