{
    "name": "ContactInquiry",
        "type": "object",
            "properties": {
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "subject": {
            "type": "string",
                "enum": [
                    "general",
                    "appointment",
                    "insurance",
                    "billing",
                    "feedback",
                    "complaint",
                    "other"
                ]
        },
        "department": {
            "type": "string"
        },
        "message": {
            "type": "string"
        },
        "status": {
            "type": "string",
                "enum": [
                    "new",
                    "in-progress",
                    "resolved",
                    "closed"
                ],
                    "default": "new"
        },
        "response": {
            "type": "string"
        }
    },
    "required": [
        "name",
        "phone",
        "message"
    ]
}