import { useEffect, useState } from "react";
import { useSelectedGenreContext } from "../contexts/SelectedGenreContext";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";
import { Genre } from "./SideBar";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {
  const { selectedGenreId } = useSelectedGenreContext();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenreTitle, setSelectedGenreTitle] = useState("");

  useEffect(() => {
    Promise.all([
      api.get<Movie[]>(`/movies/?Genre_id=${selectedGenreId}`),
      api.get<Genre>(`/genres/${selectedGenreId}`),
    ]).then(([moviesResponse, genreResponse]) => {
      setMovies(moviesResponse.data);
      setSelectedGenreTitle(genreResponse.data.title);
    });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenreTitle}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}