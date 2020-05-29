exports.seed = function (knex, Promise) {
	return knex('recipes_ingredients').insert([
		{ recipe_id: 1, ingredient_id: 1, quantity: 2 },
		{ recipe_id: 1, ingredient_id: 2, quantity: 1 },
		{ recipe_id: 1, ingredient_id: 3, quantity: 175 },
		{ recipe_id: 1, ingredient_id: 4, quantity: 140 },
		{ recipe_id: 1, ingredient_id: 5, quantity: 1 },
		{ recipe_id: 1, ingredient_id: 6, quantity: 250 },
		{ recipe_id: 1, ingredient_id: 7, quantity: 2 },
		{ recipe_id: 1, ingredient_id: 8, quantity: 25 },
		{ recipe_id: 1, ingredient_id: 9, quantity: 1 },
		{ recipe_id: 2, ingredient_id: 1, quantity: 50 },
		{ recipe_id: 2, ingredient_id: 2, quantity: 1 },
		{ recipe_id: 2, ingredient_id: 3, quantity: 1 },
		{ recipe_id: 2, ingredient_id: 11, quantity: 200 },
		{ recipe_id: 2, ingredient_id: 12, quantity: 140 },
		{ recipe_id: 2, ingredient_id: 13, quantity: 125 },
		{ recipe_id: 2, ingredient_id: 14, quantity: 10 },
		{ recipe_id: 2, ingredient_id: 15, quantity: 2 },
	]);
};
