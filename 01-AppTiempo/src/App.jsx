import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SmallSquare from './components/SmallSquare'
import MediumSquare from './components/MediumSquare'
import Search from './components/Search'

function App() {
  return (     
    <div>
      <Search />
      <MediumSquare />
      <SmallSquare />
      <SmallSquare />
      <SmallSquare />
      <SmallSquare />
    </div>
  )
}

export default App
