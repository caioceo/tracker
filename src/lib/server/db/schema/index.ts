import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as users from './tables/user/users'
import * as history from './tables/user/history';
import * as dailyDiet from './tables/food/dailyDiet';
import * as goal from './enums/goal';

import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = neon(env.DATABASE_URL);

export const db = drizzle(client, { schema: {
    users,
    history,
    goal,
    dailyDiet,
} });
