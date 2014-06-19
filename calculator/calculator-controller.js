/**
 * Created by 1000036881 on 6/16/2014.
 */
angular.module('calculator.controllers', [])
    .controller('calculatorController', [
        '$scope',
        '$route',
        '$rootScope',
        function (scope, route, rootScope) {
        rootScope.activeTab = route.current.tabName;
    }])
    .controller('dobController', [
        '$scope',
        function (scope) {
            scope.userDateOfBirth = null; //dob;
            scope.userAge = 0; //age = 0;
            scope.userDeferral = 0 ; //deferral;
            scope.userRealAge = 0; //realage;

            scope.resetDateOfBirth = function () {
                scope.userDateOfBirth = null;
            }
            scope.calculateRealAge = function () {
                scope.userRealAge = scope.userAge + scope.userDeferral;
                return scope.userRealAge;
            }
            scope.calculateAge = function () {
                var age = 0;
                var dob = scope.userDateOfBirth;

                if (dob != null) {
                    var today = new Date();
                    var nowyear = today.getFullYear();
                    var nowmonth = today.getMonth();
                    var nowday = today.getDate();

                    var birthyear = dob.getFullYear();
                    var birthmonth = dob.getMonth();
                    var birthday = dob.getDate();

                    age = nowyear - birthyear;
                    var age_month = nowmonth - birthmonth;
                    var age_day = nowday - birthday;

                    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
                        age = parseInt(age) - 1;
                    }
                }
                scope.userAge = age;
            }

        }])
