var recipeMonkey = angular.module('recipeMonkey', ['ngRoute']);



recipeMonkey.config(function($routeProvider){
  

  $routeProvider
	.when('/testTemplate', {  //state is a name I'm giving it
	  	templateUrl: '/templates/testTemplate.html',
	  	controller: 'rmbetactrl'
  	})
	.when('/', {
	  	templateUrl: '/templates/home.html',
	  	controller: 'rmbetactrl'
  	}).when('/About', {
      templateUrl: '/templates/about.html'
    }).when('/Favorites', {
      templateUrl: '/templates/favorites.html'
    }).otherwise('/')
});

  // }).when('/teams/:team', {
  // 	templateUrl: 'js/teams/teamTmpl.html',
  // 	controller: 'teamCtrl',//this calls the team controller and therefore resolve knows everthing taht is in it
  // 	resolve: {
  // 		teamData: function($route, teamService){ //do I need to inject teamService in this function?
  // 			return teamService.getTeamData($route.current.params.team);
  // 		}
  // 	}
  // }).otherwise('/', {
  // 	templateUrl: 'js/home/homeTmpl.html',
  // 	controller: 'homeCtrl'
