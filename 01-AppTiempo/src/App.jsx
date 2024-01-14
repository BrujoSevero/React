import { useState } from 'react'
import './App.css'

import SmallSquare from './components/SmallSquare'
import WeatherDisplay from './components/WeatherDisplay'
import WeatherForm from './components/ WeatherForm'

function App() {

  const api1 = {
    key: "d5131b049e69f779b34e67809f654bc9",
    base: "https://api.openweathermap.org/data/2.5/weather"
  }

  const api = {
    key: "d5131b049e69f779b34e67809f654bc9",
    base: "https://api.openweathermap.org/data/2.5/forecast"
  }

  const [search1, setSearch1] = useState('')
  const [weather1, setWeather1] = useState('')

  const [search, setSearch] = useState('')
  const [weather, setweather] = useState('')

  const searchPressed = (f1,f2) => {

    f1 = fetch(`${api.base}?q=${search}&units=metric&appid=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setweather(result);
    });

    f2 = fetch(`${api1.base}?q=${search1}&units=metric&appid=${api1.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather1(result);
      });
    

  }

  //Día actual
  const today = new Date();
  const dias = today.getDay();
  //Array de los días de la semana
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //Función para sacar los días
  function sumDay(dias) {
      return dias % 7
  }
  //sumamos a nuestro día actual tantas veces como cuadros tengamos
  const day2 = sumDay(dias + 1);
  const dia2 = days[day2];

  const day3 = sumDay(dias + 2);
  const dia3 = days[day3];

  const day4 = sumDay(dias + 3);
  const dia4 = days[day4];

  const day5 = sumDay(dias + 4);
  const dia5 = days[day5];

  return (     
    <div>
      <main className=''>
        <div className=''>
          <WeatherForm setSearch1={setSearch1} setSearch={setSearch} searchPressed={() => searchPressed}/>
        </div>
        <WeatherDisplay weather1={weather1} weather={weather}/>
        <div className="">
          <SmallSquare weather={weather} num={1} weekDay={dia2}/>
          <SmallSquare weather={weather} num={2} weekDay={dia3}/>
          <SmallSquare weather={weather} num={3} weekDay={dia4}/>
          <SmallSquare weather={weather} num={4} weekDay={dia5}/>
        </div>
      </main>
    </div>
  )
}

export default App
