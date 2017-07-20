angular.module('home', [
	'ngMessages',
	'ngPasswordMeter',
	'ui.router'
]).config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.when('', '/home');
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home',
		 {
		 	controller: 'HomeCtrl',
			name: 'home',
			url: '/home',
			templateUrl: 'templates/home.html'
		});
	}
]);