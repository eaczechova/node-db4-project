exports.seed = function (knex, Promise) {
	return knex('steps').insert([
		{
			step_instruction:
				'Heat the oil in a wok with a lid, add the onion and garlic, and fry for 5 mins until softened, then lift from the wok with a slotted spoon',
			step_number: 1,
			recipe_id: 1,
		},
		{
			step_instruction:
				'Add the squash, stir round the wok until it starts to colour, then add the broccoli',
			step_number: 2,
			recipe_id: 1,
		},
		{
			step_instruction:
				'Sprinkle in 3 tbsp water and the thyme, cover the pan and steam for about 5 mins until the veg is tender.',
			step_number: 3,
			recipe_id: 1,
		},
		{
			step_instruction:
				'Meanwhile, tip quinoa into a bowl and fluff it up. Add the parsley, cranberries, seeds (if using), cooked onion and garlic, and balsamic vinegar, and mix well.',
			step_number: 4,
			recipe_id: 1,
		},
		{
			step_instruction: 'Toss through the vegetables with the cheese.',
			step_number: 5,
			recipe_id: 1,
		},
		{
			step_instruction:
				'Heat the oil in a large non-stick pan, add the onion and garlic, and fry for 5 mins.',
			step_number: 1,
			recipe_id: 2,
		},
		{
			step_instruction:
				'Tip in the squash and button mushrooms, and cook for a few mins more. Stir in the rice, then pour in the stock.',
			step_number: 2,
			recipe_id: 2,
		},
		{
			step_instruction:
				'Stir well, then add the dried mushroom, sage and parsley stalks. Cover and simmer over a low heat for 35-40 mins until the rice is tender.',
			step_number: 3,
			recipe_id: 2,
		},
		{
			step_instruction:
				'Take off the heat, fold in the parsley leaves and cheese with some black pepper, then allow to stand for 5 mins before serving',
			step_number: 4,
			recipe_id: 2,
		},
	]);
};
