import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'
import { Button, Grid, styled } from '@mui/material';

import { getNextBatch } from '../api'
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
    const dispatch = useDispatch();
    const jobState = useSelector(state => state.jobs.value);
    const [ jobs, setJobs ] = useState([]);

    const loadMore = () =>{
        dispatch(add(1))
    }

    useEffect(()=>{
        setJobs(jobState)
    }, [jobState])

  return (
    <GridContainer container spacing={4} >
        {
            jobs.map(job =>(
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