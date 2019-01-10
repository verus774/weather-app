export default ($http, $q) => {
    const weathers = [
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

    const getWeatherByLocation = location => {
        const weather = weathers.find(item => item.location.toLowerCase() === location.toLowerCase());
        return $q.when(weather);
    };

    const getLocations = () => {
        const locations = weathers.map(weather => weather.location);
        return $q.when(locations);
    };

    return {
        getWeatherByLocation,
        getLocations,
    };
}
