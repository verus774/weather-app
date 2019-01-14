import template from './weather-list.directive.html';
import './weather-list.directive.css';

export default (weatherService) => {
    return {
        restrict: 'E',
        template,
        scope: {},
        link: (scope, element, attrs) => {
            scope.weathers = [];

            scope.onLocationSelect = location => {
                weatherService.getWeatherByLocation(location)
                    .then(weather => {
                        scope.weathers.push(weather);
                    });
            };

            scope.onCloseClick = idx => {
                scope.weathers.splice(idx, 1);
            }
        }
    };
}
