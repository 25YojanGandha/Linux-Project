import './Weather.css';
import React, { useEffect, useState } from 'react';

const api = {
    key: 'bbf48ed58cf4d024e1969d4d5f15541f',
    base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
    const dateDetail = (dateObject) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[dateObject.getDay()];
        let date = dateObject.getDate();
        let month = months[dateObject.getMonth()];
        let year = dateObject.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    let [updatedData, setUpdatedData] = useState('Delhi');
    let [weather, setWeather] = useState({});

    function fetchData(e) {
        if (e.key === "Enter") {

            console.log(updatedData);

            fetch(`${api.base}weather?q=${updatedData}&units=metric&APPID=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    weather=result;
                    setWeather(result);
                    setUpdatedData('');

                    // console.log(weather.main.temp);
                });
        }
    }

    useEffect(() => {
        fetch(`${api.base}weather?q=${updatedData}&units=metric&APPID=${api.key}`)
            .then(response => response.json())
            .then(result => {
                weather=result;
                setWeather(result);

                console.log(result);
            });
    },[])

    // useEffect(() => {
    //     console.log("useEffect has been called!", weather);
    // }, [weather]);

    return (
        <div className="weather-container cloud ">

            <div className="weather-search">
                <input type="text" className="search-bar" placeholder="Type here" onChange={(e) => setUpdatedData(e.target.value)} value={updatedData} onKeyPress={fetchData} />
            </div>

            {
            (typeof weather.main!='undefined')?(

            <div className="weather-detail">
                <div className="location ">{weather.name} India</div>
                <div className="date-time">{dateDetail(new Date())}</div>
                <div className="temperature">{weather.weather[0].main+" "+Math.round(weather.main.temp)}°C</div>
                <div className="weather"></div>
            </div>
            ):''
                }
        </div>
    );
}

export default Weather; 