import React, {useState} from 'react'
import Form from './Components/Form'
import Weather from './Components/Weather'
import Home from './Components/Home'
import './App.css'
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [weather,setWeather] = useState({
    city:"",
    temp:""
  })
  const APIKEY = "0386909e9bfb466193a9c1efaca2ca5d"

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    

      e.preventDefault()
    const apiData = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${APIKEY}`)
      .then( res => res.json())
    
      setWeather({
        
        city:apiData.data[0].city_name,
        temperature: apiData.data[0].temp,
       
      });

      console.log(apiData);
      console.log(apiData.data);
      console.log(apiData.data[0].temp);
      console.log(apiData.data[0].city_name);
      
  }

  return (
    <div className="App">
      <Home />

      <Form getWeather={fetchData} />
      <Weather
      city={weather.city}
      temperature={weather.temperature}
      
      />
      {console.log(weather.data)}
      

      
    </div>
  );
}
export default App
