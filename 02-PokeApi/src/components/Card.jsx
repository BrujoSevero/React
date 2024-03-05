import {useState, useEffect} from 'react';
import './stats.js';
import SingleCard from './singleCard';
import '../styles/card.css'
import 'animate.css';
import grass from '../assets/img/types/grass.png'
import water from '../assets/img/types/water.png'
import fire from '../assets/img/types/fire.png'
import electric from '../assets/img/types/electric.png'
import normal from '../assets/img/types/normal.png'
import poison from '../assets/img/types/poison.png'
import bug from '../assets/img/types/bug.png'
import fairy from '../assets/img/types/fairy.png'
import flying from '../assets/img/types/flying.png'
import ground from '../assets/img/types/ground.png'
import rock from '../assets/img/types/rock.png'
import ghost from '../assets/img/types/ghost.png'
import psychic from '../assets/img/types/psychic.png'
import ice from '../assets/img/types/ice.png'
import fighting from '../assets/img/types/fighting.png'

const Card = ({poke, setPoke}) => {
    if(!poke){
        return <></>
    }

    const[chainEvolution, setChainEvolution] = useState([]);

    useEffect(() => {
        const fetchPokemonDetails = async (name) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const response = await fetch(url);
            return response.json();
        };

        const evolution = async () => {
            const pokemons = await fetch(poke.species.url).then(data => data.json());
            const chainEvo = await fetch(pokemons.evolution_chain.url).then(data => data.json());
    
            const extractNames = (chain, names = []) => {
                names.push(chain.species.name);
                chain.evolves_to.forEach(evo => extractNames(evo, names));
                return names;
            };
    
            const evolutionNames = extractNames(chainEvo.chain);

            const evolutionDetails = await Promise.all(evolutionNames.map(name => fetchPokemonDetails(name)));
            setChainEvolution(evolutionDetails);
        };
        evolution();
    }, [poke.species.url]);

    function getProgressBarClass(name) {
        switch (name) {
            case 'hp':
                return '#28a745';
            case 'attack':
                return '#DB1D1D';
            case 'defense':
                return '#1DDBCF';
            case 'special-attack':
                return '#7F1DDB';
            case 'special-defense':
                return '#1D48DB';
            case 'speed':
                return '#E8E21E';                                                
        }
    }

{/**     const barStyle = {
    backgroundColor: getProgressBarClass(name),
    };
*/}

    function iconosClases(key) {
        switch (key) {
            case 'grass':
                return grass
            case 'water':
                return water
            case 'fire':
                return fire;
            case 'electric':
                return electric;
            case 'normal':
                return normal;
            case 'poison':
                return poison;
            case 'bug':
                return bug;
            case 'fairy':
                return fairy;
            case 'flying':
                return flying;
            case 'ground':
                return ground;
            case 'rock':
                return rock;
            case 'ghost':
                return ghost;
            case 'psychic':
                return psychic;
            case 'ice':
                return ice;
            case 'fighting':
                return fighting;
        }
    }

    function tipos() {
        // Mapeamos cada tipo a su nombre y su correspondiente URL de icono
        const tiposConIconos = poke.types.map(tipo => {
            const nombreTipo = tipo.type.name;
            return { nombre: nombreTipo};
        });

        // Mapeamos los objetos de tipos y los convertimos en una cadena que contiene tanto el nombre del tipo como su icono
        const tiposConIconosString = tiposConIconos.map(tipo => <img className='icono' src={iconosClases(tipo.nombre)} alt="" />);
        return tiposConIconosString;
    }

    return (
        <div className='card bg-white bg-opacity-75 mx-auto'>
            <div className=" card bg-white bg-opacity-75 mx-auto d-flex" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className="card-body col col-md-4 col-lg-6">
                    <h2 className="card-title">{poke.name.toUpperCase()}</h2>
                    <h5 className="titulo-seccion">Abilities:</h5>
                    {poke.abilities.map(a => <p>{a.ability.name}</p>)}
                    <h5 className="card-title">Stats:</h5> 
                    {poke.stats.map(stat =>
                    <div key={stat.id}>
                        <h6>{stat.stat.name}</h6>
                        <div className="progress">                        
                            <div className="progress-bar progress-bar-striped" style={{backgroundColor: `${getProgressBarClass(stat.stat.name)}`, width: `${stat.base_stat}%`}} role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                {stat.base_stat}
                            </div>
                        </div>
                    </div>
                    )}
                    <h6>Total points: {poke.stats.map((x, y) => (x.base_stat + (y - y))).reduce((x, y) => x + y)} Pts.</h6>
                    <h5 className="card-title">Type:</h5>
                    <p className="card-text">{tipos()}</p>

                    <button type="button" className="btn bg-dark text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Moves
                    </button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content bg-black">
                                <div className="modal-header">
                                    <h5 className="modal-title text-white">Moves</h5>
                                    <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal"/>
                                </div>
                                <div className="modal-body ">
                                    {poke.moves.map((m, index) => <p key={index} className="text-white">{m.move.name}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h4 className="text-center">Id {poke.id}</h4>
                    <img src={poke.sprites.other["official-artwork"].front_default} alt={poke.name} className="img-fluid  animate__animated animate__zoomIn" />
                </div>
            </div>
            <div className='align-items-center justify-content-center col col-12 col-sm-12'>
                <h2 className='text-center mt-5'>Chain Evolution</h2>
                <div className='row d-flex mx-auto'>
                    {chainEvolution.map((name, index) => <SingleCard poke={name} setPoke={setPoke} key={index}/>)}
                </div>
            </div>
        </div>        
   
    );

};

export default Card;