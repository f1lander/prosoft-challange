app.factory('HolidayService', function($http){
        return{
            getHolydays:function (_country, _year) {
                return $http.get('http://holidayapi.com/v1/holidays',{
                    params:{
                        country: _country,
                        year:_year
                    }
                });

            }}})
                