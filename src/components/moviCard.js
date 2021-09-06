import React from "react";

export default function MoviCard({ film }) {
  const rate = [];
  const rest = [];
  rate.length = film.rate;
  rest.length = 5 - film.rate;
  return (
    <div className="MovieCard">
      <img className="poster" src={film.img} alt="poster" />
      <h1 className="title"> {film.title} </h1>
      {rate
        .fill(
          <span>
            {" "}
            <i class="fas fa-star"></i>
          </span>
        )
        .concat(rest.fill(<i class="far fa-star"></i>))}
      <h4> {film.Description} </h4>
    </div>
  );
}
