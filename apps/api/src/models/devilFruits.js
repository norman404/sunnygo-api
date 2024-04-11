const { integer, text, sqliteTable } = require('drizzle-orm/sqlite-core')

const devilFruit = sqliteTable('devil_fruit', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  type: text('type').notNull(),
  description: text('description')
})

module.exports = devilFruit
