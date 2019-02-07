const LocationSelectPage = require('./app.po');

describe('Component - locationSelect:', () => {
    const page = new LocationSelectPage();

    beforeEach(() => {
        page.go();
    });

    it('should add weather item to list', () => {
        page.addWeather('Minsk');
        page.addWeather('London');

        expect(page.weatherList.count()).toEqual(2);
    });

});
