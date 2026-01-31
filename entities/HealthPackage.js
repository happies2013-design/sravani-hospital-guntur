{
    "name": "HealthPackage",
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
        "tests_included": {
            "type": "array",
                "items": {
                "type": "string"
            }
        },
        "price": {
            "type": "number"
        },
        "discounted_price": {
            "type": "number"
        },
        "duration": {
            "type": "string"
        },
        "category": {
            "type": "string",
                "enum": [
                    "executive",
                    "diabetes",
                    "cardiac",
                    "women",
                    "senior",
                    "pediatric",
                    "other"
                ]
        },
        "recommended_for": {
            "type": "string"
        },
        "image": {
            "type": "string"
        },
        "is_featured": {
            "type": "boolean",
                "default": false
        },
