var app = angular.module('MemberOnline', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "Home/dashboard"
        })
        .when("/maps", {
            templateUrl: "Maps/maps"
        })
        .when("/register", {
            templateUrl: "Register/Register"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});