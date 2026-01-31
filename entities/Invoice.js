{
  "name": "Invoice",
    "type": "object",
      "properties": {
    "invoice_number": {
      "type": "string"
    },
    "patient_id": {
      "type": "string"
    },
    "patient_name": {
      "type": "string"
    },
    "appointment_id": {
      "type": "string"
    },
    "items": {
      "type": "array",
        "items": {
        "type": "object",
          "properties": {
          "description": {
            "type": "string"
          },
          "quantity": {
            "type": "number"
          },
          "unit_price": {
            "type": "number"
          },
          "total": {
            "type": "number"
          }
        }
      }
    },
    "subtotal": {
      "type": "number"
    },
    "discount": {
      "type": "number"
    },
    "tax": {
      "type": "number"
    },
    "total_amount": {
      "type": "number"
    },
    "payment_status": {
      "type": "string",
