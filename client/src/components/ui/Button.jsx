import React from 'react'

const btnType = {
    primary: "rounded-md px-6 py-2 bg-red-500",
    secondary:"rounded-md px-6 py-2 bg-yellow-300"
}

const Button = ({text, type, icon}) => {
  return (
    <div className={`${btnType[type]} flex gap-2 justify-center items-center`}>
        {text} {icon}
    </div>
  )
}

export default Button