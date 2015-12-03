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
	})
}])

.controller('QuietHoursCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.clock = new Date();
	$scope.tickInterval = 1000; //ms

	var tick = function() {
		$scope.clock = new Date(); // get the current time
		$timeout(tick, $scope.tickInterval); // reset the timer
	};

	$scope.isQuietHours = function () {
		return $scope.clock.getHours() >= 11 && $scope.clock.getHours() < 17
	};

	$scope.timeTillQuietHours = function () {
		var hours = $scope.clock.getHours();
	}

	$scope.pdfUrl = 'img/ProgrammerInterrupted.pdf';

	$timeout(tick, $scope.tickInterval);
}]);
