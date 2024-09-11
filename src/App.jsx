import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import FavouritesPage from "./Pages/FavouritesPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
};
export default App;
