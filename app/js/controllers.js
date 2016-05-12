var myControllers = angular.module('myControllers', []);

myControllers.controller('ListController', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
	$http.get('config.json').success(function (data) {
		$scope.jobCode = data[0].jobCode;
		data.splice(0, 1);
		$scope.data = data;
	});
}]);

myControllers.controller('TemplateController', ['$rootScope', '$scope', '$http', '$routeParams', function ($rootScope, $scope, $http, $routeParams) {
	$http.get('config.json').success(function (data) {
		data.splice(0, 1);
		for(x in data) {
			if(data[x].concept==$routeParams.conceptId) {
				if (data[x].type=='HTML5') {
					$scope.extention = 'html';
				} else if (data[x].type=='GIF') {
					$scope.extention = 'gif';
				}
			}
		}
		$scope.base = 'concepts';
		$scope.concept = $routeParams.conceptId;
		$scope.size = $routeParams.sizeId;
		$scope.src = $scope.base+'/'+$scope.concept+'/'+$scope.size+'/'+$scope.size+'.'+$scope.extention;
	});
}]);
