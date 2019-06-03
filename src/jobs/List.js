import React, { Component } from 'react';
import Job from '../components/Job';

const JOB_LIST_FEED = 'https://www.reddit.com/r/forhire.json';

export default class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.fetchJobs = this.fetchJobs.bind(this);
  }

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs() {
    fetch(JOB_LIST_FEED)
      .then(response => response.json())
      .then(response => response.data.children.map(listing => listing.data))
      .then(el =>
        el.filter(word => word.title.toLowerCase().includes('hiring'))
      )
      .then(job => {
        this.setState({
          jobs: job,
        });
      });
  }

  render() {
    const { jobs } = this.state;

    return (
      <div className="flex flex-wrap justify-between sm:w-full md:w-full">
        {jobs.map(job => (
          <Job
            author={job.author}
            key={job.id}
            title={job.title}
            url={job.url}
          />
        ))}
      </div>
    );
  }
}
