import React from "react";
import Film from "./Film.js";

import { connect } from "react-redux";

const MyFilms = ({ films }) => {
  if (!films.length) {
    return <div>Поки не хочу нічого дивитись</div>;
  }
  return (
    <div>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films.films,
  };
};

export default connect(mapStateToProps, null)(MyFilms);
