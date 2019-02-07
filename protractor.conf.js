const {exec} = require('child_process');

let webpackServerProcess;

exports.config = {
    specs: [
        'e2e/**/*.e2e.js',
    ],
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                // '--headless',
                '--disable-gpu',
                '--disable-infobars',
            ]
        }
    },
    directConnect: true,
    baseUrl: 'http://localhost:8080',
    framework: 'jasmine',

    beforeLaunch: () => {
        webpackServerProcess = exec('webpack-dev-server --mode development');
    },

    onCleanUp: () => {
        process.kill(webpackServerProcess.pid);
    }

};
