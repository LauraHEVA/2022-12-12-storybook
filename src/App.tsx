import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import { Movie } from "./types";
import "./components/Header/Header.css";
import "./components/Navigation/Navigation.css";
import "./components/Hero/Hero.css";
import "./components/Button/Button.css";
import "./components/MoviesList/MoviesList.css";
import "./components/MovieCard/MovieCard.css";
import Hero from "./components/Hero/Hero";

const App = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState({} as Movie);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Movie[]>(process.env.REACT_APP_API_URL!);
      setMovies(data);
      setFeaturedMovie(data.find((movie) => movie.featured)!);
    })();
  }, []);

  return (
    <Layout>
      <Hero featuredMovie={featuredMovie}/>
      <section className="movies-block">
        <h2>Movies list</h2>
        <ul className="movies">
          {movies.map((movie) => (
            <li key={movie.id}>
              <article className="movie">
                <img
                  className="movie__poster"
                  src={movie.poster}
                  alt={`Poster of the movie ${movie.title}`}
                />
                <div className="movie__info movie__info--condensed">
                  <h3 className="movie__title">{movie.title}</h3>
                  <span className="movie__text">{movie.director}</span>{" "}
                  <span className="movie__text">({movie.year})</span>
                  <span className="movie__category">{movie.category}</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default App;
