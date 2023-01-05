import { createContext, useContext, useState } from "react";

interface SelectedGenreContextData {
  selectedGenreId: number;
  changeSelectedGenre: (selectedGenreId: number | (() => number)) => void;
}

const SelectedGenreContext = createContext({} as SelectedGenreContextData);

export const useSelectedGenreContext = () => useContext(SelectedGenreContext);

interface SelectedGenreContextProviderProps {
  children: React.ReactNode;
}

export const SelectedGenreContextProvider: React.FC<
  SelectedGenreContextProviderProps
> = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <SelectedGenreContext.Provider
      value={{
        selectedGenreId,
        changeSelectedGenre: setSelectedGenreId,
      }}
    >
      {children}
    </SelectedGenreContext.Provider>
  );
};