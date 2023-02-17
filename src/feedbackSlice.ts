import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import axios from 'axios'
import { IFeedback } from './@types'
const initialState: IFeedback = {
  name: '',
  email: '',
  message: ''
}


export const sendMessage = createAsyncThunk<IFeedback,IFeedback>(
   'feedback/sendMessage',
   async ({ name, email, message }) => {
      const { data } = await axios.post(
        "http://localhost:3000/feedback",
        { name, email, message }
      );
      return data;
    }
 )


export const FeedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
   builder
     .addCase(sendMessage.fulfilled, (state, action) => {
       state.name = action.payload.name;
       state.email = action.payload.email;
       state.message = action.payload.message;
     })
   }
})


export const getName = (state: RootState) => state.feedback.name
export const getEmail = (state: RootState) => state.feedback.email
export const getMessage = (state: RootState) => state.feedback.message

export default FeedbackSlice;