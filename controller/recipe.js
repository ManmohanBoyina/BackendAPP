const asyncHandler = require("express-async-handler");
const Recipe = require("../model/Recipe");

const recipeCtrl = {
  //! Submit Recipe
  submitRecipe: asyncHandler(async (req, res) => {
    const { recipename, ingredientLines, imageUrl, instructions, email } = req.body;

    //! Validations
    if (!recipename || !ingredientLines || !imageUrl || !instructions || !email) {
      return res.status(400).json({ message: "All fields are required, including email" });
    }

    //! Create the recipe
    try {
      const newRecipe = await Recipe.create({
        recipename,
        ingredientLines,
        imageUrl,
        instructions,
        email,
      });

      //! Send the response
      res.status(201).json({
        message: "Recipe added successfully",
        recipe: newRecipe,
      });
    } catch (error) {
      console.error("Error adding recipe:", error);
      res.status(500).json({ message: "Failed to add recipe" });
    }
  }),

};

module.exports = recipeCtrl;
