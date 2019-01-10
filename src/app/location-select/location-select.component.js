import template from './location-select.component.html';
import './location-select.component.css';

class controller {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }

    $onInit() {
        this.currLocation = '';
        this.weatherService.getLocations()
            .then(locations => this.locations = locations);
    }

    onAddClick() {
        this.onLocationSelect({location: this.currLocation});
    }
}

export default {
    template,
    controller,
    bindings: {
        onLocationSelect: '&',
    },
}
