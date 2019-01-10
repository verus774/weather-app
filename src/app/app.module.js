import angular from 'angular';

import AppComponent from './app.component';
import WeatherItemComponent from './weather-item/weather-item.component';

angular.module('weather-app', [])
    .component('app', AppComponent)
    .component('weatherItem', WeatherItemComponent);
