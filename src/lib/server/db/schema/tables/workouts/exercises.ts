import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core"
import { muscles } from "../../enums/muscles"

export const exercises = pgTable('exercises',{
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 30}).notNull(),
    focusOn: muscles('focusOn').notNull(),
})