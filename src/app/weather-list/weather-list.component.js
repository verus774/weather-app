import template from './weather-list.component.html';
import './weather-list.component.css';

class controller {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }

    $onInit() {
        this.weathers = [];
        this.currLocation = '';
        this.weatherService.getLocations().then(locations => this.locations = locations);
    }

    onAddClick() {
        this.weatherService.getWeatherByLocation(this.currLocation)
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
