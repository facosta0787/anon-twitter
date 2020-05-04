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
        <div className="navbar-brand" style={styles.brand}>
          <a className="navbar-item" href="http://localhost:5000">
            <i className="far fa-comments" style={styles.icon}></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  brand: {
    justifyContent: 'center',
  },
  icon: {
    fontSize: 25,
  }
}

export default Header

