
app.controller('CalendarCtrl', function($scope, $filter, HolidayService) {
         
   $scope.startDate = new Date();
   $scope.numberDays = 17;
   $scope.countryCode = 'US';
   
   HolidayService.getHolydays($scope.countryCode, $scope.startDate.getFullYear()).then(function (data) {       
       console.log(data.data.holidays);
   });
   
});
