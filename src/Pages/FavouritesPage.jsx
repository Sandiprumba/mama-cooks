import RecipeCard from "../Components/RecipeCard";

const FavouritesPage = () => {
  const fav = false;
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="my-4 text-3xl font-bold md:text-5xl">My Favourites</p>
        {!fav && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/notfound.png" className="h-3/4" alt="404 svg" />
          </div>
        )}
        {fav && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
