var app = angular.module('MemberOnline', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "Register/Picture"
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
        .when("/Editmember", {
            templateUrl: "Register/Editmember"
        })
        .when("/Picture", {
            templateUrl: "Register/Picture"
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

        .when("/Card", {
            templateUrl: "Register/Card"
        })
         .when("/Point", {
             templateUrl: "Register/Point"
         })
        .when("/Navigation", {
            templateUrl: "Navigation/Navigation"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});