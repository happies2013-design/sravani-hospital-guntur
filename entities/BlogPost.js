{
    "name": "BlogPost",
        "type": "object",
            "properties": {
        "title": {
            "type": "string"
        },
        "slug": {
            "type": "string"
        },
        "excerpt": {
            "type": "string"
        },
        "content": {
            "type": "string"
        },
        "category": {
            "type": "string",
                "enum": [
                    "health-tips",
                    "news",
                    "research",
                    "lifestyle",
                    "nutrition",
                    "mental-health",
                    "other"
                ]
        },
        "featured_image": {
            "type": "string"
        },
        "author_name": {
            "type": "string"
        },
        "author_image": {
            "type": "string"
        },
        "tags": {
            "type": "array",
                "items": {
                "type": "string"
            }
        },
        "is_featured": {
            "type": "boolean",
                "default": false
        },
        "views": {
            "type": "number",
                "default": 0
        },
        "status": {
            "type": "string",
                "enum": [
                    "draft",
                    "published"
                ],
                    "default": "draft"
        }
    },
    "required": [
        "title",
        "content"
    ]
}