import React from "react";
import { connect } from "react-redux";
import { createFilm } from "../redux/actions";
class Form extends React.Component {
  state = {
    title: "",
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return;
    }

    const newFilm = {
      title,
      id: Date.now().toString(),
    };

    this.props.createFilm(newFilm);

    this.setState({ title: "" });
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Заголовок фільма</h2>
        <input
          type="text"
          placeholder="введіть текст"
          value={this.state.title}
          onChange={this.inputHandler}
          name="title"
        />
        <button type="submit">Додати фільм</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFilm: (film) => dispatch(createFilm(film)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
