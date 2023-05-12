import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../redux/actions";
import Film from "./Film";

const CinemaFilms = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.CinemaFilms);

  const loading = useSelector((state) => state.app.loading);
  
  const handleFetchFilms = () => {
    dispatch(fetchFilms());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!films) {
    return (
      <div>
        <h2>Фільмів поки немає</h2>
        <button onClick={handleFetchFilms}>Завантажити фільми</button>
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
