import angular from 'angular';

import weatherService from './weather.service';
import AppComponent from './app.component';
import WeatherItemComponent from './weather-item/weather-item.component';
import WeatherListComponent from './weather-list/weather-list.component';
import LocationSelectComponent from './location-select/location-select.component';
import WeatherItemDirective from './weather-item-directive/weather-item.directive';

angular.module('weather-app', [])
    .factory('weatherService', weatherService)
    .component('app', AppComponent)
    .component('weatherItem', WeatherItemComponent)
    .component('weatherList', WeatherListComponent)
    .component('locationSelect', LocationSelectComponent)
    .directive('weatherItemDir', WeatherItemDirective);
