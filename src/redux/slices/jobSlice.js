import { createSlice } from '@reduxjs/toolkit'

import { getNextBatch } from '../../api'

const initialState = {
  value: getNextBatch(0), 
  hasMore : true
}

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    add : (state, action)=>{
        const nextJobs = getNextBatch(action.payload);
        if(nextJobs.length === 0) state.hasMore = false;
        state.value = state.value.concat(nextJobs);
    },
    initial : () => initialState
  }
})

// Action creators are generated for each case reducer function
export const { add, initial } = jobSlice.actions

export default jobSlice.reducer