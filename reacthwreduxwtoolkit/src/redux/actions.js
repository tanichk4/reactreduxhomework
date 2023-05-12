import { CREATE_FILM, FETCHED_FILM, HIDE_LOADER, SHOW_LOADER } from "./types";

export const createFilm = (payload) => {
  return { type: CREATE_FILM, payload };
};

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchFilms() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "https://my.api.mockaroo.com/cinema.json?key=778301b0"
    );
    const json = await response.json();

    setTimeout(() => {
      dispatch({ type: FETCHED_FILM, payload: json });

      dispatch(hideLoader());
    }, 1000);
  };
}
