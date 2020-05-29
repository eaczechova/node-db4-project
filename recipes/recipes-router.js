const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Recipes.getRecipes()
		.then((recipes) => {
			res.json(recipes);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get recipes' });
		});
});

router.get('/:id/ingredients', (req, res) => {
	const { id } = req.params;

	Recipes.getShoppingList(id)
		.then((ingredients) => {
			if (ingredients.length) {
				res.json(ingredients);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find ingredients for the given recipe' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get ingredients' });
		});
});

router.get('/:id/steps', (req, res) => {
	const { id } = req.params;
	Recipes.getInstructions(id)
		.then((steps) => {
			if (steps.length) {
				res.json(steps);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find steps for the given recipe' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get steps' });
		});
});

module.exports = router;
