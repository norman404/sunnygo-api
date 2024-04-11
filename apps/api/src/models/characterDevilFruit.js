const { integer, sqliteTable } = require('drizzle-orm/sqlite-core')
const character = require('./characterModels')
const devilFruit = require('./devilFruits')

const characterDevilFruit = sqliteTable('characterDevilFruit', {
  id: integer('id').primaryKey(),
  characterId: integer('characterId').references(() => character.id),
  devilFruitId: integer('devilFruitId').references(() => devilFruit.id)
})

module.exports = characterDevilFruit
