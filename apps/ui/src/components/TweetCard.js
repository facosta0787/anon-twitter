import React, { useState } from 'react'
import formatDistance from 'date-fns/formatDistance'
import es from 'date-fns/locale/es'

function TweetCard(props) {
  const [like, setLike] = useState(false)
  const date = new Date(props.tweet.createdAt)
  const now = new Date()
  let created = formatDistance(date, now, {
    locale: es,
  })

  created = created.replace(/alrededor de/i, 'hace')

  return (
    <div className="card" style={styles.card}>
      <div className="card-content" style={styles.cardContent}>
        <p className="title">{props.tweet.tweet}</p>
        <p className="subtitle" style={styles.subtitle}>
          {created}
        </p>
      </div>
      <footer className="card-footer">
        <button onClick={() => setLike(!like)}>
          <i className={`${like ? 'fas' : 'far'} fa-heart`}></i>
        </button>
        <button>
          <i className="far fa-comment-dots"></i>
        </button>
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
    color: 'var(--white)',
  },
  subtitle: {
    textTransform: 'uppercase',
  },
}

export default TweetCard

// fas Solid
// far Regular
