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
        .when("/mapsByName", {
            templateUrl: "Maps/mapsByName"
        })
        .when("/info", {
            templateUrl: "Home/info"
        })
        .when("/showMap", {
            templateUrl: "Home/showMap"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});