const { sqliteTable, integer, text } = require('drizzle-orm/sqlite-core')

const character = sqliteTable('characters', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  affiliation: text('affiliation'),
  bounty: integer('bounty'),
  description: text('description')
})

// const characterRelation = relations(character, ({ many }) => ({
//   characterDevilFruits: many(characterDevilFruit, 'characterId')
// }))

module.exports = character
