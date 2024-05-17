import * as React from 'react';
import {TextField, styled} from '@mui/material';

import { roles, experience, location, remote, minBasePay, techStack } from '../constants/filterData';

import MultiInputField from './MultiInputField';
import SingleInputField from './SingleInputField';

import { useSelector, useDispatch } from 'react-redux';
import { filterUpdate } from '../redux/slices/filtersSlice';

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

  const filters = useSelector(state => state.filters.value);
  const dispatch = useDispatch();

   const onFilterChange = (key, value) =>{
     dispatch(filterUpdate({key : key, value : value}));
   }

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
