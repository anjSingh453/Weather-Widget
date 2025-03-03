import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox"
import {useState} from "react";

export default function WeatherApp(){
    
    const [weatherInfo , setWeatherInfo] = useState({
        city: "delhi",
        feelslike : 28.3,
        temp : 25.05,
        tempMin : 25.0,
        tempMax : 89.0,
        humidity : 47,
        weather : "haze",
    });

    let updateInfo = (newinfo) =>{
      setWeatherInfo(newinfo);
    }


    return (
        <div stye={{textAlign :"centre"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/> 
        </div>
    )
}