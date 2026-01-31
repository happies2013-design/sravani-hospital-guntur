{
    "name": "Department",
        "type": "object",
            "properties": {
        "name": {
            "type": "string"
        },
        "slug": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "long_description": {
            "type": "string"
        },
        "services": {
            "type": "array",
                "items": {
                "type": "string"
            }
        },
        "conditions_treated": {
            "type": "array",
                "items": {
                "type": "string"
            }
        },
        "procedures": {
            "type": "array",
                "items": {
                "type": "string"
            }
        },
        "equipment": {
            "type": "array",
                "items": {
                "type": "string"
            }
        },
        "icon": {
            "type": "string"
        },
        "image": {
            "type": "string"
        },
        "head_doctor_id": {
            "type": "string"
        },
        "status": {
