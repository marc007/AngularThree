/**
 * Created by 1000036881 on 6/16/2014.
 */
var lbcalcApp = angular.module("lbcalcApp",
    [
        'ngRoute',
        'home.controllers',
        'calculator.controllers'
    ]);

lbcalcApp.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/home',
            {
                templateUrl: 'home/home.html',
                controller: 'homeController',
                tabName: 'home'
            });
        $routeProvider.when('/calculator',
            {
                templateUrl: 'calculator/calculator.html',
                controller: 'calculatorController',
                tabName: 'calculator'
            });
        $routeProvider.otherwise(
            {
                redirectTo: '/home'
            });
    }]);