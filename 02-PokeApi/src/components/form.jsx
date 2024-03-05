import { useState } from 'react'
import '../styles/card.css'

export default function Form({setType, setPoke}) {

    const [search, setSearch] = useState('')

    const tipos  = ["all", "grass", "fire", "steel", "water", "ground", "normal", "poison", "fighting", "dragon", "bug", "fairy", "flying", "rock", "electric", "ghost","psychic", "ice"]

    async function handleSubmit(e){
        e.preventDefault()        
        if (search == "") {
            setType("all")
            setPoke()
            return
        }
        const busqueda = search.toLowerCase()
        if(tipos.includes(busqueda)){
            setType(busqueda)
            setPoke()
        }else{
            const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + busqueda)
            if (respuesta.ok) {
                const respuestaJson = await respuesta.json()
                await Promise.resolve(respuestaJson).then(value => setPoke(value))
            } else {
                console.error('No se encuentra');
            }
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black fixed-top">
                <div className="container-fluid d-flex">
                    <a className="border-1 " href='../index.html'><img src="../src/assets/img/logo.png" width="80px"/></a>   
                    <form role="search" onSubmit={handleSubmit} className='input-group w-50'>
                        <input type="text" className="form-control" placeholder="nombre o id pokemon" onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn me-2" type="submit" value="Submit" style={{background: '#000000'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button> 
                    </form>                    
                </div>
            </nav>         

        </>

    );
}