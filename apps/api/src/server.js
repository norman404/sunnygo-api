require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT

const { character, devilFruits } = require('./routes')

app.use((req, res, next) => {
  req.requestId = uuidv4()
  next()
})

morgan.token('id', (req) => req.requestId)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const morganFormat = ':id :method :url :status :response-time ms - :res[content-length]'

app.use(morgan(morganFormat))

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

app.use('/api/characters', character)
app.use('/api/devil-fruits', devilFruits)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
