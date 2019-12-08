import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import API from '../../utils/API';
import Job from '../components/Job';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const forHire = await API.get('/forhire.json');

    const fetchedJobs = forHire.data.data.children
      .map(listing => listing.data)
      .filter(word => word.title.toLowerCase().includes('hiring'));

    setJobs(fetchedJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="flex flex-wrap justify-between sm:w-full md:w-full">
      {jobs.map(job => (
        <Job author={job.author} key={uuid()} title={job.title} url={job.url} />
      ))}
    </div>
  );
};

export default JobsList;
