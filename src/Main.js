import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import Menu from './Menu'

const Main = props => {
  const { children } = props

  return (
    <Fragment>
      <Menu />

      <Container className="py-3">{children}</Container>
    </Fragment>
  )
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Main
