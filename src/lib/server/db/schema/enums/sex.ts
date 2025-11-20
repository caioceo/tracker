import { pgEnum } from "drizzle-orm/pg-core"

export const sex = pgEnum("sex", ["male", "female", "undefined"])