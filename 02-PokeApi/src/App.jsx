import { useState } from 'react'
import './App.css'
import Card from './components/Card';

async function App() {

  const url = 'https://pokeapi.co/api/v2/pokedex/2/';
  const options = {
    method: 'GET'
  };

  const [nombre, setNombre] = useState('');
  
  try {
    const response = fetch(url, options).then((result) => result.json()).then(setNombre(result));
  } catch (error) {
    console.error(error);
  }    

  return (
    <>
      <Card nombre={nombre}></Card>
    </>
  )
}

export default App
