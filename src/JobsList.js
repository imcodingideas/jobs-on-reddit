import React, { Component, Fragment } from 'react'
import Job from './Job'

const JOB_LIST_FEED = 'https://www.reddit.com/r/forhire.json'
export default class JobsList extends Component {
  state = {
    jobs: [],
  }

  componentDidMount() {
    this.fetchJobs()
  }

  fetchJobs = () => {
    fetch(JOB_LIST_FEED)
      .then(response => response.json())
      .then(response => response.data.children.map(listing => listing.data))
      .then(job => {
        this.setState({
          jobs: job,
        })
      })
  }

  render() {
    const { jobs } = this.state

    return (
      <Fragment>
        {jobs.map(job => (
          <Job author={job.author} key={job.id} title={job.title} id={job.id} url={job.url} />
        ))}
      </Fragment>
    )
  }
}
