const app = require("express").Router();
const recipesController = require("../controllers/recipes_controller");
const {env} = require("../../config");

if (env !== "testing") {
    recipesController.setUp();
}

app.get("/", recipesController.findAllRecipes);
app.post("/search", recipesController.searchRecipes);
app.get("/id/:recipeId", recipesController.selectRecipeById);
app.get("/python_test", recipesController.callPythonScriptTest);
app.get("/process_json", recipesController.processRecipesJson);

module.exports = app;
