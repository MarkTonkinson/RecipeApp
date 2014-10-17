var recipeMonkey = angular.module('recipeMonkey');

recipeMonkey.controller('rmbetactrl', function($scope, rmbetaservice){
	$scope.test = "hello world";

	$scope.recipes = rmbetaservice.getRecipeArray();

	$scope.newRecipe;
});