{
    "name": "Testimonial",
        "type": "object",
            "properties": {
        "patient_name": {
            "type": "string"
        },
        "patient_image": {
            "type": "string"
        },
        "department": {
            "type": "string"
        },
        "doctor_name": {
            "type": "string"
        },
        "rating": {
            "type": "number",
                "minimum": 1,
                    "maximum": 5
        },
        "review": {
            "type": "string"
        },
        "treatment": {
            "type": "string"
        },
        "is_featured": {
            "type": "boolean",
                "default": false
        },
        "status": {
            "type": "string",
                "enum": [
                    "pending",
                    "approved",
                    "rejected"
                ],
                    "default": "pending"
        }
    },
    "required": [
        "patient_name",
        "review",
        "rating"
    ]
}