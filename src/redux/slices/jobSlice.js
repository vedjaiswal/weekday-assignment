import { createSlice } from '@reduxjs/toolkit'

import { getNextBatch } from '../../api'

export const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    value: getNextBatch(0)
  },
  reducers: {
    add : (state, action)=>{
        state.value = state.value.concat(getNextBatch(action.payload))
    }
  }
})

// Action creators are generated for each case reducer function
export const { add } = jobSlice.actions

export default jobSlice.reducer