'use strict'

const db = require('@anon-twitter/db')

async function getAll(req, res) {
  const tweets = await db.Tweet.findAll({
    order: [
      ['created_at', 'DESC']
    ]
  })
  return res.status(200).json({
    status: 200,
    data: tweets
  })
}

async function create(req, res) {
  const { tweet } = req.body
  const createdTweet = await db.Tweet.create({
    tweet
  })
  res.json(createdTweet)
}

module.exports = {
  getAll,
  create
}