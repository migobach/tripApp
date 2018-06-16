import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const NavBar = () => (
  <Fragment>
    <NavLink to="/">Home</NavLink>
  </Fragment>
)

export default withRouter(NavBar)