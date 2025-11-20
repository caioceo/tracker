
import{pgTable, serial, integer, varchar} from 'drizzle-orm/pg-core'
import { sex } from '../../enums/sex'
import { date } from 'drizzle-orm/pg-core'

export const users = pgTable('users',{
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 50}).notNull(),
    email: varchar('email', {length: 255}).notNull(),
    sex: sex('sex').notNull().default("undefined"),
    birth: date('birth').notNull()
})