import { Heart } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { Soup } from "lucide-react";

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
      <a href="#" className="relative h-32">
        <img src="/image1.jpg" alt="recipe img" className="object-cover w-full h-full rounded-md cursor-pointer" />
        <div className="absolute flex items-center gap-1 p-1 text-sm bg-white rounded-full cursor-pointer bottom-2 left-2">
          <Soup size={16} /> 4 servings
        </div>
        <div className="absolute p-1 bg-white rounded-full cursor-pointer top-1 right-2">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">Roasted Chicken</p>
      </div>
      <p className="my-2">Turkish Kitchen</p>
      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <Heart size={16} />
          <span className="text-sm font-semibold tracking-tighter">Gluten-Free</span>
        </div>
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm font-semibold tracking-tighter">Heart-Healthy</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
