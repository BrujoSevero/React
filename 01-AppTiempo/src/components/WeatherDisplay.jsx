import imagenes from "../assets/imagenes";

export default function WeatherDisplay({weather1, weather}){
    
    //Creamos un array de los días de la semana y obtenemos el día actual para luego retornarlo
    const dateBuilder = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];        
        const day = days[d.getDay()];

        return `${day}`        
    }

    return(
        <div className="card bg-light bg-opacity-25 mx-2">
            <div className="city">
                {typeof weather1.name !== "undefined" ? (
                    <h1>{weather1.name}, {weather1.sys.country}</h1>
                    ) : (
                    ""
                )}
            </div>
            <div className="grade">
                {typeof weather1.main !== "undefined" ? (
                    <h2>{Math.round(weather1.main.temp)}ºC</h2>
                    ) : (
                    ""
                )}
            </div>
            <div>
                {/*En cada caso comparamos lo que hay escrito en la api en la sección main, dependiendo de lo escrito se escogerá una 
                imagen u otra */}
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[0].weather[0].main == "Snow" ?
                    <img id="iconoPrincipal" src={imagenes.img3} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[0].weather[0].main == "Rain" ?
                    <img id="iconoPrincipal" src={imagenes.img5} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[0].weather[0].main == "Clouds" ?
                    <img id="iconoPrincipal" src={imagenes.img2} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[0].weather[0].main == "Clear" ?
                    <img id="iconoPrincipal" src={imagenes.img1} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[0].weather[0].main == "Storm" ?
                    <img id="iconoPrincipal" src={imagenes.img4} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
            </div>
            <div className="weather">
                {typeof weather1.weather != "undefined" ? (
                    <h2>{weather1.weather[0].description}</h2>
                    ) : (
                    ""
                )}                                 
            </div>
            <div className="row d-flex justify-content-center">
                <table className="table" style={{width: '20em'}}>
                    <tr>
                        {typeof weather1.dt != "undefined" ? (
                            <th colSpan={2} className="h4">{dateBuilder(new Date())}</th>
                            ) : (
                            ""
                        )}
                    </tr>
                    <tr>
                        {typeof weather1.wind != "undefined" ? (
                            <td>Wind {weather1.wind.speed} m/s</td>
                            ) : (
                            ""
                        )}
                        {typeof weather1.main != "undefined" ? (
                            <td>Pressure {weather1.main.pressure} hPa</td>
                            ) : (
                            ""
                        )}
                    </tr>
                    <tr>
                        {typeof weather1.main != "undefined" ? (
                            <td>Humidity {weather1.main.humidity} %</td>
                            ) : (
                            ""
                        )}
                        {typeof weather1.clouds != "undefined" ? (
                            <td>Cloudiness {weather1.clouds.all} %</td>
                            ) : (
                            ""
                        )}
                    </tr>
                </table>
            </div>
        </div>
    )
}