import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

export default class Main extends Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <Menu />
        <div className="app-body">
          <div className="container py-3">{children}</div>
        </div>
      </Fragment>
    )
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
}
