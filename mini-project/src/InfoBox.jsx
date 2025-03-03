import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./InfoBox.css";

export default function InfoBox({info}){

    const IMG_URL= "https://images.unsplash.com/photo-1722858344552-7acf888a7046?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL ="https://media.istockphoto.com/id/92269080/photo/journey.webp?a=1&b=1&s=612x612&w=0&k=20&c=_2rWOw3653mr1fVrO_RdxMlFiEv2M64hRj1EKgBPlDY=";

    const COLD_URL ="https://media.istockphoto.com/id/172699850/photo/climbing-everest.webp?a=1&b=1&s=612x612&w=0&k=20&c=s5kd-OXe8i0CSAYS0Ki1z0goJ-Mn1HbeGQfn8HnIemc=";

    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1733436275328-bbb7da0fe4ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMFdFQVRIRVIlMjBJTUFHRVN8ZW58MHx8MHx8fDA%3D";
    
    return (
        <div className="InfoBox">


          <div className="cardContainer"> 
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <LightModeIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min temp ={info.tempMin}&deg;C</p>
         <p>Max temp = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
       
    </Card>
    </div>

        </div>
    )
}