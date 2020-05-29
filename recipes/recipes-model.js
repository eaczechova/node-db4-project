const db = require('../data/db-config.js');

function getRecipes() {
	return db('recipes');
}

function getShoppingList(recipe_id) {
	return db('ingredients')
		.join(
			'recipes_ingredients',
			'recipes_ingredients.ingredient_id',
			'ingredients.id'
		)
		.select('ingredients_name', 'quantity', 'recipe_id')
		.where({
			'recipes_ingredients.recipe_id': recipe_id,
		});
}

function getInstructions(recipe_id) {
	return db('steps')
		.select('step_number', 'step_instruction')
		.where({ 'steps.recipe_id': recipe_id });
}

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
};
