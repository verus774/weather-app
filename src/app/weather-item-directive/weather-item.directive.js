import template from './weather-item.directive.html';
import './weather-item.directive.css';

export default ($rootScope) => {
    return {
        restrict: 'E',
        template,
        scope: {
            weather: '=',
            onClose: '&',
        },
        link: (scope, element, attrs) => {
            scope.onCloseClick = weather => {
                scope.onClose();
                $rootScope.$emit('onWeatherClose', weather);
            }
        }
    };
}
