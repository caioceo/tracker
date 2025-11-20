import { pgTable } from 'drizzle-orm/pg-core'
import { date, serial, real, integer } from 'drizzle-orm/pg-core'
import { users } from "../user/users"
import { meals } from './meals'

export const dailyDiet = pgTable('dailyDiet', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id, {onDelete: "cascade"}).notNull(),
    registerDate: date('registerDate').notNull(),
    protein: real('protein').notNull().default(0.0),
    carbs: real("carbs").notNull().default(0.0),
    lips: real("lips").notNull().default(0.0)
})