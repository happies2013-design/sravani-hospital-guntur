{
    "name": "Patient",
        "type": "object",
            "properties": {
        "full_name": {
            "type": "string",
                "description": "Patient's full name"
        },
        "email": {
            "type": "string",
                "format": "email"
        },
        "phone": {
            "type": "string"
        },
        "date_of_birth": {
            "type": "string",
                "format": "date"
        },
        "gender": {
            "type": "string",
                "enum": [
                    "male",
                    "female",
                    "other"
                ]
        },
        "blood_group": {
            "type": "string",
                "enum": [
                    "A+",
                    "A-",
                    "B+",
                    "B-",
                    "AB+",
                    "AB-",
                    "O+",
                    "O-"
                ]
        },
        "address": {
            "type": "string"
        },
        "city": {
            "type": "string"
        },
        "emergency_contact_name": {
            "type": "string"
        },
        "emergency_contact_phone": {
