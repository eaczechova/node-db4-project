exports.seed = function (knex, Promise) {
	return knex('ingredients').insert([
		{
			ingredients_name: 'tsp of rapeseed oil',
		},
		{
			ingredients_name: 'red onion',
		},
		{
			ingredients_name: 'gram(s) of butternut squash chunks',
		},
		{
			ingredients_name: 'gram(s) of broccoli',
		},
		{
			ingredients_name: 'tbsp of fresh thyme',
		},
		{
			ingredients_name: 'gram(s) of red & white quinoa',
		},
		{
			ingredients_name: 'tbsp chopped parsley',
		},
		{
			ingredients_name: 'handful of dried cranberries',
		},
		{
			ingredients_name: 'handful pumpkin seeds',
		},
		{
			ingredients_name: 'tbsp balsamic vinegar',
		},
		{
			ingredients_name: 'gram(s) of feta cheese',
		},
		{
			ingredients_name: 'button mushrooms',
		},
		{
			ingredients_name: 'gram(s) of basmati rice',
		},
		{
			ingredients_name: 'dried mushrooms',
		},
		{
			ingredients_name: 'tbsp fresh sage',
		},
		{
			ingredients_name: 'gram(s) of gorgonzola',
		},
	]);
};
