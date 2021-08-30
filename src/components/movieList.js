import React from 'react'
import MovieCard from './moviCard'
export default function MovieList({movieList}) {
    return (
        <div>
            {
                movieList.map( film => <MovieCard  film ={film}  /> )
            }
        </div>
    )
}
