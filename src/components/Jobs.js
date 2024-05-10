import React, { useState } from 'react'
import JobCard from './JobCard'
import { Grid, styled } from '@mui/material';

import { getNextBatch } from '../api'

const GridContainer = styled(Grid)(({ theme }) => ({
    width:'80vw',
    margin: '2px',
    [theme.breakpoints.down('md')]: {
        width:'90vw'
    }
}));

function Jobs() {

    const [ count, setCount ] = useState(1);
    const [ jobs, setJobs ] = useState(getNextBatch(0));

  return (
    <GridContainer container spacing={4} >
        {
            jobs.map(job =>(
                <Grid item xs={12} sm={12} md={6} lg={4} >
                    <JobCard job={job} key={job.jdUid} />
                </Grid>
            ))
        }
    </GridContainer>
  )
}

export default Jobs