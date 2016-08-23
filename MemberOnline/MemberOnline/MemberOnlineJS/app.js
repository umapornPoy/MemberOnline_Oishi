var app = angular.module('MemberOnline', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Home/dashboard"
        })
        .when("/maps", {
            templateUrl: "Maps/maps"
        })
        .when("/feedback", {
            templateUrl: "Home/feedback"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});