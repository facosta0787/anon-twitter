'use strict'

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const db = require('database')

const tweets = require('./tweets/router')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use('/api', tweets)

db.sequelize.authenticate()
  .then(() => {
    console.info('Database connected')
    if (process.env.NODE_ENV !== 'production') {
      db.sequelize.sync()
    }
  })
  .catch(() => {
    console.error('Error connecting the database')
    process.exit(1)
  })

module.exports = app
