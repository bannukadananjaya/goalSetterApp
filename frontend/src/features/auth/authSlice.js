import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
//Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))


const initialState= {
  user:null,
  isError:false,
  isSucces:false,
  isLoading: false,
  message:''
}

export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    reset: (state) => {
      state.isLoading =false
      state.isSucces = false
      state.isError = false
      state.message = ""
    },
    extraReducers: () => {}
  }
})

//Register User
export const register = createAsyncThunk('auth/register',async(user,thunkAPI)=>{
  try {
    return await authService.register(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message 
  }
})

export const{result} = authSlice.actions
export default authSlice.reducer