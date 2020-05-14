'use strict'

const path = require('path')

module.exports = {
  development: {
    username: 'root',
    password: '62^*&6Hx87Z*8thA',
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../../storage/anon-twitter.sqlite'),
    logger: () => console.log
  },
  test: {
    username: 'root',
    password: '62^*&6Hx87Z*8thA',
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../../storage/anon-twitter.sqlite'),
    logger: () => console.log
  },
  production: {
    username: 'root',
    password: '62^*&6Hx87Z*8thA',
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../../storage/anon-twitter.sqlite'),
    logger: () => console.log
  },
}
