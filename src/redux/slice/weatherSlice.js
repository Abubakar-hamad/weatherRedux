import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const API_KEY = 'b97fc92e2718b1e22318054793143138'
const initialState  = {
    city:'' , 
    isLoading:false , 
    isSuccess:false , 
    isError:false ,
    message:''
}

export const getWeather = createAsyncThunk('wether/get' , async(payload , data  , thunkAPI) =>{
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}` , data)
        console.log(res.data);
        return res.data
    } catch (error) {
        const message = (error.message && error.response.message && error.response.data.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export const weatherSlice = createSlice({
    name:'weather' ,
    initialState ,
    reducers:{
        reset:(state)=>{
            state.city = '' ;
            state.isLoading = false ;
            state.isSuccess=false ;
            state.isError = false ;
            state.message = ''
        }
    } ,
    extraReducers:(builder)=>{
        builder 
        .addCase(getWeather.pending , (state)=>{
            state.isLoading = true
        }) 
        .addCase(getWeather.fulfilled ,(state , action)=>{
            state.isLoading = false ;
            state.isSuccess = true ;
            state.city = action.payload
        })

        .addCase(getWeather.rejected , (state , action)=>{
            state.isLoading = false ;
            state.isError = true ;
            state.message = action.payload
        })
    }
})


export const {reset} = weatherSlice.actions

export default weatherSlice.reducer