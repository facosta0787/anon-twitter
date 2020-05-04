import React, { useState, useEffect } from 'react'
import Header from './Header'
import TweetCard from './TweetCard'
import Button from './Button'

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

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (textTweet === '') return false

    const response = await fetch('http://localhost:3000/api/tweets', {
      method: 'POST',
      body: JSON.stringify({ tweet: textTweet }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    setTweets([data, ...tweets])

    return setTextTweet('')
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="container-tweets">
          <form onSubmit={handleFormSubmit} style={{ marginBottom: 10 }}>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea is-link"
                  placeholder="Haz tu tweet aqui!"
                  value={textTweet}
                  onChange={(event) => {
                    event.stopPropagation()
                    setTextTweet(event.target.value)
                  }}
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button type="submit">tweet !</Button>
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
      </div>
    </React.Fragment>
  )
}

export default App
