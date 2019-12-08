import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import API from '../utils/API';
import JobItem from './Item';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const forHire = await API.get('/forhire.json?limit=100&count=100');

    const fetchedJobs = forHire.data.data.children
      .map(listing => listing.data)
      .filter(word => word.title.toLowerCase().includes('hiring'));

    setJobs(fetchedJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Title</th>
          <th className="w-1/4 px-4 py-2">Author</th>
          <th className="w-1/4 px-4 py-2">URL</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, i) => {
          function isEven(n) {
            return n % 2 === 0;
          }

          return (
            <JobItem
              author={job.author}
              isStripped={isEven(i)}
              key={uuid()}
              title={job.title}
              url={job.url}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default JobsList;
