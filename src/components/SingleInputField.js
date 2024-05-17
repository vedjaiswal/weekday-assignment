import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

function SingleInputField({name, onFilterChange, keyName, width, label}) {
  return (
    <Autocomplete
        disablePortal
        options={name}
        sx={{ width: width }}
        onChange={(event, value) => {onFilterChange(keyName, value)}}
        renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

export default SingleInputField