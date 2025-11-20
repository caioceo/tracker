import { pgEnum } from "drizzle-orm/pg-core";
import { text } from "stream/consumers";

export const goal = pgEnum('goal', ["lose", "gain", "maintenance"])