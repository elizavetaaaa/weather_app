import React from 'react';

const Weather = ({weather}) => {
    const getTime = (myTime) => {
        let hours;
        let minutes;
        let tm = new Date(myTime * 1000);
        (tm.getHours() < 10) ? hours = `0${tm.getHours()}` : hours = tm.getHours();
        (tm.getMinutes() < 10) ? minutes = `0${tm.getMinutes()}` : minutes = tm.getMinutes();
        return `${hours} :  ${minutes}`;
    }

    const getMonth = () => {
        let month;
        switch (new Date().getMonth()) {
            case 0:
                month = "Jan";
                break;
            case 1:
                month = "Feb";
                break;
            case 2:
                month = "Mar";
                break;
            case 3:
                month = "Apr";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "Aug";
                break;
            case 8:
                month = "Sep";
                break;
            case 9:
                month = "Oct";
                break;
            case 10:
                month = "Nov";
                break;
            case 11:
                month = "Dec";
        }
        return month;

    }

    const getDay = (time) => {
        let dt = new Date(time * 1000);
        return `${dt.getDate()} ${getMonth()}`

    }
    return (
        <div className="weather_info">

            <div className="weather_top">
                <div className="weather_top_f">
                    <p className="date">{getDay(weather.dt)}, {getTime(weather.dt)}</p>
                    {/*<p className="place">{weather.name} {weather.sys.country}</p>*/}
                    <p className="temp"> {Math.round(weather.main.temp - 273.15)} °C</p>
                    <p className="feels_like">Feels like {Math.round(weather.main.feels_like - 273.15)}°</p>
                </div>

                <div className="weather_top_s">
                    <p className="description">{weather.weather.map(el => {
                        return el.description
                    })
                    }
                    </p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather"
                         className="img"/>
                </div>
            </div>

            <div className="weather_bottom">
                <p>Wind speed: {weather.wind.speed} m/s</p>
                <p>Sunrise: {getTime(weather.sys.sunrise)}</p>
                <p>Sunset: {getTime(weather.sys.sunset)}<span>{weather.name} {weather.sys.country}</span></p>
            </div>
        </div>
    );
};

export default Weather;