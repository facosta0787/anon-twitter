import React from 'react'
import formatDistance from 'date-fns/formatDistance'
import es from 'date-fns/locale/es'

function TweetCard(props) {
  const date = new Date(props.tweet.createdAt)
  const now = new Date()
  let created = formatDistance(date, now, {
    locale: es
  })

  created = created.replace(/alrededor de/i, 'hace')

  return (
    <div className="card" style={styles.card}>
      <div className="card-content" style={styles.cardContent}>
        <p className="title">{props.tweet.tweet}</p>
        <p className="subtitle" style={styles.subtitle}>{created}</p>
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

const styles = {
  card: {
    marginBottom: 10,
    backgroundColor: 'var(--bg-color)',
  },
  cardContent: {
    color: 'var(--white)'
  },
  subtitle: {
    textTransform: 'uppercase'
  }
}

export default TweetCard
