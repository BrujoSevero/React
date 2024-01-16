export default function Card({nombre}) {
    return(
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{nombre.pokemon_entries[0].pokemon_species.name}</h5>
            </div>
        </div> 
    )   
}