import React, { Component } from 'react'
import { CardColumns, Col, Row } from 'reactstrap'
import Job from '../components/Job'

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
      .then(el => el.filter(word => word.title.toLowerCase().includes('hiring')))
      .then(job => {
        this.setState({
          jobs: job,
        })
      })
  }

  render() {
    const { jobs } = this.state

    return (
      <Row>
        <Col md={12}>
          <CardColumns>
            {jobs.map(job => (
              <Job author={job.author} key={job.id} title={job.title} url={job.url} />
            ))}
          </CardColumns>
        </Col>
      </Row>
    )
  }
}
