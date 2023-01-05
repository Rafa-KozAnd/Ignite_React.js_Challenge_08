import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

import "./styles/global.scss";

import { SelectedGenreContextProvider } from "./contexts/SelectedGenreContext";
import "./styles/content.scss";
import "./styles/sidebar.scss";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SelectedGenreContextProvider>
        <SideBar />
        <Content />
      </SelectedGenreContextProvider>
    </div>
  );
}