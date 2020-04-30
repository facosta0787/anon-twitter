'use strict'

const router = require('express').Router()
const service = require('./service')

router.get('/tweets', service.getAll)
router.post('/tweets', service.create)

module.exports = router