exports.seed = function (knex, Promise) {
	return knex('ingredients').insert([
		{
			ingredients_name: 'rapeseed oil',
		},
		{
			ingredients_name: 'red onion',
		},
		{
			ingredients_name: 'butternut squash chunks',
		},
		{
			ingredients_name: 'broccoli',
		},
		{
			ingredients_name: 'fresh thyme',
		},
		{
			ingredients_name: 'red & white quinoa',
		},
		{
			ingredients_name: 'chopped parsley',
		},
		{
			ingredients_name: 'dried cranberries',
		},
		{
			ingredients_name: 'pumpkin seeds',
		},
		{
			ingredients_name: 'balsamic vinegar',
		},
		{
			ingredients_name: 'feta cheese',
		},
		{
			ingredients_name: 'button mushroom',
		},
		{
			ingredients_name: 'basmati rice',
		},
		{
			ingredients_name: 'dried mushroom',
		},
		{
			ingredients_name: 'fresh sage',
		},
		{
			ingredients_name: 'gorgonzola',
		},
	]);
};
