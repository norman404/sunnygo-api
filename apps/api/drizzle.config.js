require('dotenv').config()

const config = {
  schema: './src/models/index.js',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL,
    authToken: process.env.TURSO_AUTH_TOKEN_EDITS
  }
}

module.exports = config
