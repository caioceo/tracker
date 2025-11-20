import { pgTable, serial, integer, varchar, real } from "drizzle-orm/pg-core"

export const taco = pgTable("taco", {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100}).notNull(),
})