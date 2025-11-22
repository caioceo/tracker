import { pgTable, serial, varchar, integer, date, real, pgEnum } from 'drizzle-orm/pg-core';

export const muscles = pgEnum('muscles', [
    'chest',
    'back',
    'biceps',
    'triceps',
    'shoulders',
    'legs',
    'glutes',
    'abs',
    'calves',
    'forearms'
]);

export const exercises = pgTable('exercises', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 30}).notNull(),
    focusOn: muscles('focusOn').notNull(),
});

export const dailyWorkout = pgTable('dailyWorkout', {
    id: serial('id').primaryKey(),
    userId: integer('user_id'),
    date: date('date').notNull()
});

export const workoutExercises = pgTable('workoutExercises', {
    id: serial('id').primaryKey(),
    exercisesId: integer('exercises_id').references(() => exercises.id),
    dailyWorkoutId: integer('dailyWorkout_id').references(() => dailyWorkout.id),
    position: integer('position').notNull()
});

export const exerciseSeries = pgTable('exerciseSeries', {
   id: serial('id').primaryKey(),
   reps: integer('reps').notNull().default(0),
   weight: real('weight').notNull().default(0.0),
   workoutExercisesId: integer('workoutExercises_id').references(() => workoutExercises.id, {onDelete: "cascade"})
});