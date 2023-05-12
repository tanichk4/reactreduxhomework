import React from "react";
import Film from "./Film.js";
import { useSelector } from "react-redux";

const Films = () => {
  const films = useSelector((state) => state.films.films);

  if (!films.length) {
    return <div>Фільмів поки немає</div>;
  }
  return (
    <div>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export default Films;
