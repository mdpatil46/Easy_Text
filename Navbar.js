import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-warning bg-warning ">
  <div className="container-fluid">
    <a className="navbar-brand" herf="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" herf="/"
        color='blue'> <span className="yellow-text">Home</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" herf="/">{props.links}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" herf="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" herf="/">Action</a></li>
            <li><a className="dropdown-item" herf="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" herf="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Default Title',
    links: "set default link"
  };
  