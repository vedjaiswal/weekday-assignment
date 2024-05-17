import React from 'react'
import { Autocomplete, TextField } from '@mui/material';

function MultiInputField({name, onFilterChange, keyName, width, label}) {


  return (
    <Autocomplete
        multiple
        sx={{minWidth:width}}
        options={name}
      groupBy={(option) => option.role || null}
        getOptionLabel={(option) => option.title || option}
        onChange={(event, value) => {onFilterChange(keyName, value)}}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label= {label}
            name = {keyName}
          />
        )}
      />
  )
}

export default MultiInputField