import React from 'react'
import { useLocation } from 'react-router-dom'


export default function DetailMovie(props) {
    const location = useLocation();
    const movie = location.state;

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>{movie.titulo}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={movie.portada} alt="" />
                    </div>
                    <div className="col">
                        <p>{movie.sinopsis}</p>
                        <ul>
                            <li>Director: {movie.director}</li>
                            <li>Actor: {movie.actores.map((actor) => {
                                return <p className='ml-3'>{actor}</p>
                            })}</li>
                            <li>Genero: {movie.genero} </li>
                            <li>Fecha de estreno: {movie.anio}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
