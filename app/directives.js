app.directive('customCalendar', function ($filter) {
    var startDate;
    var numberDays;
    var countryCode;
    function buildingCalendars(startDate, numberDays, countryCode) {  
        
        var year = startDate.getFullYear();
        var month = startDate.getMonth();
        var startingDay = startDate.getDate(); //this a date day
        var weekDay = startDate.getDay();
                
        var calDaysLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        var calMonthsLabels = ['January', 'February','March', 'April','May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

        var calDaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        var monthLength = calDaysMonth[month];
        
        var monthName = calMonthsLabels[month];
        
        if (month == 1) { // February only!
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
                monthLength = 29;
            }
        }            
        
        var html = '<table class="calendar-table">';
        html += '<tr><th colspan="7">';
        html +=  monthName + "&nbsp;" + year;
        html += '</th></tr>';
        html += '<tr class="calendar-header">';
        for (var i = 0; i <= 6; i++ ){
        html += '<td class="calendar-header-day">';
        html += calDaysLabels[i];
        html += '</td>';
        }
        html += '</tr><tr>';
        
         // fill in the days
        var day = 1;
        // this loop is for is weeks (rows)
        for (var i = 0; i < 9; i++) {
            // this loop is for weekdays (cells)
            for (var j = 0; j <= 6; j++) { 
                html += '<td class="calendar-day">';
                if (day <= monthLength && (i > 0 || j >= startingDay) && day >= startingDay) {
                    html += day;
                    day++;
                }
                html += '</td>';
            }
            // stop making rows if we've run out of days
            if (day > monthLength) {
                break;
                } else {
                html += '</tr><tr>';
            }
        }
        html += '</tr></table>';
        
        return html;
    }
    return{
        restrict:'E',
         scope: {
            'startDate' : '=',
            'numberDays' : '=',
            'countryCode' : '=',
         
        },link: function (scope, element, attrs) {
            startDate = scope.$eval(attrs.startDate);
            numberDays = scope.$eval(attrs.numberDays);
            countryCode = scope.countryCode;
            console.log('start date: ', $filter('date')(startDate,'M/d/yyyy'), 'number: ', numberDays, ' country code:', countryCode);
           
        },
        template: buildingCalendars(startDate,numberDays, countryCode)
    }
})

