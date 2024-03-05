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