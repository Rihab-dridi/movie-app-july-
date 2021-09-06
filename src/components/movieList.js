import React from "react";
import MovieCard from "./moviCard";
import Add from "./add";
import Search from "./search";
export default function MovieList({ movieList , search, addHandler}) {
 
  return (
    <div className="List">

    
      {movieList
      .filter(film=>  film.title.toLowerCase().includes(    search.toLowerCase().trim()   ) )
      .map((film,key) => (
        <MovieCard film={film}  key={film.id} />
      ))}


      <Add addHandler={addHandler}/>
    </div>
  );
}
