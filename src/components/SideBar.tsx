import { useEffect, useState } from "react";
import { useSelectedGenreContext } from "../contexts/SelectedGenreContext";
import { api } from "../services/api";
import { Button } from "./Button";

export interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar() {
  const { selectedGenreId, changeSelectedGenre } = useSelectedGenreContext();
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    api.get<Genre[]>("/genres").then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            title={genre.title}
            iconName={genre.name}
            onClick={() => changeSelectedGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}