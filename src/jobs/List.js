import React, { Component } from 'react';
import uuid from 'uuid';
import API from '../../utils/API';
import Job from '../components/Job';

export default class JobsList extends Component {
  state = {
    jobs: [],
  };

  async componentDidMount() {
    await this.fetchJobs();
  }

  async fetchJobs() {
    try {
      const forHire = await API.get('/forhire.json');

      const jobs = forHire.data.data.children
        .map(listing => listing.data)
        .filter(word => word.title.toLowerCase().includes('hiring'));

      this.setState({
        jobs,
      });
    } catch (e) {
      // handle error, for real later.
      console.log(e);
    }
  }

  render() {
    const { jobs } = this.state;

    return (
      <div className="flex flex-wrap justify-between sm:w-full md:w-full">
        {jobs.map(job => (
          <Job
            author={job.author}
            key={uuid()}
            title={job.title}
            url={job.url}
          />
        ))}
      </div>
    );
  }
}
