import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

const client = neon(env.DATABASE_URL ?? "postgres://postgres:postgres@localhost:5432/tuna");
export const db = drizzle(client, { schema });
