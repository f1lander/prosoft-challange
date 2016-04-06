app.directive('customCalendar', function ($filter) {
    return{
        restrict:'E',
         scope: {
            'startDate' : '=',
            'numberDays' : '=',
            'countryCode' : '=',
         
        },link: function (scope, element, attrs) {
            var startDate = scope.$eval(attrs.startDate);
            var numberDays = scope.$eval(attrs.numberDays);
            var countryCode = scope.countryCode;
            console.log('start date: ', $filter('date')(startDate,'M/d/yyyy'), 'number: ', numberDays, ' country code:', countryCode);
            cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            calMonthsLabels = ['January', 'February','March', 'April','May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

            calDaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
           
        },
        template: '<table class="calendar-table"><tbody><tr><th colspan="7">April&nbsp;2016</th></tr><tr class="calendar-header"><td class="calendar-header-day">Sun</td><td class="calendar-header-day">Mon</td><td class="calendar-header-day">Tue</td><td class="calendar-header-day">Wed</td><td class="calendar-header-day">Thu</td><td class="calendar-header-day">Fri</td><td class="calendar-header-day">Sat</td></tr><tr><td class="calendar-day"></td><td class="calendar-day"></td><td class="calendar-day"></td><td class="calendar-day"></td><td class="calendar-day"></td><td class="calendar-day">1</td><td class="calendar-day">2</td></tr><tr><td class="calendar-day">3</td><td class="calendar-day">4</td><td class="calendar-day">5</td><td class="calendar-day">6</td><td class="calendar-day">7</td><td class="calendar-day">8</td><td class="calendar-day">9</td></tr><tr><td class="calendar-day">10</td><td class="calendar-day">11</td><td class="calendar-day">12</td><td class="calendar-day">13</td><td class="calendar-day">14</td><td class="calendar-day">15</td><td class="calendar-day">16</td></tr><tr><td class="calendar-day">17</td><td class="calendar-day">18</td><td class="calendar-day">19</td><td class="calendar-day">20</td><td class="calendar-day">21</td><td class="calendar-day">22</td><td class="calendar-day">23</td></tr><tr><td class="calendar-day">24</td><td class="calendar-day">25</td><td class="calendar-day">26</td><td class="calendar-day">27</td><td class="calendar-day">28</td><td class="calendar-day">29</td><td class="calendar-day">30</td></tr></tbody></table>'
    }
})