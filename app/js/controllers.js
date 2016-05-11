var myControllers = angular.module('myControllers', []);

myControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
	$http.get('app/js/data.json').success(function (data) {
		console.log(data);
		$scope.data = data;
	});
}]);

myControllers.controller('TemplateController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	$scope.concept = $routeParams.conceptId;
	$scope.size = $routeParams.sizeId;
}]);
