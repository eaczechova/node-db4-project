exports.up = function (knex) {
	return knex.schema
		.createTable('ingredients', (tbl) => {
			tbl.increments();
			tbl.string('ingredients_name', 128).notNullable().unique();
		})
		.createTable('recipes', (tbl) => {
			tbl.increments();
			tbl.string('recipe_name', 128).notNullable();
		})
		.createTable('steps', (tbl) => {
			tbl.increments();
			tbl.string('step_instruction', 128).notNullable();
			tbl.integer('step_number', 128).notNullable();
			tbl
				.integer('recipe_id')
				.notNullable()
				.unsigned()
				.references('recipes.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('recipes_ingredients', (tbl) => {
			tbl.integer('recipe_id').notNullable().unsigned().references('recipes.id');
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredients.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.float('quantity').notNullable();
			tbl.primary(['recipe_id', 'ingredient_id']);
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('recipes_ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients');
};
