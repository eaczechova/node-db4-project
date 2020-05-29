exports.seed = function (knex, Promise) {
	return knex('	quantity').insert([
		{
			quantity_number: 2,
			quantity_unit: 'tsp',
			ingredient_id: 1,
			recipe_id: 1,
		},
		{
			quantity_number: 1,
			quantity_unit: 'pc',
			ingredient_id: 2,
			recipe_id: 1,
		},
		{
			quantity_number: 175,
			quantity_unit: 'g',
			ingredient_id: 3,
			recipe_id: 1,
		},
		{
			quantity_number: 140,
			quantity_unit: 'g',
			ingredient_id: 4,
			recipe_id: 1,
		},
		{
			quantity_number: 1,
			quantity_unit: 'tbsp',
			ingredient_id: 5,
			recipe_id: 1,
		},
		{
			quantity_number: 250,
			quantity_unit: 'g',
			ingredient_id: 6,
			recipe_id: 1,
		},
		{
			quantity_number: 2,
			quantity_unit: 'tbsp',
			ingredient_id: 7,
			recipe_id: 1,
		},
		{
			quantity_number: 25,
			quantity_unit: 'g',
			ingredient_id: 8,
			recipe_id: 1,
		},
		{
			quantity_number: 1,
			quantity_unit: 'handful',
			ingredient_id: 9,
			recipe_id: 1,
		},
		{
			quantity_number: 50,
			quantity_unit: 'g',
			ingredient_id: 10,
			recipe_id: 1,
		},
		{
			quantity_number: 1,
			quantity_unit: 'tbsp',
			ingredient_id: 1,
			recipe_id: 2,
		},
		{
			quantity_number: 1,
			quantity_unit: 'piece',
			ingredient_id: 2,
			recipe_id: 2,
		},
		{
			quantity_number: 200,
			quantity_unit: 'g',
			ingredient_id: 3,
			recipe_id: 2,
		},
		{
			quantity_number: 140,
			quantity_unit: 'g',
			ingredient_id: 11,
			recipe_id: 2,
		},
		{
			quantity_number: 125,
			quantity_unit: 'g',
			ingredient_id: 12,
			recipe_id: 2,
		},
		{
			quantity_number: 10,
			quantity_unit: 'pieces',
			ingredient_id: 13,
			recipe_id: 2,
		},
		{
			quantity_number: 2,
			quantity_unit: 'tsp',
			ingredient_id: 14,
			recipe_id: 2,
		},
		{
			quantity_number: 40,
			quantity_unit: 'g',
			ingredient_id: 15,
			recipe_id: 2,
		},
	]);
};
