import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather, reset } from '../redux/slice/weatherSlice'

function Form() {
  const dispatch = useDispatch()
  const  { isLoading  , isError  , message} = useSelector(state => state.weather) 
  const [city , setCity] = useState('') ;

  useEffect(()=>{} , [])
  
    const handleSubmit = (e)=>{
        e.preventDefault()
       
        dispatch(getWeather(city))
    }

    return (
    <div>
        <div onSubmit={handleSubmit} className="form">
            <form action="">
                <input onChange={(e)=> setCity(e.target.value)} type="text" name='city'/>
                <input type="submit" />
            </form>
            <div className="content">
                xacxzc
            </div>
        </div>
    </div>
  )
}

export default Form