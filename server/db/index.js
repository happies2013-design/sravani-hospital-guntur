import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Initialize the database connection
// In a real app, this connection string comes from env vars
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);

// Example schema definition
/*
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  patientName: text('patient_name').notNull(),
  doctorName: text('doctor_name'),
  date: timestamp('date').defaultNow(),
  status: text('status').default('pending'),
});
*/
