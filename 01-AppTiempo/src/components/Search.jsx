export default function Search(){
    return(
        <div className="input-group">
            <input type="search" className="form-control ms-2" placeholder="Search for a city..."/>
            <button type="submit" className="btn me-2" data-mdb-ripple-init style={{background: '#353535'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </div>
    )
}