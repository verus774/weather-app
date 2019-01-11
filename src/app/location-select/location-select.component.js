import template from './location-select.component.html';
import './location-select.component.css';

class controller {
    constructor($rootScope, weatherService) {
        this.$rootScope = $rootScope;
        this.weatherService = weatherService;
    }

    $onInit() {
        this.currLocation = '';
        this.locations = [];

        this.weatherService.getLocations()
            .then(locations => this.locations = locations);

        this.onWeatherCloseUnsub = this.$rootScope.$on('onWeatherClose', (event, data) => {
            this.locations.push(data.location);
        });
    }

    $onDestroy() {
        this.onWeatherCloseUnsub();
    }

    onAddClick() {
        if (this.currLocation) {
            this.locations = this.locations.filter(item => item !== this.currLocation);
            this.onLocationSelect({location: this.currLocation});
        }
    }
}

export default {
    template,
    controller,
    bindings: {
        onLocationSelect: '&',
    },
}
