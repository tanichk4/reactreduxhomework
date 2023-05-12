import React from "react";
import Film from "./Film.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../redux/actions";

const CinemaFilms = () => {
  const {
    cinemaFilms: films,
    isLoading,
    error,
  } = useSelector((state) => state.films);
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>ERROR: {error}</p>;

  if (!films) {
    return (
      <div>
        <h2>Фільмів поки що немає</h2>
        <button onClick={() => dispatch(fetchFilms())}>
          Завантажити фільми
        </button>
      </div>
    );
  }

  return (
    <div>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export default CinemaFilms;
