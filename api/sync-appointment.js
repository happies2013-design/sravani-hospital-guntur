import { google } from 'googleapis';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Initialize Google Auth
const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

// Initialize DB (Conditional to avoid crashing if env is missing)
const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
// const db = sql ? drizzle(sql) : null;

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method not allowed' });
    }

    const { name, phone, date, department } = request.body;

    try {
        // 1. Sync to Google Sheets
        if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_CREDENTIALS) {
            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'Appointments!A:D',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[name, phone, date, department, new Date().toISOString()]],
                },
            });
            console.log("Synced to Google Sheets");
        }

        // 2. Sync to Neon DB (Example)
        /*
        if (db) {
          await db.insert(appointments).values({
            patientName: name,
            date: new Date(date),
            ...
          });
        }
        */

        return response.status(200).json({ message: 'Appointment synced successfully' });
    } catch (error) {
        console.error('Workflow Error:', error);
        // don't fail the request for the user if backend sync fails
        return response.status(500).json({ message: 'Sync failed', error: error.message });
    }
}
