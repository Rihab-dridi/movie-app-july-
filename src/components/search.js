import React from "react";

export default function Search({setSearch}) {
  return (
    <div className="search-bar">
      <input
       placeholder="search by title "
       id="search"
       onChange={ (e)=> setSearch(e.target.value) } />
    </div>
  );
}
