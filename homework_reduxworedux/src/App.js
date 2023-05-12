import React from "react";
import Form from "./Components/Form";
import MyFilms from "./Components/MyFilms";
import CinemaFilms from "./Components/CinemaFilms";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Form />
      </div>
      <div className="row">
        <div className="col">
          <h2>Мій список фільмів до перегляду</h2>
          <MyFilms />
        </div>
        <div className="col">
          <h2>Що цікавого в CinemaCity:</h2>
          <CinemaFilms />
        </div>
      </div>
    </div>
  );
};

export default App;
