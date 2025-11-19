import { pgTable, integer, date, real, serial } from "drizzle-orm/pg-core";
import { goal } from "./goal";
import { users } from "./users";

export const history = pgTable('history', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id).notNull(),
    height: integer('height').default(170).notNull(),
    weight: real('weight').default(70).notNull(),
    registerDate: date('registerDate').notNull(),
    goal: goal("goal").notNull().default('maintenance')
})