import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WeatherDisplay from './components/WeatherDisplay'
import WeatherForm from './components/ WeatherForm'

function App() {
  return (     
    <div className='container'>
      <WeatherForm/>
      <WeatherDisplay/>
    </div>
  )
}

export default App
