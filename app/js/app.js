angular.module('CompBrowser', ['ui.router', 'CompBrowser.controllers', 'skillsCtrl'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "templates/home.html",
        controller: 'MainCtrl'
    })
    .state('about', {
        url: "/about",
        templateUrl: "templates/about.html"
    })
    .state('tracks', {
        url: "/tracks",
        templateUrl: "templates/tracks.html",
        controller: 'TrackCtrl'
    })
    .state('courses', {
        url: "/courses",
        templateUrl: "templates/courses.html",
        controller: 'CourseCtrl'
    })
    .state('skills', {
        url: "/skills",
        templateUrl: "skills/skills.html",
        controller: 'SkillsCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
