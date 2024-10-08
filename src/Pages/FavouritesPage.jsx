import RecipeCard from "../Components/RecipeCard";
import getRandomColor from "../lib/utils";

const FavouritesPage = () => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="my-4 text-3xl font-bold md:text-5xl">My Favourites</p>
        {favourites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/notfound.png" className="h-3/4" alt="400 svg" />
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {favourites.map((recipe) => {
            return <RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
