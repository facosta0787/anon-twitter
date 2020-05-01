import React from 'react'

function Header() {
  return (
    <nav
      style={{
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
        marginBottom: 35,
        backgroundColor: 'var(--bg-color)',
      }}
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://localhost:5000">
            <i class="fab fa-twitter-square"></i>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
