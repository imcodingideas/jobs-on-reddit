import React, { Fragment } from 'react'

const Job = props => (
  <Fragment>
    <p>
      <h5>{props.title}</h5> - by {props.author}
    </p>
    <p>
      <a href={props.url}>{props.title}</a>
    </p>
    <hr />
  </Fragment>
)

export default Job
