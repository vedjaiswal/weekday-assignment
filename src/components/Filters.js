import * as React from 'react';
import { useEffect, useState } from 'react';
import {TextField, Autocomplete, styled} from '@mui/material';

import { roles, experience, location, remote, minBasePay, techStack } from '../constants/filterData';

import MultiInputField from './MultiInputField';
import SingleInputField from './SingleInputField';

import { useSelector } from 'react-redux';

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

const initialJobFilters = {
  role : [],
  experience : null,
  remote : [],
  techStack : [],
  location : [],
  minBasePay : null,
  companyName : null
}

export default function Filters() {

  const [ filteredJobs, setFilteredJobs ] = useState(null)
  const [ filters, setFilters ] = useState(initialJobFilters)
  
  const jobs = useSelector(state => state.jobs.value);

   const onFilterChange = (key, value) =>{
     setFilters({...filters, [key]:value})
     console.log(filters)
   }

    // useEffect(()=>{
    //   setFilteredJobs(jobs);
    // }, jobs)

  return (
    <MainContainer>       
      <MultiInputField name={roles} onFilterChange={onFilterChange} keyName='role' width={300} label="Roles"/>
      <SingleInputField name={experience} onFilterChange={onFilterChange} keyName='experience' width={150} label="Experience" />
      <MultiInputField name={remote} onFilterChange={onFilterChange} keyName='remote' width={150} label='Remote'/>
      <MultiInputField name={location} onFilterChange={onFilterChange} keyName='location' width={150} label="Location" />
      <MultiInputField name={techStack} onFilterChange={onFilterChange} keyName='techStack' width={150} label='TechStack' />
      <SingleInputField name={minBasePay} onFilterChange={onFilterChange} keyName='minBasePay' width={150} label="Min Base Pay" />
      <TextField sx={{width: 300}} value={filters.companyName} name='companyName' onChange={(event) => onFilterChange(event.target.name, event.target.value)} label="Search by Company name" variant="outlined" />
    </MainContainer>
  );
}
