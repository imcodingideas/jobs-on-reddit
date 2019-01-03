import React, { Component, Fragment } from 'react'

import Menu from '../components/Menu'

export default class Main extends Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <Menu />
        <div className="app-body">
          <div className="container-fluid py-3">
            {children}
          </div>
        </div>
      </Fragment>
    )
  }
}
