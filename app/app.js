'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  	'ngRoute',
  	'myApp.view1',
  	'myApp.view2',
	'ngAnimate',
	'pdf',
	'ui.bootstrap'

])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
	$routeProvider.when('/', {
		templateUrl: 'views/quiet-hours.html',
		controller: 'QuietHoursCtrl',
		controllerAs: 'quietHours'
	});
	$routeProvider.when('/setTime', {
		templateUrl: 'views/quiet-hours.html',
		controller: 'QuietHoursCtrl'
	})
}])

.controller('QuietHoursCtrl', ['$scope', '$timeout', '$location', function($scope, $timeout, $routeParams) {
	$scope.clock = new Date();
	$scope.tickInterval = 1000; //ms

	var init = function () {
		var queryParams = $routeParams.search();
		$scope.start = queryParams.start || 11;
		$scope.end = queryParams.end || 7;
		validHours($scope.start, $scope.end)

	};

	var validHours = function(start, end) {
		if(start < 0 || end < 0 || start > 24 || end > 24) {
			return false;
		}
	};

	var tick = function() {
		$scope.clock = new Date(); // get the current time
		$timeout(tick, $scope.tickInterval); // reset the timer
	};

	$scope.isQuietHours = function () {
		console.log($scope.start + " start " + $scope.end + " end");
		return $scope.clock.getHours() >= $scope.start && $scope.clock.getHours() < $scope.end;
	};

	$scope.pdfUrl = 'img/ProgrammerInterrupted.pdf';
	init();
	$timeout(tick, $scope.tickInterval);
}]);
