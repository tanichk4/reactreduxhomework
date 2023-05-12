import React from "react";
import Form from "./Components/Form";
import Films from "./Components/Films";
import CinemaFilms from "./Components/CinemaFilms";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Form />
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync films</h2>
          <Films />
        </div>
        <div className="col">
          <h2>Async film</h2>
          <CinemaFilms />
        </div>
      </div>
    </div>
  );
};

export default App;
