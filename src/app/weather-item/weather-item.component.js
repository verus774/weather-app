import template from './weather-item.component.html';
import './weather-item.component.css';

class controller {
    onCloseClick(id) {
        this.onClose({id});
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
