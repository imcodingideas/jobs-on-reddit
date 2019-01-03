import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, Button, CardTitle, CardText } from 'reactstrap'

const Job = props => {
  const { key, title, author } = props

  return (
    <Card key={key}>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>By - {author}</CardText>

        <Button>Job Link</Button>
      </CardBody>
    </Card>
  )
}

Job.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Job
