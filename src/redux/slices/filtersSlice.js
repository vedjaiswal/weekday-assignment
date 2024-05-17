import { createSlice } from '@reduxjs/toolkit'

const initialJobFilters = {
    role : [],
    experience : null,
    remote : [],
    techStack : [],
    location : [],
    minBasePay : null,
    companyName : null
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    value: initialJobFilters
  },
  reducers: {
    filterUpdate : (state, action)=>{
        state.value = { ...state.value, [action.payload.key] : action.payload.value}
    }
  }
})

// Action creators are generated for each case reducer function
export const { filterUpdate } = filtersSlice.actions

export default filtersSlice.reducer