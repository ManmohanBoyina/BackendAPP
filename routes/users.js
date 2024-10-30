const express = require("express");
const userCtrl = require("../controller/user");
const recipeCtrl = require("../controller/recipe");
const recipeCtrll=require("../controller/getrecipe")
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/users/register", userCtrl.register);
router.post("/api/users/login", userCtrl.login);
router.get("/api/users/profile", isAuthenticated, userCtrl.profile);
router.post("/api/recipe/recipe", recipeCtrl.submitRecipe); 
router.get("/api/recipe/getrecipe", recipeCtrll.getRecipesByEmail)


module.exports = router;