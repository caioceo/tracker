import { pgTable, serial, integer, varchar, date, real } from 'drizzle-orm/pg-core';

export const dailyDiet = pgTable('dailyDiet', {
    id: serial('id').primaryKey(),
    userId: integer('user_id'),
    registerDate: date('registerDate').notNull(),
});

export const meals = pgTable("meals", {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 20}).notNull(),
    dailyId: integer('daily_id').references(() => dailyDiet.id, {onDelete: "cascade"})
});

export const mealFood = pgTable("mealFoods", {
    id: serial('id').primaryKey(),
    foodId: integer('food_id'),
    mealsId: integer('meals_id').references(() => meals.id),
    amount: real('amount').notNull().default(0.0)    
});
