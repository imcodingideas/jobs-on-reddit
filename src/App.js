import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Router } from '@reach/router'

import Main from './Main'
import JobsList from './JobsList'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Main path="/">
          <JobsList path="/" />
        </Main>
      </Router>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
