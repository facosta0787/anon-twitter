'use strict'

const express = require('express')
const logger = require('morgan')
const app = express()

async function main () {
  app.use(logger('dev'))

  await app.listen(3000)
  console.log('Server runing on http://localhost:3000')
}

main()
