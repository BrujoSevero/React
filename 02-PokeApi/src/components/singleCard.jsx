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


export default function SingleCard({ poke, setPoke }) {

    function handleOnClick() {
        setPoke(poke)
    }

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
        <>
            <div className='col-12 col-md-6 col-lg-4'>
                <div className="card mt-5 border-black border-4 mb-4 bg-white text-black animate__animated animate__zoomIn" onClick={handleOnClick}>
                    <div className="card-body">
                        <h6 className="card-text w-25 mx-auto text-center text-black">Id {poke.id}</h6>
                        <h4 className="card-title w-100 mx-auto mt-2 text-center text-black">{poke.name.toUpperCase()}</h4>
                        <div className="card-img mx-auto">
                            <img className="h-100 w-100 pulsar animate__animated animate__tada" src={poke.sprites.other["official-artwork"].front_default} alt={poke.name} />
                        </div>
                        <h6 className="card-text w-50 mx-auto text-center text-black">Type</h6>
                        <p className="card-text w-50 mx-auto text-center text-black">{tipos()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}