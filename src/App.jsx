import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import FavouritesPage from "./Pages/FavouritesPage";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
};
export default App;
