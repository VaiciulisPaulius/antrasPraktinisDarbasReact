import React from 'react'
import {useNavigate} from "react-router";
import FavouriteRecipeIcon from "./FavouriteRecipeIcon.jsx";

function RecipeCard({recipe}) {
    const navigate = useNavigate();
    return (
        <div className="p-4 bg-white border rounded-lg shadow-sm">
            <div className={"hover:bg-gray-50 cursor-pointer"} onClick={() => navigate(`/recipe/${recipe.id}`)}>
                <img src={recipe.image} alt={recipe.name} className="w-full h-36 object-cover mb-2"/>
                <h3 className="text-xl font-semibold">{recipe.name}</h3>
                <p className="text-gray-700">Cuisine: {recipe.cuisine}</p>
                <p className="text-gray-700">Difficulty: {recipe.difficulty}</p>
            </div>
            <FavouriteRecipeIcon recipeId={recipe.id}/>
        </div>
    )
}

export default RecipeCard
