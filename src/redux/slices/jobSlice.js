import { createSlice } from '@reduxjs/toolkit'

import { getNextBatch } from '../../api'

export const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    value: getNextBatch(0), 
    hasMore : true
  },
  reducers: {
    add : (state, action)=>{
        const nextJobs = getNextBatch(action.payload);
        if(nextJobs.length === 0) state.hasMore = false;
        state.value = state.value.concat(nextJobs);
    }
  }
})

// Action creators are generated for each case reducer function
export const { add } = jobSlice.actions

export default jobSlice.reducer