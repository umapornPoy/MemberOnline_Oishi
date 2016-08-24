var app = angular.module('MemberOnline', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "Home/dashboard"
        })
        .when("/News", {
            templateUrl: "News/News"
        })
        .when("/Unread", {
            templateUrl: "News/Unread"
        })
        .when("/Detail", {
            templateUrl: "News/Detail"
        })
        .when("/maps", {
            templateUrl: "Maps/maps"
        })
        .when("/Register", {
            templateUrl: "Register/Register"
        })
        .when("/Picture", {
            templateUrl: "Register/Picture"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});