import { Heart } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { Soup } from "lucide-react";
import { useEffect, useState } from "react";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);

  const [isFavourites, setIsFavourites] = useState(localStorage.getItem("favourites")?.includes(recipe.label));

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFavourites(favourites.some((fav) => fav.label === recipe.label));
  }, [recipe]);

  const addRecipeToFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isRecipeAlreadyInFavourites = favourites.some((fav) => fav.label === recipe.label);

    if (isRecipeAlreadyInFavourites) {
      favourites = favourites.filter((fav) => fav.label !== recipe.label);
      setIsFavourites(false);
    } else {
      favourites.push(recipe);
      setIsFavourites(true);
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
      <a href={`https://www.youtube.com/results?search_query=${recipe.label}recipe`} target="_blank" className="relative h-32">
        <div className="'skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt="recipe img"
          className="object-cover w-full h-full transition-opacity duration-500 rounded-md opacity-0 cursor-pointer"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.dislay = "none";
          }}
        />

        <div className="absolute flex items-center gap-1 p-1 text-sm bg-white rounded-full cursor-pointer bottom-2 left-2">
          <Soup size={16} /> {recipe.yield} servings
        </div>
        <div
          className="absolute p-1 bg-white rounded-full cursor-pointer top-1 right-2"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavourites();
          }}
        >
          {!isFavourites && <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />}
          {isFavourites && <Heart size={20} className="text-red-500 fill-red-500" />}
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">{recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)}</p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, idx) => {
          return (
            <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
              <HeartPulse size={16} />
              <span className="text-sm font-semibold tracking-tighter">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCard;
