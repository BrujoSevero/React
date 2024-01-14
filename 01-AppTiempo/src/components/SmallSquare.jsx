import imagenes from "../assets/imagenes";

export default function SmallSquare({weather, num, weekDay}){
    return(        
        <div className="card bg-light bg-opacity-25 mx-2" style={{width: '18rem', display: 'inline-block'}}>
            {typeof weather.list != "undefined" ? (
                <div className="Day"><h4>{weekDay}</h4></div>
                ) : (
                ""
            )}
            <div>
            {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[num].weather[0].main == "Snow" ?
                    <img id="icono" src={imagenes.img3} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[num].weather[0].main == "Rain" ?
                    <img id="icono" src={imagenes.img5} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[num].weather[0].main == "Clouds" ?
                    <img id="icono" src={imagenes.img2} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[num].weather[0].main == "Clear" ?
                    <img id="icono" src={imagenes.img1} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
                {typeof weather.list != "undefined" ?
                <div>
                    {weather.list[num].weather[0].main == "Storm" ?
                    <img id="icono" src={imagenes.img4} className="card-img-top" />
                    :
                    ' '
                    }
                </div>
                :
                ' '
                }
            </div>
            <div className="Grade">
                {typeof weather.list != "undefined" ? (
                    <h4>{Math.round(weather.list[num].main.temp)} ºC</h4>
                    ) : (
                    ""
                )}
            </div>
            <div className="Weather">
                {typeof weather.list != "undefined" ? (
                    <h4>{weather.list[num].weather[0].description}</h4>
                    ) : (
                    ""
                )}
            </div>
        </div>
    )
}
