import React, { Component } from 'react';
import uuid from 'uuid';
import API from '../../utils/API';
import Job from '../components/Job';

export default class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.fetchJobs = this.fetchJobs.bind(this);
  }

  async componentDidMount() {
    await this.fetchJobs();
  }

  async fetchJobs() {
    try {
      const forHire = await API.get('/forhire.json');
      const jobbit = await API.get('/jobbit.json');
      const data = { ...forHire, ...jobbit };

      const jobs = data.data.data.children
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
