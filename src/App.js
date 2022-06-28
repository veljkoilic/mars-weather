import React, { useEffect, useState } from "react";
import SimpleSlider from "./components/SimpleSlider";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sol from "./components/Sol"


function App() {
  //Fetch Nasa Mars weather data
  const API_URL = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json"
  const [weatherData, setWeatherData] = React.useState([])
  React.useEffect(()=>{
    fetch(API_URL)
      .then(res => res.json())
        .then(data => setWeatherData(data.soles.slice(0,7))) // Getting only the last 7 days
  }, [])

  const sols = weatherData.map((sol) => {
    return <div key={sol.id}><Sol sol= {sol} ></Sol></div>
  })


 //Slide number changes based on with
 //To avoid re-rendering the component on every resize, useEffect watches the bracket const which only changes if breakpoints are switched
 
 const [bracket, setBracket] = useState(()=>{
      if(window.innerWidth > 1400){
        return 3
      }
      else if(window.innerWidth < 800){
        return 1
      }
      else{
          return 2
      }  
 }) 
  window.addEventListener('resize',()=>{
    if(window.innerWidth > 1400){
      setBracket(3)
    }
    else if(window.innerWidth < 800){
      setBracket(1)
    }
    else{
        setBracket(2)
    }  
  })

  useEffect(()=>{
    if(bracket == 3){
      setSettings(prevSettings=>{
        return {
          ...prevSettings,
          slidesToShow: 3
        }
      })
    }
    else if(bracket == 1){
      setSettings(prevSettings=>{
        return {
          ...prevSettings,
          slidesToShow: 1
        }
      })
    }
    else if(bracket == 2){
      setSettings(prevSettings=>{
        return {
          ...prevSettings,
          slidesToShow: 2
        }
      })
    }  
  }, [bracket])
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: bracket,
    swipeToSlide: true,

  })

  return (
    <div className="App">
      <Header/>
      <section className="forecast">
        <SimpleSlider sols = {sols} settings={settings}></SimpleSlider>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
