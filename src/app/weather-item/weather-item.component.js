import template from './weather-item.component.html';
import './weather-item.component.css';

class controller {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    onCloseClick(weather) {
        this.onClose();
        this.$rootScope.$emit('onWeatherClose', weather);
    }
}

export default {
    template,
    controller,
    bindings: {
        weather: '<',
        onClose: '&',
    },
}
