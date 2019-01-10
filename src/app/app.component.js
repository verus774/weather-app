import template from './app.component.html';
import './app.component.css';

class controller {
    constructor() {
        this.weathers = [
            {
                id: '1',
                location: 'Minsk',
                img: 'assets/img/sunny.png',
                temp: 25,
            },
            {
                id: '2',
                location: 'Paris',
                img: 'assets/img/rain.png',
                temp: 20,
            },
            {
                id: '3',
                location: 'London',
                img: 'assets/img/clouds.png',
                temp: 15,
            },
        ];
    }

    onCloseClick(id) {
        console.log(id);
    }
}

export default {
    template,
    controller,
}
