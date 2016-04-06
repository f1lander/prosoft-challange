var app = angular.module('calendar',[
   'ui.router',   
   'toaster',
   'ngAnimate',
   'ngMaterial',
   'ngMaterialDatePicker',
   'ngStorage', 
]);

app.config(function($stateProvider, $urlRouterProvider) {

    
    $urlRouterProvider.otherwise('/calendar');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('clocky', {
          url: '/clocky',
          parent: 'base',
          templateUrl: 'views/clocky.html',
          controller: 'CalendarCtrl'
        })
  

  });
