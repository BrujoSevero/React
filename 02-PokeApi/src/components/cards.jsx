import SingleCard from './singleCard'
import '../styles/card.css'
import 'animate.css';

export default function Cartas({poke, setPoke, pokemon, type}) {
    if(poke){
        return <></>
    }

    function tipo(pokemon){
        const tipos = []
            pokemon.types.map((elem)=>{
                tipos.push(elem.type.name)
            })
            return tipos
    }
   
    const iconos = {
        grass : './assets/img/types/grass.png',
        water : './assets/img/types/water.png',
        fire : './assets/img/types/fire.png', 
        electric : './assets/img/types/electric.png', 
        normal : './assets/img/types/normal.png', 
        poison : './assets/img/types/poison.png', 
        bug : './assets/img/types/bug.png', 
        fairy : './assets/img/types/fairy.png', 
        flying : './assets/img/types/flying.png', 
        ground : './assets/img/types/ground.png', 
        rock : './assets/img/types/rock.png', 
        ghost : './assets/img/types/ghost.png', 
        psychic : './assets/img/types/psychic.png', 
        ice : './assets/img/types/ice.png', 
        fighting : './assets/img/types/fighting.png'
    };

    const obtenerUrlTipo = type => iconos[type];

    if (type == "all") {
        return(
          <div className='row row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mx-auto'>
            {
              pokemon.map((carta) => {
                return(      
                    <SingleCard poke={carta} key={carta.id} setPoke={setPoke}/>      
                )
              })
            }
          </div>
        )
      }

    return (     
        <div className="row row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mx-auto">
            {pokemon.map((carta) => {
                const tipos = tipo(carta)
                if(tipos.includes(type)){
                    return (
                        <SingleCard poke={carta} key={carta.id} setPoke={setPoke}/>
                    )
                }
                })
            }
        </div>
    )
}