export default ($http, $q) => {
    const API_KEY = 'm17GZoZVsXK9gBqlzqWNoIfx71LVRF4S';
    const API_URL = 'http://dataservice.accuweather.com';
    const ICONS_URL = 'https://developer.accuweather.com/sites/default/files';

    const locations = ['Minsk', 'Paris', 'London', 'New York'];

    const getLocationKey = location => {
        return $http.get(`${API_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`)
            .then(res => res.data[0].Key)
            .catch(console.log);
    };

    const mapWeatherResponse = (res, location) => {
        const img = res.WeatherIcon < 10 ? "0" + res.WeatherIcon : res.WeatherIcon;

        return {
            temp: res.Temperature.Value,
            img: `${ICONS_URL}/${img}-s.png`,
            location,
        }
    };

    const getWeatherByLocation = location => {
        return getLocationKey(location)
            .then(locationKey => $http.get(`${API_URL}/forecasts/v1/hourly/1hour/${locationKey}?apikey=${API_KEY}&metric=true`))
            .then(res => res.data[0])
            .then(res => mapWeatherResponse(res, location))
            .catch(console.log);
    };

    const getLocations = () => {
        return $q.when(locations);
    };

    return {
        getWeatherByLocation,
        getLocations,
    };
}
