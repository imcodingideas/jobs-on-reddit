import React from 'react';
import ReactDom from 'react-dom';
import { Router } from '@reach/router';

import Main from './container/Main';
import JobsList from './jobs/List';

import './css/tailwind.css';

const App = () => (
  <Router>
    <Main path="/">
      <JobsList path="/" />
    </Main>
  </Router>
);

ReactDom.render(<App />, document.getElementById('root'));
