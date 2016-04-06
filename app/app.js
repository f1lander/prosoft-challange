var app = angular.module('calendar',[
   'ui.router',   
   'toaster',
   'ngAnimate',
   'ngMaterial',
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
        .state('calendar', {
          url: '/calendar',
          parent: 'base',
          templateUrl: 'views/calendar.html',
          controller: 'CalendarCtrl'
        })
  

  });
