import React, { useState } from 'react'
import JobCard from './JobCard'
import { Grid } from '@mui/material';

import { getNextBatch } from '../api'


function Jobs() {

    const [ count, setCount ] = useState(1);
    const [ jobs, setJobs ] = useState(getNextBatch(0));

  return (
    <Grid container justifyContent="space-evenly" spacing={4} >
        {
            jobs.map(job =>(
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <JobCard job={job} key={job.jdUid} />
                </Grid>
            ))
        }
    </Grid>
  )
}

export default Jobs