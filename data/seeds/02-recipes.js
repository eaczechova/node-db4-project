exports.seed = function (knex, Promise) {
	return knex('recipes').insert([
		{
			recipe_name: 'Quinoa, squash and broccoli salad',
		},
		{
			recipe_name: 'Squash, mushroom and gorgonzola pilaf',
		},
	]);
};
