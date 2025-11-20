import { pgTable, integer, serial, real } from "drizzle-orm/pg-core"
import { exercises } from "./exercises"
import { dailyWorkout } from "./dailyWorkout"

export const workoutExercises = pgTable('workoutExercises',{
    id: serial('id').primaryKey(),
    exercisesId: integer('exercises_id').references(()=> exercises.id),
    dailyWorkoutId: integer('dailyWorkout_id').references(()=> dailyWorkout.id),
    position: integer('position').notNull()
})