import template from './location-select.directive.html';
import './location-select.directive.css';

export default ($rootScope, weatherService) => {
    return {
        restrict: 'E',
        template,
        scope: {
            onLocationSelect: '&',
        },
        link: (scope, element, attrs) => {
            scope.currLocation = '';
            scope.locations = [];

            weatherService.getLocations()
                .then(locations => scope.locations = locations);

            scope.onWeatherCloseUnsub = $rootScope.$on('onWeatherClose', (event, data) => {
                scope.locations.push(data.location);
            });

            scope.$on('$destroy', () => {
                scope.onWeatherCloseUnsub();
            });

            scope.onAddClick = () => {
                if (scope.currLocation) {
                    scope.locations = scope.locations.filter(item => item !== scope.currLocation);
                    scope.onLocationSelect({location: scope.currLocation});
                }
            }
        }
    };
}
