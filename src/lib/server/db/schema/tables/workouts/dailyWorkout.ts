import { pgTable, serial, integer, date } from "drizzle-orm/pg-core"
import { users } from "../user/users"

export const dailyWorkout = pgTable('dailyWorkout',{
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(()=> users.id),
    date: date('date').notNull()
})