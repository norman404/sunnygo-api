const express = require('express')

const charactersRouter = express.Router()
const characters = require('../controllers/characters')

charactersRouter.get('/', characters.getAll)
charactersRouter.get('/:id', characters.getById)

module.exports = charactersRouter
