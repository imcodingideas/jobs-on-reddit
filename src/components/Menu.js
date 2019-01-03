import React, { Fragment } from 'react'
import { Navbar, Container, NavbarBrand } from 'reactstrap'

const Menu = () => (
  <Fragment>
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">Reddit [HIRING] Jobs</NavbarBrand>
      </Container>
    </Navbar>
  </Fragment>
)

export default Menu
