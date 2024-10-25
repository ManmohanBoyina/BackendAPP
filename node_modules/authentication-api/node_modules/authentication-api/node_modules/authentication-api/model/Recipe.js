const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipename: { type: String, required: true }, // Keep this as-is
    ingredientLines: { type: [String], required: true }, // Array of strings for ingredients
    imageUrl: { type: String, required: true }, // Consistent camelCase
    instructions: { type: String, required: true }, // Consistent camelCase
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Compile to form the model
module.exports = mongoose.model("Recipe", recipeSchema);
