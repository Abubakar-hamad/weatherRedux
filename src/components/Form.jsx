import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather, reset } from '../redux/slice/weatherSlice'
import {toast} from  'react-toastify'
import Spinner from './Spinner'

function Form() {
  const dispatch = useDispatch()
  const  { city ,isLoading  , isError  , message} = useSelector((state) => state.weather) 
  const [data , setData] = useState('') ;

  useEffect(()=>{
      if(isLoading){
        console.log('loading .. ' , isLoading);
         <Spinner />
    }
    
   

    if(isError){
        toast.error('city not found')
    }

    dispatch((reset()))
  } , [isLoading  ,isError  , message  , dispatch  , reset ])
  
    const handleSubmit = (e)=>{
        e.preventDefault()
       if(e.target.city.value === ''){
        return toast.error("there is no city enterd")
       }
        dispatch(getWeather(data))
    }

    return (
    <div className='container'>
        
        <div className="form">
            <form  onSubmit={handleSubmit} action="">

                <input onChange={(e)=> setData(e.target.value)} type="text" name='city'/>
                <input type="submit" value="Get" />
            </form>
            {city ? 
                  <div className="content">
                  <div className='title'> <b>Country</b><p>{city?.sys?.country}</p> </div>
                  <div className='title'> <b>Humidity</b><p>{city?.main?.humidity}</p> </div>
                  <div className='title'> <b>Temp</b><p>{city?.main?.temp}</p> </div>
                  <div className='title'> <b>Des</b><p>{city?.weather?.[0].description}</p> </div>
                </div> 
            :
            ''
            }
        </div>
    </div>
  )
}

export default Form