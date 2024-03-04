import '../styles/card.css'
import 'animate.css';

export default function SingleCard({poke, setPoke}){

    function handleOnClick(){
        setPoke(poke)
    }

    function tipo() {
        return poke.types.map(tipo => tipo.type.name).join(", ");
    }

    return(
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
                        <p className="card-text w-50 mx-auto text-center text-black">{tipo()}</p>
                    </div>
                </div>
            </div>          
        </>
    )
}