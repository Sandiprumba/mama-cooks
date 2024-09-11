import { Search } from "lucide-react";

import RecipeCard from "../Components/RecipeCard";
import { useEffect, useState } from "react";

const APP_KEY = "888669bda5b7a5a48b17502ed3551837";
const APP_ID = "89a765c6";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`);
      const data = res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="flex items-center gap-2 shadow-md input">
            <Search size={"24"} />
            <input type="text" className="text-sm md:text-md grow " placeholder="What do you want to cook today?" />
          </label>
        </form>
        <h1 className="mt-4 font-bold text-3cl md:text-5xl">Recommended recipes</h1>
        <p className="my-2 ml-1 text-sm font-semibold tracking-tight text-slate-500">Popular choices</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard recipes={recipes} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
