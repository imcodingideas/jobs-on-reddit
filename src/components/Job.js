import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from '@reach/router'

const Job = props => {
  const { key, title, author, url } = props

  return (
    <Card key={key}>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>By - {author}</CardText>

        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer" role="button">
          Job on Reddit
        </a>
      </CardBody>
    </Card>
  )
}

Job.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Job
