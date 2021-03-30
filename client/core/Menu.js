import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'
import auth from '../auth/auth-helper'
import { signout } from '../auth/api-auth';

// import { Button } from 'reactstrap'


const isActive = (history, path) => {
  if (history.location.pathname == path)
    return { color: '#bef67a' }
  else
    return { color: '#ffffff' }
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return { color: '#bef67a' }
  else
    return { color: '#ffffff' }
}
const status = true

console.log(auth.isAuthenticated());
const Menu = withRouter(({ history }) => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">AGMEETING</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        <div style={{ 'position': 'absolute', 'right': '10px' }}><span style={{ 'float': 'right' }}>

          {
            !auth.isAuthenticated() && (<span>
              <Link to="/signup">
                <Button style={isActive(history, "/signup")}>Sign up
            </Button>
              </Link>
              <Link to="/signin">
                <Button style={isActive(history, "/signin")}>Sign In
            </Button>
              </Link>
            </span>)
          }
          {
            auth.isAuthenticated() && (<span>
              {auth.isAuthenticated().user.seller && (<>
                <Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>
              </>
              )}
              <Link to={"/user/" + auth.isAuthenticated().user._id}>
                <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
              </Link>
              <Button color="inherit" onClick={() => {
                auth.clearJWT(() => history.push('/'))
              }}>Sign out</Button>
            </span>)
          }
        </span></div>


        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar >

))

export default Menu