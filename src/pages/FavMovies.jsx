import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listActions } from "../store/list";

function FavMovies() {
  const favmovies = useSelector((state) => state.favlist.Movies);
  const [favMovies, setFavMovies] = React.useState(favmovies);
  const dispatch = useDispatch();
  const removeFromFavorite = (el) => {
    console.log(favMovies);
    favMovies.splice(favMovies.indexOf(el), 1);
    dispatch(listActions.deleteFromFav(el));
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="py-4 mb-2 border-b border-gray-600 w-full flex items-center justify-between px-10">
        <p className="font-bold">Movie List App</p>
        <Link
          to="/"
          className="bg-slate-400 font-semibold px-4 py-2 rounded-md hover:bg-slate-300">
          Home
        </Link>
      </div>
      <div className="flex flex-wrap w-full gap-y-5 lg:gap-x-0 gap-x-2 items-center justify-around">
        {favmovies.map((el) => {
          return (
            <div
              className="p-8 w-96 h-72 relative flex flex-col items-center text-center justify-center bg-slate-200 rounded-md"
              key={el.id}>
              <button
                id={el.id}
                onClick={() => removeFromFavorite(el)}
                className={
                  "absolute top-8 left-8 w-12 h-12 rounded-full flex items-center justify-center "
                }>
                <img src="/Liked.svg" alt="Like" className="w-7 h-7" />
              </button>
              <h3 className="text-slate-800 text-lg font-bold">{el.movie}</h3>
              <p className="text-slate-800 font-semibold">{el.rating}</p>
              <a
                href={el.imdb_url}
                className="bg-gray-400 mt-2 px-4 py-2 rounded text-black hover:bg-gray-500">
                IMDB Link
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavMovies;
