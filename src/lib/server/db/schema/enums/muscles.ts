import { pgEnum } from "drizzle-orm/pg-core"

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
