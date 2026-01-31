{
    "name": "MedicalRecord",
        "type": "object",
            "properties": {
        "patient_id": {
            "type": "string"
        },
        "patient_name": {
            "type": "string"
        },
        "doctor_id": {
            "type": "string"
        },
        "doctor_name": {
            "type": "string"
        },
        "appointment_id": {
            "type": "string"
        },
        "record_type": {
            "type": "string",
                "enum": [
                    "prescription",
                    "lab-report",
                    "diagnosis",
                    "imaging",
                    "discharge-summary",
                    "other"
                ]
        },
        "title": {
            "type": "string"
        },
        "diagnosis": {
            "type": "string"
        },
        "prescription": {
            "type": "string"
        },
        "notes": {
            "type": "string"
        },
        "file_url": {
            "type": "string"
        },
        "record_date": {
            "type": "string",
                "format": "date"
        }
    },
