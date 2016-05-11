var myApp = angular.module('myApp', [
	'ngRoute',
	'myControllers'
]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
	$routeProvider.
	when('/', {
		templateUrl: 'app/partials/list.html',
		controller: 'ListController'
	}).
	when('/:conceptId/:sizeId', {
		templateUrl: 'app/partials/template.html',
		controller: 'TemplateController'
	}).
	otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
}]);