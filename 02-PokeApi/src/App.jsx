import { useState, useEffect } from 'react'
import './App.css'
import Cartas from './components/cards'
import Card from './components/card'
import Form from './components/form'
import LoadingScreen from './components/loadingScreen'


function App() {  
  const [pokemon,setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [poke,setPoke]=useState('');
  const [type, setType] = useState("all");

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        const list = await response.json();
        const {results} = list;
        
        const newPokemon = results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();
          return poke;
        });

        setPokemon(await Promise.all(newPokemon));
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    };
    getPokemon();
  }, []);

  if(loading){
    return <div> {loading ? <LoadingScreen /> : 0 } </div>
  }
  
  return (
    <div className='fondo'>
      <header>
        <Form setPoke={setPoke} setType={setType}></Form>
      </header>
      <main className='mt-5'>        
        <Cartas pokemon={pokemon} poke={poke} setPoke={setPoke} value={poke} type={type}></Cartas>
        <Card poke={poke} setPoke={setPoke}></Card>
      </main>    
    </div>    
  ) 
}

export default App
