import React from 'react'

export default function MoviCard({film}) {

const rate=[]
const rest=[]
rate.length=film.rate
rest.length=5-film.rate
    return (
        <div>
        <img src= {film.img} alt='poster'/>
        <h1>  {film.title} </h1>
    {rate.fill(<i class="fas fa-star"></i>).concat(rest.fill(<i class="far fa-star"></i>))}
    <h4> {film.Description} </h4>
        </div>
    )
}
