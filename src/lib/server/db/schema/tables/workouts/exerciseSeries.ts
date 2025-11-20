import { pgTable, integer, real } from "drizzle-orm/pg-core"
import { workoutExercises } from "./workoutExercises"
import { serial } from "drizzle-orm/pg-core"

export const exerciseSeries = pgTable('exerciseSeries',{
   id: serial('id').primaryKey(),
   reps: integer('reps').notNull().default(0),
   weight: real('weight').notNull().default(0.0),
   workoutExercisesId: integer('workoutExercises_id').references(()=> workoutExercises.id, {onDelete: "cascade"})
})