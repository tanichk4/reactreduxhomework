import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFilm } from "../redux/reducers/filmsSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
  });

  const { title } = input;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newFilm = {
      title,
      id: Date.now().toString(),
    };
    dispatch(createFilm(newFilm));

    setInput({ title: "" });
  };

  const inputHandler = (event) => {
    setInput({
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Заголовок фільму</h2>
      <input
        type="text"
        placeholder="введіть текст"
        value={title}
        onChange={inputHandler}
        name="title"
      />
      <button type="submit">Створити фільм</button>
    </form>
  );
};

export default Form;
