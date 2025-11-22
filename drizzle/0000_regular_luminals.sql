CREATE TYPE "public"."goal" AS ENUM('lose', 'gain', 'maintenance');--> statement-breakpoint
CREATE TYPE "public"."sex" AS ENUM('male', 'female', 'undefined');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('enabled', 'disabled');--> statement-breakpoint
CREATE TYPE "public"."muscles" AS ENUM('chest', 'back', 'biceps', 'triceps', 'shoulders', 'legs', 'glutes', 'abs', 'calves', 'forearms');--> statement-breakpoint
CREATE TABLE "history" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"height" integer DEFAULT 170 NOT NULL,
	"weight" real DEFAULT 70 NOT NULL,
	"registerDate" date NOT NULL,
	"goal" "goal" DEFAULT 'maintenance' NOT NULL,
	"status" "status" DEFAULT 'enabled' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"sex" "sex" DEFAULT 'undefined' NOT NULL,
	"birth" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "dailyWorkout" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exerciseSeries" (
	"id" serial PRIMARY KEY NOT NULL,
	"reps" integer DEFAULT 0 NOT NULL,
	"weight" real DEFAULT 0 NOT NULL,
	"workoutExercises_id" integer
);
--> statement-breakpoint
CREATE TABLE "exercises" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(30) NOT NULL,
	"focusOn" "muscles" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workoutExercises" (
	"id" serial PRIMARY KEY NOT NULL,
	"exercises_id" integer,
	"dailyWorkout_id" integer,
	"position" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "aminoAacids" (
	"id" serial PRIMARY KEY NOT NULL,
	"food_id" integer NOT NULL,
	"tryptophan" real,
	"threonine" real,
	"isoleucine" real,
	"leucine" real,
	"lysine" real,
	"methionine" real,
	"cystine" real,
	"phenylalanine" real,
	"tyrosine" real,
	"valine" real,
	"arginine" real,
	"histidine" real,
	"alanine" real,
	"aspartic_acid" real,
	"glutamic_acid" real,
	"glycine" real,
	"proline" real,
	"serine" real
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "fatty_acids" (
	"id" integer PRIMARY KEY NOT NULL,
	"food_id" integer NOT NULL,
	"saturated" real,
	"monounsaturated" real,
	"polyunsaturated" real,
	"12_0" real,
	"14_0" real,
	"16_0" real,
	"18_0" real,
	"20_0" real,
	"22_0" real,
	"24_0" real,
	"14_1" real,
	"16_1" real,
	"18_1" real,
	"20_1" real,
	"18_2n6" real,
	"18_3n3" real,
	"20_4" real,
	"20_5" real,
	"22_5" real,
	"22_6" real,
	"18_1t" real,
	"18_2t" real
);
--> statement-breakpoint
CREATE TABLE "food" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"categories_id" integer
);
--> statement-breakpoint
CREATE TABLE "nutrients" (
	"id" integer PRIMARY KEY NOT NULL,
	"food_id" integer,
	"moisture" real,
	"kcal" integer NOT NULL,
	"kJ" integer,
	"protein" real NOT NULL,
	"lipids" real NOT NULL,
	"cholesterol" real,
	"carbohydrates" real NOT NULL,
	"dietary_fiber" real,
	"ash" real,
	"calcium" real,
	"magnesium" real,
	"manganese" real,
	"phosphorus" real,
	"iron" real,
	"sodium" real,
	"potassium" real,
	"copper" real,
	"zinc" real,
	"retinol" real,
	"re" real,
	"rae" real,
	"thiamin" real,
	"riboflavin" real,
	"pyridoxine" real,
	"niacin" real,
	"vitamin_c" real
);
--> statement-breakpoint
CREATE TABLE "dailyDiet" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"registerDate" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "mealFoods" (
	"id" serial PRIMARY KEY NOT NULL,
	"food_id" integer,
	"meals_id" integer,
	"amount" real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meals" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL,
	"daily_id" integer
);
--> statement-breakpoint
ALTER TABLE "history" ADD CONSTRAINT "history_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exerciseSeries" ADD CONSTRAINT "exerciseSeries_workoutExercises_id_workoutExercises_id_fk" FOREIGN KEY ("workoutExercises_id") REFERENCES "public"."workoutExercises"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workoutExercises" ADD CONSTRAINT "workoutExercises_exercises_id_exercises_id_fk" FOREIGN KEY ("exercises_id") REFERENCES "public"."exercises"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workoutExercises" ADD CONSTRAINT "workoutExercises_dailyWorkout_id_dailyWorkout_id_fk" FOREIGN KEY ("dailyWorkout_id") REFERENCES "public"."dailyWorkout"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "aminoAacids" ADD CONSTRAINT "aminoAacids_food_id_food_id_fk" FOREIGN KEY ("food_id") REFERENCES "public"."food"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fatty_acids" ADD CONSTRAINT "fatty_acids_food_id_food_id_fk" FOREIGN KEY ("food_id") REFERENCES "public"."food"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "food" ADD CONSTRAINT "food_categories_id_categories_id_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "nutrients" ADD CONSTRAINT "nutrients_food_id_food_id_fk" FOREIGN KEY ("food_id") REFERENCES "public"."food"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mealFoods" ADD CONSTRAINT "mealFoods_meals_id_meals_id_fk" FOREIGN KEY ("meals_id") REFERENCES "public"."meals"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meals" ADD CONSTRAINT "meals_daily_id_dailyDiet_id_fk" FOREIGN KEY ("daily_id") REFERENCES "public"."dailyDiet"("id") ON DELETE cascade ON UPDATE no action;