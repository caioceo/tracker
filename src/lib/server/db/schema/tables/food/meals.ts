import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core"
import { users } from "../user/users"
import { dailyDiet } from "./dailyDiet"

export const meals = pgTable("meals", {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 20}).notNull(),
    dailyId: integer('daily_id').references(()=> dailyDiet.id, {onDelete: "cascade"})
})