import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'
import { Button, Grid, styled } from '@mui/material';

import { add } from '../redux/slices/jobSlice';

import { useSelector, useDispatch } from 'react-redux';

const GridContainer = styled(Grid)(({ theme }) => ({
    width:'80vw',
    margin: '2px',
    [theme.breakpoints.down('md')]: {
        width:'90vw'
    }
}));

function Jobs() {

    const [ count, setCount ] = useState(1);
    const [ totalJobs, setTotalJobs ] = useState([]);
    const [ filteredJobs, setFilteredJobs ] = useState([]);
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobs.value);
    const filters = useSelector(state => state.filters.value);

    const loadMore = () =>{
        dispatch(add(count))
        setCount(prev => prev+1);
    }

    useEffect(()=>{
        setTotalJobs(jobs)
    }, [jobs])

    useEffect(()=>{
        const filtering = totalJobs.filter(job => {
              const roleMatch = filters.role.length === 0 || filters.role.some(role => job.jobRole.toLowerCase().includes(role.title.toLowerCase()));
              const minExpMatch = !filters.experience || job.minExp >= filters.experience;
              const locationMatch = filters.location.length === 0 || filters.location.some(location => job.location.toLowerCase().includes(location.toLowerCase()));
              const techStackMatch = filters.techStack.length == 0 || filters.techStack.some(techStack => job.jobDetailsFromCompany.toLowerCase().includes(techStack.toLowerCase()))
              const minPayMatch = !filters.minBasePay || job.maxJdSalary >= parseInt(filters.minBasePay)
              const companyNameMatch = !filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase());
              const remoteMatch = filters.remote.length === 0 || filters.remote.some(remote => {
                if(remote !== 'In-office'){
                    return remote.toLowerCase() === job.location.toLowerCase();
                }
                else return true;
              })
          
              // Return true if all conditions are met
              return roleMatch && minExpMatch && locationMatch && remoteMatch && minPayMatch && techStackMatch && companyNameMatch;
            });
        setFilteredJobs(filtering)
    }, [jobs, filters])

  return (
    <GridContainer container spacing={4} >
        {
            filteredJobs.map(job =>(
                <Grid item xs={12} sm={12} md={6} lg={4} >
                    <JobCard job={job} key={job.jdUid} />
                </Grid>
            ))
        }
        <Button variant='contained' onClick={loadMore}>load</Button>
    </GridContainer>
  )
}

export default Jobs