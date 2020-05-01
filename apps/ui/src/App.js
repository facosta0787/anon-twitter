import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TweetCard from './components/TweetCard'

function App() {
  const [tweets, setTweets] = useState([])
  const [textTweet, setTextTweet] = useState('')

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://localhost:3000/api/tweets')
      const { data } = await response.json()
      setTweets(data)
    })()
  }, [])

  const handleFormSubmit = async event => {
    event.preventDefault()
    const response = await fetch('http://localhost:3000/api/tweets', {
      method: 'POST',
      body: JSON.stringify({ tweet: textTweet }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    setTweets([
      data,
      ...tweets
    ])

    setTextTweet('')
  }

  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">

        <form onSubmit={handleFormSubmit} style={{ marginBottom: 10 }}>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea is-link"
                placeholder="Haz tu tweet aqui!"
                value={textTweet}
                onChange={event => setTextTweet(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              style={{
                minWidth: 120,
              }}
              className="button is-link"
              type="submit"
            >
              tweet !
            </button>
          </div>
        </form>

        <section>
          <ul>
            {tweets.map((tweet) => (
              <li key={tweet.id}>
                <TweetCard tweet={tweet} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </React.Fragment>
  )
}

export default App
