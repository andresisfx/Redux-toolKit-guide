import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter:10
  },
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += action.payload??1;
    },
    decrement: (state) => {
      state.counter -= 1
    },
    reset:(state)=>{
      state.counter=initialState.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,reset } = counterSlice.actions

