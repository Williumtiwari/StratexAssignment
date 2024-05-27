import { createSlice } from "@reduxjs/toolkit";

const localStorageFav = JSON.parse(localStorage.getItem("favlist"));

if (!localStorageFav) {
  const initalFavMovies = {
    Movies: [],
  };
  localStorage.setItem("favlist", JSON.stringify(initalFavMovies));
}

const initialState =
  JSON.parse(localStorage.getItem("favlist")) !== null
    ? JSON.parse(localStorage.getItem("favlist"))
    : { Movies: [] };

const listSlice = createSlice({
  name: "favlist",
  initialState,
  reducers: {
    addToFav(state, action) {
      const newMovie = action.payload;
      if (state.Movies.includes(newMovie)) {
        console.log("Already liked");
      } else {
        state.Movies.push(newMovie);
        localStorage.setItem("favlist", JSON.stringify(state));
      }
    },
    deleteFromFav(state, action) {
      const id = action.payload;
      state.Movies = state.Movies.filter((movie) => movie.id !== id);
      localStorage.setItem("favlist", JSON.stringify(state));
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
