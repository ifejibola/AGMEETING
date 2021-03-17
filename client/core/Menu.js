import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from './../auth/auth-helper'
import { Button } from 'reactstrap'


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

const Menu = withRouter(({ history }) => (

  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/home"><span className="navbar-brand mb-0 h1">AGMEETING</span></a>
    </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/msignup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }

    </ul>
  </nav>

))

export default Menu