import { meals }from "./meals"
import { taco } from "./taco"
import { integer, real, serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const mealFood = pgTable("mealFoods", {
    id: serial('id').primaryKey(),
    tacoId: integer('taco_id').references(()=> taco.id),
    mealsId: integer('meals_id').references(()=> meals.id),
    amount: real('amout').notNull().default(0.0)    
})