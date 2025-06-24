import React from 'react'
import { useSelector } from 'react-redux'

const Dasboard = () => {
    const token = useSelector((state) => state.token);
    console.log("DASHBOARD", token);
  return (
    <div>Dasboard</div>
  )
}

export default Dasboard