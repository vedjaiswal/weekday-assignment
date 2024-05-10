import { getSampleJdJSON } from "./constants/jobData";

const BATCH_SIZE = 10;

export const getNextBatch = (start) => {
    start = 10*start;
    // for(let i=start; i<start + BATCH_SIZE; i++) jobs.push(getSampleJdJSON[i]);
    // return jobs
    return getSampleJdJSON().slice(start, start+BATCH_SIZE);
}