var mySPA = angular.module("mySPA", ["ngRoute"]);
mySPA.controller("ListCtrl",ListCtrl);

mySPA.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/list-phone", {
            templateUrl: "./pages/List.html",
            controller:"ListCtrl"
        })
        .when("/add", {
            templateUrl: "./pages/Add.html",
            controller:"ListCtrl"
        })
        .when("/detail", {
            templateUrl: "./pages/Detail.html",
            controller:"ListCtrl"
        })
        .when("/detail/:id", {
            templateUrl: "./pages/Detail.html",
            controller:"ListCtrl"
        })
        .when("/edit", {
            templateUrl: "./pages/Edit.html"
        })
})