import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function SerachBox({updateInfo}){

    let [city , setCity] = useState("");
    let [ error , setError] = useState(false);


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="7269cf8a1355a42337261434ed4cf47f";

    let weatherinfo = async ()=>{
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await response.json();
        console.log(jsonresponse);
 
        //creating an object to acces some property
        let result= {
         city:city,
         temp : jsonresponse.main.temp,
         tempMax: jsonresponse.main.temp_max,
         tempMin: jsonresponse.main.temp_min,
         humidity:jsonresponse.main.humidity,
         feelsLike :jsonresponse.main.feels_like,
         weather :jsonresponse.weather[0].description
         };
 
         console.log(result);
         return result;
       }
       catch(err){
           throw err;
       }
        
    }


    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit =  async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await weatherinfo();
        updateInfo(newinfo);
        }
        catch(err){
          setError(true);
        }

    }
    return(
     <div className="SearchBox"> 
         

        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br></br><br></br>
        <Button variant="contained" type="submit" >SEARCH</Button>
        {error && <p style={{color :"red"}}>No such place exit!</p>}
        </form>
     </div>
    ) ; 
}