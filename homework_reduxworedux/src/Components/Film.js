import React from "react";

const Film = ({ film }) => {
  return (
    <div className="film">
      <h1 className="film-title">{film.title}</h1>
      <h2 className="film-day">{film.day}</h2>
      <p className="film-time">{film.time}</p>
    </div>
  );
};

export default Film;
