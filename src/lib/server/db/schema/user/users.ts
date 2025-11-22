import { pgTable, serial, integer, varchar, date, real, pgEnum } from 'drizzle-orm/pg-core';


export const sex = pgEnum("sex", ["male", "female", "undefined"]);
export const goal = pgEnum('goal', ["lose", "gain", "maintenance"]);
export const status = pgEnum('status', ["enabled", "disabled"]);

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 50}).notNull(),
    email: varchar('email', {length: 255}).notNull(),
    sex: sex('sex').notNull().default("undefined"),
    birth: date('birth').notNull()
});

export const history = pgTable('history', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id, {onDelete: "cascade"}).notNull(),
    height: integer('height').default(170).notNull(),
    weight: real('weight').default(70).notNull(),
    registerDate: date('registerDate').notNull(),
    goal: goal("goal").notNull().default('maintenance'),
    status: status("status").notNull().default('enabled')
});