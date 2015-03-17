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
      data: { pageTitle: 'oDesk' }
    })
    .state('index.dashboard', {
        url: "/dashboard",
        templateUrl: "views/dashboard.html",
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        data: { pageTitle: 'Dashboard' }
    })
    .state('index.h48', {
        url: "/h48",
        templateUrl: "views/h48.html",
        controller: 'Hour48Ctrl',
        controllerAs: 'h48',
        data: { pageTitle: '48H' }
    })
    .state('index.profile', {
        url: "/profile",
        templateUrl: "views/profile.html",
        controller: 'ProfileCtrl',
        controllerAs: 'profile',
        data: { pageTitle: 'Profil' }
    })
    .state('index.add_product', {
        url: "/add_product",
        templateUrl: "views/add_product.html",
        controller: 'AddProductCtrl',
        controllerAs: 'addProduct',
        data: { pageTitle: 'Produkt Hinzufügen' }
    })
    .state('index.upload_file', {
        url: "/upload_file",
        templateUrl: "views/upload_file.html",
        controller: 'UploadCtrl',
        controllerAs: 'upload',
        data: { pageTitle: 'Produkt Hochladen' }
    })
    .state('index.tile_detail', {
        url: "/tile_detail",
        templateUrl: "views/tile_detail.html",
        controller: 'TileDetailCtrl',
        controllerAs: 'tileDetail',
        data: { pageTitle: 'Produkt Hochladen' }
    })
    .state('register', {
        url: "/register",
        templateUrl: "views/register.html",
        controller: 'RegisterCtrl',
        controllerAs: 'register',
        data: { pageTitle: 'Private Haftpflicht' }
    })
    .state('landing', {
        url: "/landing",
        templateUrl: "views/landing.html"
    })
    .state('login', {
        url: "/login",
        templateUrl: "views/login.html",
        controller: 'LoginCtrl',
        controllerAs: 'login',
        data: { pageTitle: 'Einloggen' }
    });
}

angular.module('inspinia')
.config(config)
.run(function($rootScope, $state) {
  $rootScope.$state = $state;
})
.constant('Config', {
  'server': '0.0.0.0:3000' // Config here JSON server
})
.config(function(snapRemoteProvider) {
  snapRemoteProvider.globalOptions = {
    touchToDrag: false,
    maxPosition: 200,
  }
})
