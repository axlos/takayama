function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/index/dashboard");

    $stateProvider
    .state('index', {
      abstract: true,
      url: "/index",
      templateUrl: "views/common/content.html"
    })
    .state('index.main', {
      url: "/main",
      templateUrl: "views/main.html",
      data: { pageTitle: 'Main page' }
    })
    .state('index.dashboard', {
        url: "/dashboard",
        templateUrl: "views/dashboard.html",
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        data: { pageTitle: 'Dashboard' }
    })
    .state('index.profile', {
        url: "/profile",
        templateUrl: "views/profile.html",
        controller: 'ProfileCtrl',
        controllerAs: 'profile',
        data: { pageTitle: 'Profile' }
    });
}

angular.module('inspinia')
.config(config)
.run(function($rootScope, $state) {
  $rootScope.$state = $state;
});
