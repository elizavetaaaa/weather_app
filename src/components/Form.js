import React from 'react';
import axios from "axios";

const Form = ({setWeather, city, setCity}) => {
    const getWeather = (e) => {
        e.preventDefault();

        let API_KEY = '3cb451aa87758c21d677029ec4b2923e';
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data}) => setWeather(data))
            .catch(() => alert('Введите город корректно'));
        setCity('');
    };

    const inputHandler = (e) => {
        console.log(e);
        setCity(e.target.value);
    };
    return (
        <form action="" onSubmit={getWeather}>
            <input type="text" onChange={inputHandler} value={city} className='form_input' placeholder={'Enter the city'}/>
            <button type={"submit"} className='form_btn'>Search</button>
        </form>
    );
};

export default Form;

