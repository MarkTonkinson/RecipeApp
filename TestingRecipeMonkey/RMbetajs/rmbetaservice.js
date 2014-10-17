var recipeMonkey = angular.module('recipeMonkey');

recipeMonkey.service('rmbetaservice', function(){

	

	var Recipe = function(recipeName, recipeIngredients, recipeAuthor, recipeYield, recipeLocation) {
	   this.recipeName = recipeName;
	   this.recipeIngredients = recipeIngredients;
	   this.recipeAuthor = recipeAuthor;
	   this.recipeYield = recipeYield;
	   this.recipeLocation = recipeLocation;
	}

	var myPizzaSauce = new Recipe('Marks Pizza Sauce', ['lemon juice', 'tomato paste', 'balsamic vinegar', 'brown sugar', 'butter', 'thyme', 'oregano', 'rosemary', 'milk'], 'Mark', '2', 'Recipe Book');

	var WhitneysChicken = new Recipe('Whitneys Chicken', ['chicken', 'apricot jam', 'pineapple', 'onion', 'red pepper'], 'Whitney', '4', 'website');

	var simplePizzaSauce = new Recipe('Simple Pizza Sauce', ['tomato paste', 'balsamic vinegar', 'butter', 'thyme', 'oregano'], 'Mark', '5', 'website');
	

	var recipeArray = [myPizzaSauce, WhitneysChicken, simplePizzaSauce];

	this.getRecipeArray = function(){
		return recipeArray;
	}
})