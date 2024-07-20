import React from 'react'
import { useState,useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
const Home = () => {
  const [value, setValue] = useState('')
  let navigate=useNavigate()
  const handlesubmit=useCallback(()=>{
    if(value){
      navigate(`/room/${value}`)
    }
},[navigate,value])
  return (
    <div id='d1'>
        <input id='i1' type="text" value={value} onChange={(e)=>setValue(e.target.value)}  placeholder='Enter meet id'/>
        <button id='b1' onClick={handlesubmit}  >Create Meeting</button>
    </div>
  )
}

export default Home