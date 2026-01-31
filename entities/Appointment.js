{
    "name": "Appointment",
        "type": "object",
            "properties": {
        "patient_id": {
            "type": "string"
        },
        "patient_name": {
            "type": "string"
        },
        "patient_phone": {
            "type": "string"
        },
        "patient_email": {
            "type": "string"
        },
        "doctor_id": {
            "type": "string"
        },
        "doctor_name": {
            "type": "string"
        },
        "department": {
            "type": "string"
        },
        "appointment_date": {
            "type": "string",
                "format": "date"
        },
        "appointment_time": {
            "type": "string"
        },
        "reason": {
            "type": "string"
        },
        "symptoms": {
            "type": "string"
        },
        "status": {
            "type": "string",
                "enum": [
                    "scheduled",
                    "confirmed",
                    "completed",
                    "cancelled",
                    "no-show"
                ],
                    "default": "scheduled"
        },
        "notes": {
            "type": "string"
        },
        "payment_status": {
            "type": "string",
                "enum": [
                    "pending",
                    "paid",
                    "refunded"
                ],
                    "default": "pending"
        },
        "consultation_fee": {
            "type": "number"
        }
    },
    "required": [
        "patient_name",
        "patient_phone",
        "department",
        "appointment_date",
        "appointment_time"
    ]
}