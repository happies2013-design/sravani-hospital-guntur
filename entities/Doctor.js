{
    "name": "Doctor",
        "type": "object",
            "properties": {
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string",
                "format": "email"
        },
        "phone": {
            "type": "string"
        },
        "department": {
            "type": "string",
                "enum": [
                    "gastroenterology",
                    "gynaecology",
                    "orthopaedics",
                    "general-medicine",
                    "cardiology",
                    "paediatrics",
                    "critical-care"
                ]
        },
        "qualification": {
            "type": "string"
        },
        "specialization": {
            "type": "string"
        },
        "experience_years": {
            "type": "number"
        },
        "consultation_fee": {
            "type": "number"
        },
        "bio": {
            "type": "string"
        },
        "education": {
            "type": "string"
        },
        "achievements": {
            "type": "string"
        },
        "languages": {
            "type": "string"
        },
