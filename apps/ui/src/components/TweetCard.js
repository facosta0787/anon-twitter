import React from 'react'

function TweetCard(props) {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: true,
    timeZone: 'America/Bogota'
  }
  const date = new Date(props.tweet.createdAt)
  const createdAt = new Intl.DateTimeFormat('es-CO', options).format(date)
  return (
    <div className="card" style={{ marginBottom: 10, backgroundColor: 'var(--bg-color)'}}>
      <div className="card-content" style={{ color: 'var(--white)'}}>
        <p className="title">{props.tweet.tweet}</p>
        <p className="subtitle">Fecha publicación: {createdAt}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            Ver en{' '}
            <a href="https://twitter.com/codinghorror/status/506010907021828096">
              Twitter
            </a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            Compartir en <a href="#">Facebook</a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default TweetCard
