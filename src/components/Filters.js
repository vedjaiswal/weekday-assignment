import * as React from 'react';
import { useEffect, useState } from 'react';
import {TextField, Autocomplete, styled} from '@mui/material';

import { roles, experience, location, remote, minBasePay, techStack } from '../constants/filterData';
import { filterByRole } from '../utils/filterFuctions';

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
   
    const [ selectedRoles, setSelectedRoles ] = useState([])
    const [ selectedExperience, setSelectedExperience ] = useState('')
    const [ selectedRemote, setSelectedRemote ] = useState([])
    const [ selectedTechStack, setSelectedTechStack ] = useState([])
    const [ selectedLocation, setSelectedLocation ] = useState([])
    const [ selectedMinBasePay, setSelectedMinBasePay ] = useState('')
    const [ selectedCompanyName, setSelectedCompanyName ] = useState([])

    const onRoleChange = (event, value)=>{
        if(value.length === 0) setSelectedRoles([]);
        else{
            setSelectedRoles(value)
        }
    }

    const onExperienceChange = (event, value) =>{
      setSelectedExperience(value)
    }

    const onRemoteChange = (event, value) =>{
        if(value.length === 0) setSelectedRoles([]);
        else{
            setSelectedRemote(value)
        }
    }

    const onLocationChange = (event, value) =>{
      if(value.length === 0) setSelectedRoles([]);
      else{
          setSelectedLocation(value)
      }
    }

    const onTechStackChange = (event, value) =>{
        if(value.length === 0) setSelectedRoles([]);
        else{
            setSelectedTechStack(value)
        }
    }

    const onMinBasePayChange = (event, value) =>{
      setSelectedMinBasePay(value)
    }

    const onCompanyNameChange = (event) =>{
      console.log('compnay')
      console.log(event.target.value)
    }


  return (
    <MainContainer>
        {/* roles */}
      <Autocomplete
        multiple
        sx={{minWidth:300, maxWidth:'80vw'}}
        options={roles}
        groupBy={(option) => option.role}
        getOptionLabel={(option) => option.title}
        onChange={onRoleChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Roles"
          />
        )}
      />
      {/* experience */}
      <Autocomplete
        disablePortal
        options={experience}
        sx={{ width: 150 }}
        onChange={onExperienceChange}
        renderInput={(params) => <TextField {...params} label="Experience" />}
        />
        {/* remote */}
        <Autocomplete
        multiple
        sx={{minWidth:300}}
        options={remote}
        getOptionLabel={(option) => option}
        onChange={onRemoteChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Remote"
          />
        )}
      />
      {/* location */}
        <Autocomplete
        multiple
        sx={{minWidth:300}}
        options={location}
        getOptionLabel={(option) => option}
        onChange={onLocationChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Location"
          />
        )}
      />
      {/* techStack */}
        <Autocomplete
        multiple
        sx={{minWidth:300}}
        options={techStack}
        getOptionLabel={(option) => option}
        onChange={onTechStackChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="TechStack"
          />
        )}
      />
      {/* min base pay  */}
      <Autocomplete
        disablePortal
        options={minBasePay}
        onChange={onMinBasePayChange}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Min Base Pay" />}
      />
        {/* company name  */}
      <TextField sx={{width: 300}} value={selectedCompanyName} onChange={onCompanyNameChange} label="Search by Company name" variant="outlined" />

    </MainContainer>
  );
}
