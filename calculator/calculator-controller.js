/**
 * Created by 1000036881 on 6/16/2014.
 */
angular.module('calculator.controllers', [])
	.controller('calculatorController', ['$scope','$route','$rootScope', function ($scope, $route,$rootScope) {
		$rootScope.activeTab = $route.current.tabName;
	}])
	.controller('dobController', ['$scope', function ($scope, userDateOfBirth, userAge) {
		$scope.userDateOfBirth = userDateOfBirth;
		$scope.userAge = userAge = 0;
		$scope.resetDateOfBirth = function () {
			$scope.userDateOfBirth = null;
		}
		$scope.calculateAge = function () {
			userAge = 0;

			if($scope.userDateOfBirth != null) {
				var today = new Date();
				var nowyear = today.getFullYear();
				var nowmonth = today.getMonth();
				var nowday = today.getDate();

				var birthyear = $scope.userDateOfBirth.getFullYear();
				var birthmonth = $scope.userDateOfBirth.getMonth();
				var birthday = $scope.userDateOfBirth.getDate();

				userAge = nowyear - birthyear;
				var age_month = nowmonth - birthmonth;
				var age_day = nowday - birthday;

				if (age_month < 0 || (age_month == 0 && age_day < 0)) {
					userAge = parseInt(userAge) - 1;
				}
			}
			$scope.userAge = userAge;
		}

	}])
