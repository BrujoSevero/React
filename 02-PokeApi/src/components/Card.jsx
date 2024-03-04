import {useState, useEffect} from 'react';
import './stats.js';
import SingleCard from './singleCard';
import 'animate.css';

const Card = ({poke}) => {
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
                return 'progress-bar-hp';
            case 'attack':
                return 'progress-bar-attack';
            case 'defense':
                return 'progress-bar-defense';
            case 'special-attack':
                return 'progress-bar-special-attack';
            case 'special-defense':
                return 'progress-bar-special-defense';
            case 'speed':
                return 'progress-bar-speed';                                                
        }
    }

    return (
        <div className='card bg-white bg-opacity-75 mx-auto'>
            <div className=" card bg-white bg-opacity-75 mx-auto d-flex" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className="card-body col col-md-4 col-lg-6">
                    <h2 className="card-title">{poke.name.toUpperCase()}</h2>
                    <br></br>
                    <h5 className="titulo-seccion">Abilities:</h5>
                    {poke.abilities.map(a => a.ability.name)}
                    <h5 className="card-title">Stats:</h5> 
                    {poke.stats.map(stat =>
                    <div key={stat.id}>
                        <h6>{stat.stat.name}</h6>
                        <div className="progress" style={{color: `${getProgressBarClass(stat.name)}`}}>                        
                            <div className="progress-bar progress-bar-striped" style={{width: `${stat.base_stat}%`}} role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                {stat.base_stat}
                            </div>
                        </div>
                    </div>
                    )}
                    <h6>Total points: {poke.stats.map((x, y) => (x.base_stat + (y - y))).reduce((x, y) => x + y)} Pts.</h6>
                    <h5 className="card-title">Type:</h5>
                    {poke.types.map((t, index) => <p key={index}>{t.type.name}</p>)}

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
                    {chainEvolution.map((name, index) => <SingleCard poke={name} key={name + index}/>)}
                </div>
            </div>
        </div>        
   
    );

};

export default Card;