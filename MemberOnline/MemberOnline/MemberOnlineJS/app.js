var app = angular.module('MemberOnline', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Home/dashboard"
        })
        .when("/maps", {
            templateUrl: "Maps/maps"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});