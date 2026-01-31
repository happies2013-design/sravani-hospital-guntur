
// Workflow: Sync New Appointments to Google Sheets
// Trigger: New appointment created in Neon DB
// Action: Add row to "Appointments" Google Sheet

import { db } from '../db';
import { appendToSheet } from '../google-sheets';

export const syncAppointmentToSheet = async (appointmentData) => {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Appointments!A:E'; // Adjust columns as needed

    const values = [
        appointmentData.id,
        appointmentData.patientName,
        appointmentData.doctorName,
        appointmentData.date,
        appointmentData.status
    ];

    await appendToSheet(spreadsheetId, range, values);
    console.log(`Synced appointment ${appointmentData.id} to Sheets`);
};
