const { eq } = require('drizzle-orm')
const { character } = require('../models')
const db = require('../config/db')

exports.getAll = async (req, res) => {
  const characters = await db.select().from(character)
  res.json(characters)
}
exports.getById = async (req, res) => {
  const { id } = req.params
  const result = await db.select().from(character).where(eq(character.id, id))
  res.json(result[0])
}
