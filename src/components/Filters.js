import * as React from 'react';
import {TextField, Autocomplete, styled} from '@mui/material';

import { roles, experience, location, remote, minBasePay, techStack } from '../constants/filterData';

const MainContainer = styled('div')(({ theme }) => ({
    width:'75vw',
    margin : '20px',
    display:'flex',
    flexWrap : 'wrap',
    gap : '1rem',
    [theme.breakpoints.down('md')]: {
        width:'90vw'
    }
}));

export default function Filters() {

    const [ selectedRoles, setSelectedRoles ] = React.useState([])

    const onRoleChange = (event, value)=>{
        if(value.length === 0) setSelectedRoles([]);
        else{
            setSelectedRoles(value.map(val => val.title))
        }
    }

  return (
    <MainContainer>
        {/* roles */}
      <Autocomplete
        multiple
        sx={{width:300}}
        options={roles}
        groupBy={(option) => option.role}
        getOptionLabel={(option) => option.title}
        onChange={onRoleChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Roles"
            placeholder="Roles"
          />
        )}
      />
      {/* experience */}
      <Autocomplete
        disablePortal
        options={experience}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Experience" />}
        />
        {/* remote */}
        <Autocomplete
        multiple
        sx={{width:300}}
        options={remote}
        getOptionLabel={(option) => option}
        // onChange={onRoleChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Remote"
            placeholder="Remote"
          />
        )}
      />
      {/* location */}
        <Autocomplete
        multiple
        sx={{width:300}}
        options={location}
        getOptionLabel={(option) => option}
        // onChange={onRoleChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Location"
            placeholder="Location"
          />
        )}
      />
      {/* techStack */}
        <Autocomplete
        multiple
        sx={{width:300}}
        options={techStack}
        getOptionLabel={(option) => option}
        // onChange={onRoleChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="TechStack"
            placeholder="TechStack"
          />
        )}
      />
      {/* min base pay  */}
      <Autocomplete
        disablePortal
        options={minBasePay}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Min Base Pay" />}
      />
        {/* company name  */}
      <TextField sx={{width: 300}} label="Search by Company name" variant="outlined" />

    </MainContainer>
  );
}
