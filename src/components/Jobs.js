import React, { useEffect, useState, useRef, useCallback } from 'react'
import JobCard from './JobCard'
import Loader from './Loader';
import { Grid, styled } from '@mui/material';

import { add, initial } from '../redux/slices/jobSlice';

import { useSelector, useDispatch } from 'react-redux';

const GridContainer = styled(Grid)(({ theme }) => ({
    width:'80vw',
    marginLeft : '30px',
    [theme.breakpoints.down('md')]: {
        width:'90vw',
        margin : '0px'
    }
}));

function Jobs() {

    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobs);
    const filters = useSelector(state => state.filters.value);

    const [ hasMore, setHasMore ] = useState(jobs.hasMore)
    const [ page, setPage ] = useState(1);
    const [ filteredJobs, setFilteredJobs ] = useState([]);
    const [ loading, setLoading ] = useState(true)
    const [ filterLoading, setFilterLoading ] = useState(false)
    const observer = useRef();


    const loadMore = () =>{
        dispatch(add(page))
        setPage(prev => prev+1);
    }

    const filteringJobs = (jobs, filters)=>{
      const filtering = jobs.filter(job => {
        const roleMatch = filters.role.length === 0 || filters.role.some(role => job.jobRole.toLowerCase().includes(role.title.toLowerCase()));
        const minExpMatch = !filters.experience || job.minExp >= filters.experience;
        const locationMatch = filters.location.length === 0 || filters.location.some(location => job.location.toLowerCase().includes(location.toLowerCase()));
        const techStackMatch = filters.techStack.length === 0 || filters.techStack.some(techStack => job.jobDetailsFromCompany.toLowerCase().includes(techStack.toLowerCase()))
        const minPayMatch = !filters.minBasePay || job.maxJdSalary >= parseInt(filters.minBasePay)
        const companyNameMatch = !filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase());
        const remoteMatch = filters.remote.length === 0 || filters.remote.some(remote => {
          if(remote === 'remote'){
              return remote.toLowerCase() === job.location.toLowerCase();
          }
          else if(remote === 'In-office'){
              return job.location.toLowerCase() !== 'remote';
          }
          else return true;
        })
    
        // Return true if all conditions are met
        return roleMatch && minExpMatch && locationMatch && remoteMatch && minPayMatch && techStackMatch && companyNameMatch;
      });
      return filtering
    }

    const lastJobElementRef = useCallback(node => {
      setLoading(true);
      console.log(loading)
      const jobsLoadingTimer = setTimeout(()=>{
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore ) {
            loadMore();
          }
        });
        if (node) observer.current.observe(node);
        console.log(loading)
        setLoading(false);
      }, 3000);
      return () => clearTimeout(jobsLoadingTimer);
    }, [hasMore]);

    useEffect(()=>{
      setFilteredJobs(filteringJobs(jobs.value, filters))
    }, [jobs])

    useEffect(()=>{
      setFilterLoading(true)        
      const filterLoadingTimer = setTimeout(()=>{
        dispatch(initial());
        setPage(1);
        setHasMore(true);
        setFilteredJobs(filteringJobs(jobs.value, filters))
        setFilterLoading(false)
      }, 500);
      return () => clearTimeout(filterLoadingTimer);
    }, [filters])

  return (
    <>
     { filterLoading ? <Loader/> :
       <GridContainer container rowSpacing={4}>
          {
            filteredJobs.map((job, index) =>{
              if(filteredJobs.length === index + 1){
                return <Grid ref={lastJobElementRef} item xs={12} sm={12} md={6} lg={4} >
                          <JobCard job={job} key={job.jdUid} />
                        </Grid>
              }
              else{
                return <Grid item xs={12} sm={12} md={6} lg={4} >
                          <JobCard job={job} key={job.jdUid} />
                        </Grid>
              }
            })
          }
          { loading && <Loader/> }
        </GridContainer>
      }
    </>
  )
}

export default Jobs