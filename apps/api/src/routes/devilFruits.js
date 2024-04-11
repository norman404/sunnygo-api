const express = require('express')

const devilFruitsRouter = express.Router()
const devilFruits = require('../controllers/devilFruits')

devilFruitsRouter.get('/', devilFruits.getAll)
devilFruitsRouter.get('/:id', devilFruits.getById)

module.exports = devilFruitsRouter
