import React from 'react'

function TweetCard(props) {
  return (
    <div className="card" style={{ marginBottom: 10, backgroundColor: 'var(--bg-color)'}}>
      <div className="card-content" style={{ color: 'var(--white)'}}>
        <p className="title">{props.tweet.tweet}</p>
        <p className="subtitle">Anonymous</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            View on{' '}
            <a href="https://twitter.com/codinghorror/status/506010907021828096">
              Twitter
            </a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            Share on <a href="#">Facebook</a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default TweetCard
