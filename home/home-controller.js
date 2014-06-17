/**
 * Created by 1000036881 on 6/16/2014.
 */
angular.module('home.controllers', [])
	.controller('homeController', ['$scope','$route','$rootScope', function ($scope, $route,$rootScope) {
		$rootScope.activeTab = $route.current.tabName;
	}])
