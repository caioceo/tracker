
import{pgTable, serial, integer, varchar} from 'drizzle-orm/pg-core'

export const users = pgTable('users',{
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 50}),
    email: varchar('email', {length: 255}).notNull()
})