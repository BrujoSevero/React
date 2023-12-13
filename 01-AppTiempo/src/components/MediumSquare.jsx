export default function MediumSquare(){
    return(
        // <section className="card" style={{width: '10rem', height: '10rem', border: '1px solid black', display: 'inline-block', borderRadius: '0rem'}}>
        //     <div>
        //         <h2 style={{fontSize: 'x-large', justifyContent:"end", border: '1px solid black', alignItems:"flex-start"}}>Day</h2>
        //     </div>
        //     <div>
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
        //         <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        //         </svg>
        //     </div>
        //     <div>
        //         <h2 style={{fontSize: 'x-large'}}>Grade</h2>
        //         <h3 style={{fontSize: 'large'}}>Weather</h3>
        //         <h1>git status</h1>
        //     </div>   
        // </section> 
        
        <div className="card transparencia bg-transparent">
            <div><h1>City</h1></div>
            <div><h2>Grade</h2></div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg>
            </div>
            <div><h2>Weather</h2></div>
            <div>
                <table className="table" style={{border: '1px solid black'}}>
                    <tr>
                        <th colspan="2">TimeDate</th>
                    </tr>
                    <tr>
                        <td>Wind</td>
                        <td>Preasure</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>Cloudiness</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}