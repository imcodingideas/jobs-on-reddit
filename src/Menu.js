import React, { Component, Fragment } from 'react'
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'

export default class Menu extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    const { isOpen } = this.state

    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    return (
      <Fragment>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Reddit [HIRING] Jobs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </Fragment>
    )
  }
}
