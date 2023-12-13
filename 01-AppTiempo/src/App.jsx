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
      <header>
        
      </header>
      <div style={{border: '1px solid black'}}>
        <div>
          <Search />
        </div>
        <div>
          <MediumSquare />
        </div>
        <div>
          <SmallSquare />
          <SmallSquare />
          <SmallSquare />
          <SmallSquare />
        </div>
      </div>
    </div>
  )
}

export default App
