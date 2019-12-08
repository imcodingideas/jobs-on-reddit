import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';

const Main = ({ children }) => (
  <>
    <Menu />

    <div className="container mx-auto px-4">{children}</div>
  </>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
