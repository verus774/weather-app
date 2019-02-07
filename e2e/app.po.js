module.exports = class {
    constructor() {
        this.addButton = element(by.css('.add-btn'));
        this.currLocationModel = element(by.model('$ctrl.currLocation'));
        this.weatherList = element.all(by.repeater('weather in $ctrl.weathers'));
    }

    go() {
        browser.get('/');
        browser.waitForAngular();
    }

    addWeather(location) {
        browser.sleep(500);

        this.currLocationModel.sendKeys(location);
        browser.sleep(500);

        this.addButton.click();
        browser.sleep(1000);
    }
};
