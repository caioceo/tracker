import { pgTable, serial, integer, varchar, real } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull()
});

export const food = pgTable('food', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    categoriesId: integer('categories_id').references(() => categories.id)
});

export const nutrients = pgTable("nutrients", {
    id: integer("id").primaryKey(),
    foodId: integer("food_id").references(() => food.id),
    
    moisture: real("moisture"),
    kcal: integer("kcal").notNull(),
    kJ: integer("kJ"),
    protein: real("protein").notNull(),
    lipids: real("lipids").notNull(),
    cholesterol: real("cholesterol"),
    carbohydrates: real("carbohydrates").notNull(),
    dietaryFiber: real("dietary_fiber"),
    ash: real("ash"),
    
    calcium: real("calcium"),
    magnesium: real("magnesium"),
    manganese: real("manganese"),
    phosphorus: real("phosphorus"),
    iron: real("iron"),
    sodium: real("sodium"),
    potassium: real("potassium"),
    copper: real("copper"),
    zinc: real("zinc"),

    retinol: real("retinol"),
    re: real("re"),
    rae: real("rae"),

    thiamin: real("thiamin"),
    riboflavin: real("riboflavin"),
    pyridoxine: real("pyridoxine"),
    niacin: real("niacin"),
    vitaminC: real("vitamin_c"),
});

export const fattyAcids = pgTable("fatty_acids", {
    id: integer("id").primaryKey(),
    foodId: integer("food_id").references(() => food.id, { onDelete: "cascade" }).notNull(),

    saturated: real("saturated"),
    monounsaturated: real("monounsaturated"),
    polyunsaturated: real("polyunsaturated"),

    c12_0: real("12_0"),
    c14_0: real("14_0"),
    c16_0: real("16_0"),
    c18_0: real("18_0"),
    c20_0: real("20_0"),
    c22_0: real("22_0"),
    c24_0: real("24_0"),

    c14_1: real("14_1"),
    c16_1: real("16_1"),
    c18_1: real("18_1"),
    c20_1: real("20_1"),

    c18_2n6: real("18_2n6"),
    c18_3n3: real("18_3n3"),
    c20_4: real("20_4"),
    c20_5: real("20_5"),
    c22_5: real("22_5"),
    c22_6: real("22_6"),

    c18_1t: real("18_1t"),
    c18_2t: real("18_2t"),
});

export const aminoAcids = pgTable("aminoAacids", {
    id: serial("id").primaryKey(),
    foodId: integer("food_id").references(() => food.id, { onDelete: "cascade" }).notNull(),

    tryptophan: real("tryptophan"),
    threonine: real("threonine"),
    isoleucine: real("isoleucine"),
    leucine: real("leucine"),
    lysine: real("lysine"),
    methionine: real("methionine"),
    cystine: real("cystine"),
    phenylalanine: real("phenylalanine"),
    tyrosine: real("tyrosine"),
    valine: real("valine"),
    arginine: real("arginine"),
    histidine: real("histidine"),
    alanine: real("alanine"),
    asparticAcid: real("aspartic_acid"),
    glutamicAcid: real("glutamic_acid"),
    glycine: real("glycine"),
    proline: real("proline"),
    serine: real("serine")
});