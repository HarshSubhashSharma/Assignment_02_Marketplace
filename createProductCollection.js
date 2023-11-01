db.createCollection("product", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "description", "price", "quantity", "category"],
        properties: {
          name: {
            bsonType: "string",
            description: "Name must be a string and is required",
          },
          description: {
            bsonType: "string",
            description: "Description must be a string and is required",
          },
          price: {
            bsonType: "number",
            description: "Price must be a number and is required",
          },
          quantity: {
            bsonType: "number",
            description: "Quantity must be a number and is required",
          },
          category: {
            bsonType: "string",
            description: "Category must be a string and is required",
          },
        },
      },
    },
  })