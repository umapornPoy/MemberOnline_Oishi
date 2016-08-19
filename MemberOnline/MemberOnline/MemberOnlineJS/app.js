var app = angular.module('MemberOnline', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Home/Index"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});