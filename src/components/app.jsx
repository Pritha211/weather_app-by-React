import React, { useEffect, useState } from "react";

function App(){
    const [city,setCity]= useState("Kolkata");
    const[update,setUpdate] = useState(city);
    const[weatherData,setWeatherData] = useState("");

    function handleChange(event){
        var newVal = event.target.value;
        // console.log(event.target.value);
        setCity(newVal);
    }

    function buttonClick(){
        setUpdate(city);

    }

    useEffect( () => {
        const fetchData = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${update}&appid=359546274567b41a4c8423721088e44e&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
            console.log(data);
        };
        fetchData();
    },[update]);


    return (
        <div className="box">
            <h1>Weather App</h1>

        <button className="btn" onClick={buttonClick}>
        <input className="inputfield" type="search" name="inputbox" onChange={handleChange}></input>
        <i className="fa-solid fa-magnifying-glass search-btn"></i>
        </button>
        
        <div className="text-input">

        {weatherData.cod === 200 ? 
            <div>
            <h1>{weatherData.name}</h1>
            <h2>Temperature : {weatherData.main.temp}°C</h2>
            <p>Min temp: {weatherData.main.temp_min}°C || Max temp : {weatherData.main.temp_max}°C</p>
            </div>
            :
            <div>
            <h1>No Data Found</h1>
            <p>Try again.</p>
            </div>
        }
        </div> 
            
        </div>
    )
}

export default App;