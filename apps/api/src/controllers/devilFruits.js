const { eq } = require('drizzle-orm')
const { devilFruit } = require('../models')
const db = require('../config/db')

exports.getAll = async (req, res) => {
  const devilFruits = await db.select().from(devilFruit)
  res.json(devilFruits)
}
exports.getById = async (req, res) => {
  const { id } = req.params
  const result = await db.select().from(devilFruit).where(eq(devilFruit.id, id))
  res.json(result[0])
}
