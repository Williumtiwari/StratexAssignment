import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listActions } from "../store/list";

export default function Home() {
  const dispatch = useDispatch();
  let MoviesFavorites = useSelector((state) => state.favlist.movies);
  const [Movies, setMovies] = useState([]);
  const [Liked, setLiked] = useState(false);
  const [favMovies, setFavMovies] = useState([]);
  const addToFavorite = (el) => {
    if (favMovies.includes(el)) {
      console.log("Already liked");
    } else {
      favMovies.push(el);
      console.log(favMovies);
      dispatch(listActions.addToFav(el));
    }
  };

  const getPost = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_URL);
      const data = await res.json();
      setMovies(data);
    } catch (error) {}
  };
  useEffect(() => {
    getPost();
  }, []);
  Movies.sort((a, b) => {
    return b.rating - a.rating;
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="py-4 mb-2 border-b border-gray-600 w-full flex items-center justify-between px-10">
        <p className="font-bold">Movie List App</p>
        <Link
          to="/favorites"
          className="bg-slate-400 font-semibold px-4 py-2 rounded-md hover:bg-slate-300">
          Favorite Movie
        </Link>
      </div>
      <div className="flex flex-wrap w-full gap-y-5 lg:gap-x-0 gap-x-2 items-center justify-around">
        {Movies.map((el) => {
          return (
            <div
              className="p-8 w-96 h-72 relative flex flex-col items-center text-center justify-center bg-slate-200 rounded-md"
              key={el.id}>
              <button
                id={el.id}
                onClick={() => addToFavorite(el)}
                className={
                  "absolute top-8 left-8 w-12 h-12 rounded-full flex items-center justify-center "
                }>
                <img src="/Like.svg" alt="Like" className="w-7 h-7" />
              </button>
              <h3 className="text-slate-800 text-lg font-bold">{el.movie}</h3>
              <p className="text-slate-800 font-semibold">{el.rating}</p>
              <a
                href={el.imdb_url}
                className="bg-gray-400 mt-2 px-4 py-2 rounded hover:bg-gray-500">
                IMDB Link
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
