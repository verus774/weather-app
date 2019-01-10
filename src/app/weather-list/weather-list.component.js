import template from './weather-list.component.html';
import './weather-list.component.css';

class controller {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }

    $onInit() {
        this.weathers = [];
    }

    onLocationSelect(location) {
        this.weatherService.getWeatherByLocation(location)
            .then(weather => {
                this.weathers.push(weather);
            });
    }

    onCloseClick(idx) {
        this.weathers.splice(idx, 1);
    }
}

export default {
    template,
    controller,
}
